"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

            <div className="container-custom">
                <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="shrink-0"
                    >
                        <div className="relative h-48 w-48 md:h-64 md:w-64">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Daniel Chaves"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 192px, 256px"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-slow" />
                            <div className="absolute -inset-8 rounded-full border border-primary/10 animate-pulse-slow" style={{ animationDelay: "1s" }} />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                                Daniel Chaves
                            </h1>
                            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                                Delivery Manager & Data Engineer
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-8 space-y-4"
                        >
                            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                                Leading enterprise data initiatives with{" "}
                                <span className="font-semibold text-foreground">6 years</span> of
                                experience delivering AI/ML solutions and managing
                                cross-functional teams of{" "}
                                <span className="font-semibold text-foreground">30+ professionals</span>.
                            </p>
                            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                Specializing in modern data stack implementations with{" "}
                                <span className="font-medium text-primary">
                                    Python, SQL, dbt, Airflow, Snowflake
                                </span>{" "}
                                and cloud platforms.
                            </p>
                        </motion.div>

                        {/* Core Expertise */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                Core Expertise
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        Data Platform Architecture & Engineering
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        AI/ML Solutions & Data Products
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        Delivery Management & Team Leadership
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/30 p-4 backdrop-blur-sm">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    <span className="text-sm text-muted-foreground">
                                        Modern Data Stack (dbt, Airflow, Snowflake)
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-4 md:justify-start"
                        >
                            <Link
                                href="/resume"
                                className="btn-primary group"
                            >
                                View Resume
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                View GitHub
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
