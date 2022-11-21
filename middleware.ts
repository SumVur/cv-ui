import {NextRequest, NextResponse} from 'next/server';

export async function middleware(req: NextRequest) {

    const authorization = req.headers.get("authorization") ?? " ";
    const token = authorization.split(" ").pop()
    if (req.url.includes("unauthorized") || req.url.includes("getToken")) {
        return NextResponse.next();
    } else if (process.env.AUTH_TOKEN !== token) {
        return NextResponse.redirect(new URL('/api/unauthorized', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/api/:path*']
};