import type { ReactNode } from 'react'
import { profile } from '../data/profile'
import { Navbar } from './Navbar'
import './Layout.css'

type Props = {
  children: ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div className="layout">
      <div className="layout__grid" aria-hidden />
      <div className="layout__glow layout__glow--cyan" aria-hidden />
      <div className="layout__glow layout__glow--orange" aria-hidden />
      <Navbar />
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <span>{profile.name.toUpperCase()}</span>
        <span>KINAL · PERITO TÉCNICO EN INFORMÁTICA</span>
      </footer>
    </div>
  )
}
