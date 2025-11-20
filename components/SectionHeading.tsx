"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    title,
    subtitle,
    className,
    align = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12",
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto max-w-2xl text-muted-foreground"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
