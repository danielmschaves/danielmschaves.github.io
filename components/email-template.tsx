import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function EmailTemplate({
    name,
    email,
    subject,
    message,
}: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
            <h1>New Message from Portfolio</h1>
            <p>
                <strong>From:</strong> {name} ({email})
            </p>
            <p>
                <strong>Subject:</strong> {subject}
            </p>
            <hr />
            <div style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
                {message}
            </div>
        </div>
    );
}
