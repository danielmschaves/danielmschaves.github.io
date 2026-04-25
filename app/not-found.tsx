import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen pt-24 pb-16 flex items-center justify-center" style={{ background: 'var(--bg)' }}>
            <div className="container-custom">
                <div className="mx-auto max-w-2xl text-center">
                    <h1
                        className="mb-4 font-bold md:text-5xl"
                        style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text)', letterSpacing: '-0.02em' }}
                    >
                        404 — Page Not Found
                    </h1>
                    <p className="mb-8 text-lg" style={{ color: 'var(--text-muted)' }}>
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
