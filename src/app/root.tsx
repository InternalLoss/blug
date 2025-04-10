import React from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'
import {LinksFunction} from '@remix-run/node'

import styles from './tailwind.css?url'
import {Link} from './components/link'

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: styles},
  {rel: 'preconnect', href: 'https://fonts.bunny.net'},
  {
  href: 'https://fonts.bunny.net/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',  
  rel: 'stylesheet',
  },
]

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col h-screen justify-between">
        <div>
          <header className="flex justify-center gap-4 pb-4">
            <NavLink href="/" selected={false}>
              Home
            </NavLink>
            <NavLink
              href="https://bsky.app/profile/billy.wales"
              selected={false}>
              Bluesky
            </NavLink>
            <NavLink href="https://github.com/internalloss" selected={false}>
              GitHub
            </NavLink>
          </header>
          <main>{children}</main>
        </div>
        <footer>
          <p className="text-center text-100 py-4">
            <Link href="https://github.com/haileyok/blug">blug by haileyok</Link>, running on <Link href="https://atproto.com/">ATProtocol</Link>
          </p>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

function NavLink({
  href,
  selected,
  children,
}: {
  href: string
  selected: boolean
  children: string
}) {
  const topClassName = selected ? 'h-1 bg-50' : 'h-1'
  const className = selected ? 'text-50' : 'text-300'

  return (
    <a href={href}>
      <div className={topClassName} />
      <p className={`p-3 ${className}`}>{children}</p>
    </a>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="container mZx-auto pt-10 md:pt-20 pb-20">
      <h1 className="text-5xl md:text-6xl font-bold text-center">
        Uh...something went wrong.
      </h1>
      <div className="p-10">
        <img
          src="/monkey.jpg"
          alt="Monkey muppet meme image"
          className="rounded-md"
        />
      </div>
    </div>
  )
}
