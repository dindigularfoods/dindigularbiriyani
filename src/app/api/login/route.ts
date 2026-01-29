import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        if (password === process.env.ADMIN_PASSWORD) {
            const response = NextResponse.json({ success: true });
            
            // This creates the "Sovereign Key" in your browser
            response.cookies.set("admin_token", "sovereign_granted", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24, // 24 hours
                path: "/",
            });
            
            return response;
        }

        return NextResponse.json({ error: "Invalid Key" }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: "System Error" }, { status: 500 });
    }
}