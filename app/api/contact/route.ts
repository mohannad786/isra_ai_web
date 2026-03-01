import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Support both RESEND_API_KEY and legacy Vite-style VITE_RESEND_API_KEY
const resendApiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Email template matching your website contact section
const createEmailTemplate = (data: { name: string; email: string; subject: string; message: string }) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          /* Mobile-friendly layout */
          @media only screen and (max-width: 600px) {
            .wrapper {
              padding: 24px 12px !important;
            }
            .card {
              border-radius: 20px !important;
            }
            .section-padding {
              padding: 20px 16px !important;
            }
            .stack-column,
            .stack-column td {
              display: block !important;
              width: 100% !important;
            }
            .text-center-mobile {
              text-align: center !important;
            }
            .full-width-img {
              max-width: 160px !important;
            }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f9fafb;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" class="wrapper" style="padding: 40px 20px;">
              <table role="presentation" class="card" style="max-width: 640px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);">
                
                <!-- Header with gradient + logo -->
                <tr>
                  <td style="background: linear-gradient(135deg, #dc2626 0%, #f97373 40%, #f43f5e 100%); padding: 32px 24px 28px 24px; text-align: center;">
                    <img 
                      src="https://isra-ai.co/ISRA_AI_copy.png"
                      alt="ISRA AI Logo" 
                      class="full-width-img"
                      style="display: block; margin: 0 auto 16px auto; max-width: 180px; height: auto;"
                    />
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">
                      New Contact from ISRA AI Website
                    </h1>
                    <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px;">
                      AI You Can Trust. Results You Can Measure.
                    </p>
                  </td>
                </tr>

                <!-- Intro section similar to contact form -->
                <tr>
                  <td class="section-padding" style="padding: 26px 28px 10px 28px;">
                    <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #111827; text-align: left;">
                      New enquiry from your contact form
                    </h2>
                    <p style="margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; text-align: left;">
                      Someone just reached out through the ISRA AI website. Below are the details they provided in the contact form.
                    </p>
                  </td>
                </tr>

                <!-- Contact details + message (two-column on desktop, stacked on mobile) -->
                <tr>
                  <td style="padding: 10px 28px 26px 28px;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr class="stack-column">
                        <!-- Left: Contact info card -->
                        <td style="padding: 0 0 16px 0; vertical-align: top;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 18px 18px 16px 18px; background-color: #f9fafb; border-radius: 14px; border-left: 4px solid #dc2626;">
                                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                  <tr>
                                    <td style="padding-bottom: 10px;">
                                      <span style="display: inline-block; font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                                      <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #111827;">${data.name}</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-bottom: 10px;">
                                      <span style="display: inline-block; font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                      <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 600; color: #dc2626;">
                                        <a href="mailto:${data.email}" style="color: #dc2626; text-decoration: none;">${data.email}</a>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span style="display: inline-block; font-size: 11px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Subject</span>
                                      <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 600; color: #111827;">${data.subject}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr class="stack-column">
                        <!-- Right / below: Message card -->
                        <td style="padding: 0; vertical-align: top;">
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding-top: 12px;">
                                <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 14px; padding: 20px 18px 20px 18px;">
                                  <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 700; color: #111827;">Message</h3>
                                  <div style="font-size: 14px; line-height: 1.7; color: #374151; white-space: pre-wrap;">${data.message}</div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
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
                          <p style="margin: 10px 0 0 0; font-size: 12px; color: #6b7280;">
                            We don't build experimental AI. We build systems you can trust—designed for scale, governance, and real impact.
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!resend) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Email service is not configured. Please set RESEND_API_KEY on the server.',
                },
                { status: 500 }
            );
        }

        // Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Ensure Resend is configured
        if (!resend) {
            console.error('Resend API key is not configured');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Email service is not configured. Please try again later.',
                },
                { status: 500 }
            );
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

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully',
            id: result.data?.id,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to send email',
            },
            { status: 500 }
        );
    }
}
