// Email sending utility for Next.js

interface EmailData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: result.error || 'Failed to send email'
            };
        }

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
