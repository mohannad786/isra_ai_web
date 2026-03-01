(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Isra-ai/isra-ai/lib/email.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Email sending utility for Next.js
__turbopack_context__.s([
    "sendContactEmail",
    ()=>sendContactEmail
]);
async function sendContactEmail(data) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (!response.ok) {
            return {
                success: false,
                error: result.error || 'Failed to send email'
            };
        }
        return {
            success: true
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'An unexpected error occurred'
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Isra-ai_isra-ai_lib_email_ts_559702e1._.js.map