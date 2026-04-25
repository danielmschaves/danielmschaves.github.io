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
  Mail,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  const services = [
    {
      title: "Project Management and Strategy",
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
      icon: <Lightbulb className="h-7 w-7" />,
    },
    {
      title: "Resumes and Interviews",
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
      icon: <FileText className="h-7 w-7" />,
    },
    {
      title: "AI and Data Consultancy",
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
      icon: <Brain className="h-7 w-7" />,
    },
    {
      title: "Data Platform Architecture",
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
      icon: <Database className="h-7 w-7" />,
    },
    {
      title: "AI/ML Solutions Development",
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
      icon: <Cpu className="h-7 w-7" />,
    },
    {
      title: "Data Product Development",
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
      icon: <BarChart className="h-7 w-7" />,
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label mb-4">Services</p>
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            Professional Services
          </h1>
          <p
            className="mx-auto text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)', maxWidth: 680 }}
          >
            With <strong style={{ color: 'var(--text)', fontWeight: 600 }}>6 years</strong> of
            experience leading enterprise data initiatives, I deliver comprehensive solutions in
            data engineering, AI/ML development, and delivery management.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden transition-all duration-[250ms]"
              style={{
                background: 'rgba(15,23,42,0.5)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-xl)',
                backdropFilter: 'blur(10px)',
                padding: 28,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(14,165,233,0.3)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--line)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 52, height: 52,
                    background: 'var(--primary-tint)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--primary-400)',
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h2
                    className="font-bold text-xl"
                    style={{ color: 'var(--text)', letterSpacing: '-0.015em' }}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Core services */}
              <div
                className="mb-5 rounded-lg p-5"
                style={{
                  background: 'rgba(15,23,42,0.4)',
                  border: '1px solid var(--line-soft)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <h3 className="mb-4 font-semibold text-sm" style={{ color: 'var(--text)' }}>
                  Core Services
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {service.coreServices.map((cs, csIdx) => (
                    <div key={csIdx}>
                      <h4 className="mb-2 text-xs font-semibold" style={{ color: 'var(--primary-400)' }}>
                        {cs.name}
                      </h4>
                      <ul className="flex flex-col gap-1.5">
                        {cs.items.map((item, iIdx) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-2 text-xs leading-relaxed"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            <span
                              className="mt-1.5 shrink-0 rounded-full"
                              style={{ width: 4, height: 4, background: 'var(--primary-500)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div>
                <h3 className="mb-3 text-xs font-semibold" style={{ color: 'var(--text)' }}>
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((item, idealIdx) => (
                    <div
                      key={idealIdx}
                      className="flex items-center gap-1.5 text-xs"
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--line)',
                        background: 'var(--ink-3)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: 'var(--primary-400)' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div
            className="mx-auto max-w-3xl rounded-2xl p-12"
            style={{
              border: '1px solid rgba(14,165,233,0.2)',
              background: 'var(--primary-tint)',
            }}
          >
            <h2
              className="mb-4 font-bold"
              style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--text)', letterSpacing: '-0.02em' }}
            >
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>
              Let&apos;s discuss how I can help transform your data initiatives and drive measurable business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
              <Link href="/resume" className="btn-secondary">
                <FileText className="h-4 w-4" />
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
