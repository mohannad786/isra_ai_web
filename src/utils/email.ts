// Email sending utility - works with both local dev and Vercel deployment

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  // In production (Vercel), use relative path
  // In development, use localhost
  const isDevelopment = import.meta.env.DEV;
  const apiUrl = isDevelopment
    ? (import.meta.env.VITE_API_URL || 'http://localhost:3001')
    : ''; // Vercel uses relative paths

  try {
    const response = await fetch(`${apiUrl}/api/contact`, {
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
