import { type ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="site">
      <main className="site-main">
        {children}
      </main>
      <footer className="site-footer">
        <p>Built with React & TypeScript by Andi Sultan</p>
      </footer>
    </div>
  )
}