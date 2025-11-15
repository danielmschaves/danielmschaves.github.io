import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Services - Daniel Chaves",
  description:
    "Professional data engineering, AI/ML solutions, and delivery management services by Daniel Chaves.",
};

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
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
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
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
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
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Data Platform Architecture",
      description:
        "Design and implement modern data platforms from scratch in cloud environments (AWS, GCP, Azure), including data lakes, data warehouses, and data marts.",
      features: [
        "Modern data stack implementation (dbt, Dagster, Airflow, Snowflake, Databricks)",
        "Legacy system migration to modern architectures",
        "Data governance framework implementation",
        "Data quality and reliability assurance",
        "Scalable and performant data platform design",
      ],
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: "AI/ML Solutions Development",
      description:
        "End-to-end development and deployment of AI/ML products including intelligent agents, machine learning models, generative AI solutions, and chatbots.",
      features: [
        "Intelligent agent development",
        "Machine learning model development and deployment",
        "Generative AI solutions",
        "Chatbot and conversational AI",
        "MLOps and model lifecycle management",
      ],
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Data Product Development",
      description:
        "Complete data product development from concept to production, including data strategies, dashboards, and analytics solutions.",
      features: [
        "Data strategy development for enterprise clients",
        "Data visualization and dashboard development (Power BI, Looker, Streamlit)",
        "Cross-functional team leadership",
        "End-to-end product development lifecycle",
        "Pharmaceutical and healthcare sector expertise",
      ],
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="section-padding bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Professional Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-dark-200 md:text-xl">
            With 6 years of experience leading enterprise data initiatives, I
            deliver comprehensive solutions in data engineering, AI/ML
            development, and delivery management. Specializing in modern data
            stack implementations and cross-functional team leadership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="card">
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary-500/20 text-primary-400">
                  {service.icon}
                </div>
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    {service.emoji && (
                      <span className="mr-2">{service.emoji}</span>
                    )}
                    {service.title}
                  </h2>
                </div>
              </div>
              <p className="mb-8 text-lg text-dark-200">
                {service.description}
              </p>

              {/* Core Services */}
              {service.coreServices && (
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Core Services
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {service.coreServices.map((coreService, csIdx) => (
                      <div key={csIdx} className="space-y-3">
                        <h4 className="font-semibold text-primary-400">
                          {coreService.name}
                        </h4>
                        <ul className="space-y-2">
                          {coreService.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-sm text-dark-200"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features (for simpler services) */}
              {service.features && (
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-dark-200"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ideal For */}
              {service.idealFor && (
                <div className="mt-8 rounded-lg border border-primary-500/20 bg-primary-500/5 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Ideal For
                  </h3>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {service.idealFor.map((item, idealIdx) => (
                      <li
                        key={idealIdx}
                        className="flex items-start gap-2 text-dark-200"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="card mx-auto max-w-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/10">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-dark-200">
              Let&apos;s discuss how I can help transform your data initiatives and
              drive measurable business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:danielmschaves@gmail.com"
                className="btn-primary"
              >
                Contact Me
              </a>
              <Link
                href="/resume"
                className="btn-secondary dark:bg-dark-800 dark:border-dark-600 dark:text-white dark:hover:bg-dark-700"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

