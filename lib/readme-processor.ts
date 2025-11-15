interface ProcessedReadme {
  overview: string | null;
  highlights: string[];
  architecture: string | null;
  links: Array<{ label: string; url: string }>;
  keyFeatures: string[];
}

export function processReadmeContent(content: string): ProcessedReadme {
  const lines = content.split("\n");
  const result: ProcessedReadme = {
    overview: null,
    highlights: [],
    architecture: null,
    links: [],
    keyFeatures: [],
  };

  let currentSection = "";
  let skipSection = false;
  let overviewLines: string[] = [];
  let inCodeBlock = false;

  // Helper to check if line is setup/installation related
  const isSetupInstruction = (text: string): boolean => {
    const setupKeywords = [
      "make ",
      "npm ",
      "poetry ",
      "git clone",
      "install",
      "configure",
      "credentials",
      "env file",
      ".env",
      "profiles.yml",
      "keyfile",
      "prerequisites",
      "requirements",
      "setup",
      "run:",
      "execute:",
    ];
    return setupKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
  };

  // Helper to check if line is value-focused
  const isValueFocused = (text: string): boolean => {
    const valueKeywords = [
      "implement",
      "develop",
      "create",
      "build",
      "deliver",
      "achieve",
      "improve",
      "optimize",
      "transform",
      "enable",
      "provide",
      "support",
      "leverage",
      "utilize",
      "process",
      "analyze",
      "validate",
      "orchestrate",
      "migrate",
      "deploy",
    ];
    return valueKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword)
    );
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Track code blocks
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // Skip empty lines
    if (!line) continue;

    // Detect and skip setup sections
    if (
      /^#+\s*(pré-requisitos|prerequisites|requirements|setup|instalação|installation|configuração|configuration|comandos|commands|troubleshooting|solução de problemas|development|env|credentials)/i.test(
        line
      )
    ) {
      currentSection = "skip";
      continue;
    }

    // Reset skip section on new main heading
    if (line.startsWith("# ") && currentSection === "skip") {
      currentSection = "";
    }

    if (currentSection === "skip") continue;

    // Extract overview from first meaningful paragraph
    if (!result.overview) {
      if (
        line &&
        !line.startsWith("#") &&
        !line.startsWith("-") &&
        !line.startsWith("*") &&
        !line.startsWith("!") &&
        line.length > 30 &&
        !isSetupInstruction(line)
      ) {
        // Skip if it's clearly a setup instruction
        if (
          !/^(this project|este repositório|o objetivo|the goal|this repository)/i.test(
            line
          )
        ) {
          overviewLines.push(line);
        } else {
          // This is likely the overview
          overviewLines.push(line);
        }
      }
    }

    // Extract links (dashboards, visualizations, models)
    const linkMatch = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const label = linkMatch[1].toLowerCase();
      if (
        /(dashboard|demo|visualization|modelo|conceptual|architecture|diagram|link|resource)/i.test(
          label
        ) &&
        !/(github|repository|repo)/i.test(label)
      ) {
        result.links.push({
          label: linkMatch[1],
          url: linkMatch[2],
        });
      }
    }

    // Extract architecture/technical approach
    if (
      /^#+\s*(architecture|arquitetura|high level|data flow|camadas|technical approach|overview)/i.test(
        line
      )
    ) {
      currentSection = "architecture";
      continue;
    }

    if (currentSection === "architecture") {
      if (line.startsWith("-") || line.startsWith("*")) {
        const archLine = line.replace(/^[-*]\s*/, "").trim();
        if (archLine.length > 15 && !isSetupInstruction(archLine)) {
          result.architecture = archLine;
          currentSection = ""; // Take first meaningful line
        }
      } else if (line && !line.startsWith("#") && line.length > 20 && !isSetupInstruction(line)) {
        result.architecture = line;
        currentSection = "";
      }
    }

    // Extract value-focused highlights from any list
    if (line.startsWith("-") || line.startsWith("*")) {
      const item = line.replace(/^[-*]\s*/, "").trim();
      
      // Skip if it's a setup instruction
      if (isSetupInstruction(item)) continue;

      // Look for value-focused content
      if (
        item.length > 25 &&
        (isValueFocused(item) ||
          /(using|with|from|to|for|by|through)/i.test(item))
      ) {
        // Prioritize items that mention technologies or outcomes
        if (
          /(dbt|bigquery|snowflake|airflow|python|sql|data|pipeline|model|dashboard|analysis|insight|solution)/i.test(
            item
          )
        ) {
          result.highlights.push(item);
        }
      }
    }

    // Extract from specific sections
    if (
      /^#+\s*(features|características|highlights|achievements|key|benefits|overview)/i.test(
        line
      )
    ) {
      currentSection = "features";
      continue;
    }

    if (currentSection === "features" && (line.startsWith("-") || line.startsWith("*"))) {
      const feature = line.replace(/^[-*]\s*/, "").trim();
      if (feature.length > 15 && !isSetupInstruction(feature)) {
        result.keyFeatures.push(feature);
      }
    }
  }

  // Set overview from collected lines (take first 2-3 sentences)
  if (overviewLines.length > 0) {
    const overviewText = overviewLines
      .slice(0, 3)
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    
    // Clean up common README patterns
    result.overview = overviewText
      .replace(/^(este repositório|this repository|this project)/i, "")
      .replace(/^(contém|contains)/i, "")
      .trim()
      .replace(/^[.,]\s*/, "");
  }

  // Limit and deduplicate highlights
  result.highlights = Array.from(new Set(result.highlights)).slice(0, 6);
  result.keyFeatures = Array.from(new Set(result.keyFeatures)).slice(0, 5);

  return result;
}

