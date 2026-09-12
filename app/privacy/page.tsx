import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
    title: 'Privacy Policy - ISRA AI',
    description: 'How ISRA AI LLC collects, uses, and protects information on its corporate website.',
};

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            effectiveDate="September 10, 2026"
            lastUpdated="September 10, 2026"
        >
            <div className="legal-content">
                <h2>1. Introduction</h2>
                <p>
                    ISRA AI LLC (&quot;ISRA AI,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a limited liability company organized under the laws of the State of New Mexico, United States, respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our corporate website at www.isra-ai.co (the &quot;Site&quot;).
                </p>
                <p>
                    <strong>Scope.</strong> This Privacy Policy covers only the corporate Site. It does not cover any ISRA AI application, including the Khayal app (khayal.isra-ai.co) or any future application published under the ISRA AI LLC parent company. Each application has its own, separate Privacy Policy governing the data collected through that application, which will typically involve more sensitive categories of data (including health information) and is subject to additional protections described in that document.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                    <strong>a. Information You Provide Directly.</strong> When you fill out a contact, careers, partnership, or investor-inquiry form on the Site, or email us, we may collect your name, email address, company name, job title, phone number, and the content of your message.
                </p>
                <p>
                    <strong>b. Automatically Collected Information.</strong> When you visit the Site, we and our service providers may automatically collect certain technical information, including your IP address, browser type, device type, operating system, referring URLs, pages viewed, and timestamps, via cookies, log files, and similar tracking technologies.
                </p>
                <p id="cookies">
                    <strong>c. Cookies and Similar Technologies.</strong> We use cookies and similar technologies to operate the Site, understand usage (e.g., via analytics providers), and remember your preferences. You can control cookies through your browser settings; disabling cookies may affect Site functionality.
                </p>
                <p>
                    We do not knowingly collect health, medical, financial account, or other sensitive personal information through the corporate Site itself.
                </p>

                <h2>3. How We Use Information</h2>
                <p>We use the information described above to:</p>
                <ol>
                    <li>Respond to inquiries and communicate with you;</li>
                    <li>Operate, maintain, and improve the Site;</li>
                    <li>Understand aggregate usage trends and Site performance;</li>
                    <li>Evaluate partnership, investment, or employment inquiries;</li>
                    <li>Detect, prevent, and address technical issues, fraud, or security incidents;</li>
                    <li>Comply with legal obligations.</li>
                </ol>
                <p>We do not sell your personal information.</p>

                <h2>4. How We Share Information</h2>
                <p>We may share information with:</p>
                <ol>
                    <li><strong>Service Providers.</strong> Third parties that perform services on our behalf, such as website hosting, analytics, email delivery, and customer relationship management, under contractual obligations to protect your information.</li>
                    <li><strong>Payment and Financial Partners.</strong> Where the Site facilitates any payment-related function, information may be shared with payment processors (such as Stripe) and financial institutions (such as Mercury) solely to complete and secure those functions, subject to their own privacy policies.</li>
                    <li><strong>Legal and Safety Purposes.</strong> Where required by law, legal process, or to protect the rights, property, or safety of ISRA AI LLC, our users, or the public.</li>
                    <li><strong>Corporate Transactions.</strong> In connection with a merger, acquisition, financing, or sale of company assets, subject to standard confidentiality protections.</li>
                </ol>
                <p>We do not share your information with third parties for their own independent marketing purposes without your consent.</p>

                <h2>5. International Data Transfers</h2>
                <p>
                    ISRA AI LLC is a New Mexico, United States limited liability company with personnel located in Pakistan and other jurisdictions. Information collected through the Site may be accessed, processed, transferred to, and stored in the United States, Pakistan, and other countries in which we or our service providers operate, which may have data protection laws that differ from those of your home jurisdiction. By using the Site, you acknowledge and consent to this transfer, processing, and storage of your information. Where required by applicable law, we implement appropriate safeguards for such transfers.
                </p>

                <h2>6. Data Retention</h2>
                <p>
                    We retain personal information collected through the Site for as long as reasonably necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements, after which it is deleted or anonymized.
                </p>

                <h2>7. Your Privacy Rights</h2>
                <p>
                    Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your personal information, to object to certain processing, or to receive a copy of your information in a portable format. Residents of California, Colorado, Connecticut, Virginia, and other states with comprehensive privacy laws, as well as residents of the European Economic Area and United Kingdom, may have specific statutory rights under applicable law (e.g., CCPA/CPRA, CPA, CTDPA, GDPR, UK GDPR). To exercise any of these rights, contact us at info@isra-ai.co. We will respond within the time period required by applicable law. We do not discriminate against individuals for exercising their privacy rights.
                </p>

                <h2>8. Children&apos;s Privacy</h2>
                <p>
                    The Site is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If we learn we have inadvertently collected information from a child, we will delete it promptly. If you believe a child has provided us information, contact us at info@isra-ai.co.
                </p>

                <h2>9. Data Security</h2>
                <p>
                    We implement reasonable administrative, technical, and physical safeguards designed to protect information collected through the Site from unauthorized access, use, alteration, or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                </p>

                <h2>10. Third-Party Links</h2>
                <p>
                    The Site may link to third-party websites, including our application-specific sites (e.g., khayal.isra-ai.co) and app store listings. This Policy does not apply to those third-party sites, and we encourage you to review their privacy policies separately.
                </p>

                <h2>11. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date reflects the most recent revision. Material changes will be indicated on the Site. Your continued use of the Site after changes become effective constitutes acceptance of the revised Policy.
                </p>

                <h2>12. Contact Us</h2>
                <p>For questions about this Privacy Policy or to exercise your privacy rights, contact:</p>
                <p>
                    ISRA AI LLC
                    <br />
                    A New Mexico limited liability company
                    <br />
                    Email: info@isra-ai.co
                    <br />
                    Website: www.isra-ai.co
                </p>

                <hr />
                {/* <p className="legal-note">
                    This document is a template provided for general informational purposes and does not constitute legal advice. Given ISRA AI LLC&apos;s cross-border operations (US entity, Pakistan-based team) and its plan to process health data through affiliated applications, this document should be reviewed by a licensed attorney with U.S. privacy law expertise before publication.
                </p> */}
            </div>
        </LegalLayout>
    );
}
