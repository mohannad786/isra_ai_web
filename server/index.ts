import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

// Email template matching your website theme
const createEmailTemplate = (data: { name: string; email: string; subject: string; message: string }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f9fafb;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header with gradient -->
                <tr>
                  <td style="background: linear-gradient(135deg, #dc2626 0%, #f43f5e 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      New Contact Form Submission
                    </h1>
                    <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                      From ISRA AI Website
                    </p>
                  </td>
                </tr>

                <!-- Contact Information -->
                <tr>
                  <td style="padding: 30px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 20px; background-color: #f9fafb; border-radius: 12px; border-left: 4px solid #dc2626;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding-bottom: 12px;">
                                <span style="display: inline-block; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #111827;">${data.name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 12px;">
                                <span style="display: inline-block; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #dc2626;">
                                  <a href="mailto:${data.email}" style="color: #dc2626; text-decoration: none;">${data.email}</a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <span style="display: inline-block; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Subject</span>
                                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #111827;">${data.subject}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message Content -->
                <tr>
                  <td style="padding: 0 30px 30px 30px;">
                    <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; padding: 24px;">
                      <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #111827;">Message</h3>
                      <div style="font-size: 15px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${data.message}</div>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="text-align: center;">
                          <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #111827;">
                            ISRA AI
                          </p>
                          <p style="margin: 0; font-size: 13px; color: #6b7280;">
                            AI You Can Trust. Results You Can Measure.
                          </p>
                          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
                              This email was sent from the contact form at 
                              <a href="https://isra-ai.co" style="color: #dc2626; text-decoration: none;">isra-ai.co</a>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

// API endpoint for sending contact form emails
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email address'
            });
        }

        // Send email using Resend
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'isra.email.11@gmail.com',
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: createEmailTemplate({ name, email, subject, message }),
        });

        console.log('Email sent successfully:', result);

        res.json({
            success: true,
            message: 'Email sent successfully',
            id: result.data?.id
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            error: error instanceof Error ? error.message : 'Failed to send email'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API server is running' });
});

app.listen(port, () => {
    console.log(`🚀 API server running on http://localhost:${port}`);
});
