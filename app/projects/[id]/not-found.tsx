import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Project Not Found
          </h1>
          <p className="mb-8 text-lg text-dark-200">
            The project you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="btn-primary">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

