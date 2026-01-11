// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//     return NextResponse.json("hello from the about page")
//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher: '/about/:path*',
// }


import { NextResponse } from 'next/server'

export function proxy(request) {
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.rewrite(new URL('/about', request.url))
    }
}