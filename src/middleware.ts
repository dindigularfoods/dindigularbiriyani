import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("admin_token");
    const isDashboard = request.nextUrl.pathname.startsWith("/admin");

    if (isDashboard && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

// src/middleware.ts
export const config = {
    // This allows the login page and the login API to work without a cookie
    matcher: ["/((?!api/login|login|_next/static|_next/image|favicon.ico).*)"],
};