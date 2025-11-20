"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
            <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
                        404 - Page Not Found
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
