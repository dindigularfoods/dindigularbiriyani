import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    try {
        const response = NextResponse.json({ success: true });
        
        // Deletes the cookie by setting it to expire in the past
        response.cookies.set("admin_token", "", {
            path: "/",
            expires: new Date(0),
        });

        return response;
    } catch (error) {
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
}