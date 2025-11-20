"use client";

import Link from "next/link";
import {
  Lightbulb,
  FileText,
  Brain,
  Database,
  Cpu,
  BarChart,
  CheckCircle2,
  ArrowRight,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const services = [
    {
      title: "Project Management and Strategy",
      emoji: "💡",
      description:
        "Strategic project leadership that bridges business objectives with execution excellence. I deliver results-driven project management that transforms complexity into clarity and vision into measurable outcomes.",
      coreServices: [
        {
          name: "Strategic Planning & Roadmapping",
          items: [
            "Business case development and ROI analysis",
            "Product roadmap design and prioritization",
            "Stakeholder alignment and communication strategies",
            "Risk assessment and mitigation planning",
          ],
        },
        {
          name: "Project Delivery & Execution",
          items: [
            "End-to-end project lifecycle management",
            "Agile and hybrid methodology implementation",
            "Cross-functional team coordination",
            "Budget and resource optimization",
          ],
        },
        {
          name: "Process Optimization",
          items: [
            "Workflow analysis and improvement",
            "Team efficiency enhancement",
            "Tool stack evaluation and integration",
            "Performance metrics and KPI frameworks",
          ],
        },
        {
          name: "Change Management",
          items: [
            "Organizational transformation guidance",
            "Adoption strategy development",
            "Training and enablement programs",
            "Cultural alignment initiatives",
          ],
        },
      ],
      idealFor: [
        "Startups scaling operations",
        "Companies undergoing digital transformation",
        "Organizations launching new products or services",
        "Teams needing interim project leadership",
      ],
      icon: <Lightbulb className="h-8 w-8" />,
    },
    {
      title: "Resumes and Interviews",
      emoji: "📄",
      description:
        "Personal branding and career positioning services that help professionals stand out in competitive markets. I craft compelling narratives that translate experience into opportunity.",
      coreServices: [
        {
          name: "Resume Development",
          items: [
            "ATS-optimized resume writing",
            "Achievement-focused content creation",
            "Industry-specific formatting and keywords",
            "Executive and technical resume specialization",
          ],
        },
        {
          name: "LinkedIn Optimization",
          items: [
            "Profile strategy and headline development",
            "About section storytelling",
            "Experience section enhancement",
            "Skills and endorsement optimization",
          ],
        },
        {
          name: "Interview Preparation",
          items: [
            "Behavioral interview coaching (STAR method)",
            "Technical interview strategies",
            "Executive presence development",
            "Mock interviews with detailed feedback",
          ],
        },
        {
          name: "Career Strategy",
          items: [
            "Personal brand positioning",
            "Job search strategy development",
            "Salary negotiation coaching",
            "Career transition planning",
          ],
        },
      ],
      idealFor: [
        "Professionals seeking career advancement",
        "Job seekers in competitive markets",
        "Career changers and industry switchers",
        "Executives and senior leaders",
      ],
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "AI and Data Consultancy",
      emoji: "🤖",
      description:
        "Practical AI implementation and data strategy that drives business value. I help organizations harness AI and data capabilities without the hype, focusing on measurable impact and sustainable solutions.",
      coreServices: [
        {
          name: "AI Strategy & Implementation",
          items: [
            "AI readiness assessment and roadmap",
            "Use case identification and prioritization",
            "AI tool evaluation and selection",
            "Custom AI solution design and deployment",
          ],
        },
        {
          name: "Data Strategy & Analytics",
          items: [
            "Data governance framework development",
            "Analytics infrastructure design",
            "Dashboard and reporting solutions",
            "Predictive modeling and forecasting",
          ],
        },
        {
          name: "Automation & Efficiency",
          items: [
            "Process automation identification",
            "Workflow optimization with AI tools",
            "Integration strategy and execution",
            "ROI measurement and optimization",
          ],
        },
        {
          name: "Training & Enablement",
          items: [
            "AI literacy workshops for teams",
            "Tool-specific training programs",
            "Best practices and guidelines development",
            "Ongoing support and consultation",
          ],
        },
      ],
      idealFor: [
        "Businesses exploring AI adoption",
        "Teams seeking to leverage data for decisions",
        "Organizations automating operations",
        "Companies needing AI implementation guidance",
      ],
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: "Data Platform Architecture",
      emoji: "🏗️",
      description:
        "Design and implement modern data platforms from scratch in cloud environments (AWS, GCP, Azure), including data lakes, data warehouses, and data marts.",
      coreServices: [
        {
          name: "Platform Design & Implementation",
          items: [
            "Modern data stack implementation (dbt, Dagster, Airflow, Snowflake, Databricks)",
            "Cloud-native architecture design (AWS, GCP, Azure)",
            "Data lake and data warehouse setup",
            "Scalable and performant data platform design",
          ],
        },
        {
          name: "Migration & Modernization",
          items: [
            "Legacy system migration to modern architectures",
            "Data pipeline refactoring and optimization",
            "Infrastructure modernization strategies",
            "Zero-downtime migration planning",
          ],
        },
        {
          name: "Data Governance & Quality",
          items: [
            "Data governance framework implementation",
            "Data quality and reliability assurance",
            "Metadata management and cataloging",
            "Compliance and security frameworks",
          ],
        },
        {
          name: "Performance & Optimization",
          items: [
            "Query performance optimization",
            "Cost optimization strategies",
            "Scalability planning and implementation",
            "Monitoring and alerting setup",
          ],
        },
      ],
      idealFor: [
        "Organizations building data platforms from scratch",
        "Companies migrating from legacy systems",
        "Teams needing scalable data infrastructure",
        "Businesses requiring cloud-native solutions",
      ],
      icon: <Database className="h-8 w-8" />,
    },
    {
      title: "AI/ML Solutions Development",
      emoji: "🧠",
      description:
        "End-to-end development and deployment of AI/ML products including intelligent agents, machine learning models, generative AI solutions, and chatbots.",
      coreServices: [
        {
          name: "Intelligent Agents & Automation",
          items: [
            "Intelligent agent development and deployment",
            "Workflow automation with AI",
            "Decision-making system implementation",
            "Multi-agent system architecture",
          ],
        },
        {
          name: "Machine Learning Models",
          items: [
            "Machine learning model development and deployment",
            "Model training and optimization",
            "Feature engineering and selection",
            "Model evaluation and validation",
          ],
        },
        {
          name: "Generative AI Solutions",
          items: [
            "Generative AI solution development",
            "LLM integration and fine-tuning",
            "Content generation systems",
            "AI-powered creative tools",
          ],
        },
        {
          name: "MLOps & Lifecycle Management",
          items: [
            "MLOps pipeline implementation",
            "Model lifecycle management",
            "Continuous integration and deployment",
            "Model monitoring and retraining",
          ],
        },
      ],
      idealFor: [
        "Companies building AI-powered products",
        "Organizations automating business processes",
        "Teams implementing generative AI solutions",
        "Businesses needing MLOps infrastructure",
      ],
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      title: "Data Product Development",
      emoji: "📊",
      description:
        "Complete data product development from concept to production, including data strategies, dashboards, and analytics solutions.",
      coreServices: [
        {
          name: "Data Strategy & Planning",
          items: [
            "Data strategy development for enterprise clients",
            "Product roadmap and vision development",
            "Stakeholder alignment and requirements gathering",
            "Success metrics and KPI definition",
          ],
        },
        {
          name: "Data Visualization & Dashboards",
          items: [
            "Data visualization and dashboard development (Power BI, Looker, Streamlit)",
            "Interactive reporting solutions",
            "Self-service analytics platforms",
            "Custom visualization components",
          ],
        },
        {
          name: "Product Development Lifecycle",
          items: [
            "End-to-end product development lifecycle",
            "Agile development methodologies",
            "User experience and design integration",
            "Product testing and quality assurance",
          ],
        },
        {
          name: "Team Leadership & Delivery",
          items: [
            "Cross-functional team leadership",
            "Pharmaceutical and healthcare sector expertise",
            "Client relationship management",
            "Project delivery and stakeholder communication",
          ],
        },
      ],
      idealFor: [
        "Enterprise clients needing data strategies",
        "Organizations building analytics products",
        "Companies in pharmaceutical and healthcare sectors",
        "Teams requiring end-to-end product development",
      ],
      icon: <BarChart className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Professional Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            With 6 years of experience leading enterprise data initiatives, I
            deliver comprehensive solutions in data engineering, AI/ML
            development, and delivery management. Specializing in modern data
            stack implementations and cross-functional team leadership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-8 flex items-start gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Core Services */}
              {service.coreServices && (
                <div className="mb-8 rounded-xl bg-secondary/30 p-6">
                  <h3 className="mb-6 text-lg font-semibold text-foreground">
                    Core Services
                  </h3>
                  <div className="grid gap-8 md:grid-cols-2">
                    {service.coreServices.map((coreService, csIdx) => (
                      <div key={csIdx} className="space-y-3">
                        <h4 className="font-medium text-primary">
                          {coreService.name}
                        </h4>
                        <ul className="space-y-2">
                          {coreService.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ideal For */}
              {service.idealFor && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    Ideal For
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.idealFor.map((item, idealIdx) => (
                      <div
                        key={idealIdx}
                        className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Let&apos;s discuss how I can help transform your data initiatives and
              drive measurable business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="btn-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
              <Link href="/resume" className="btn-secondary">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

