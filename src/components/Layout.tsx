import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import './Layout.css'

export function Layout() {
  return (
    <div className="layout">
      <div className="layout__grid" aria-hidden />
      <div className="layout__glow layout__glow--cyan" aria-hidden />
      <div className="layout__glow layout__glow--orange" aria-hidden />
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <footer className="layout__footer">
        <span>RIGOBERTO GODINEZ · TRON GRID PORTFOLIO</span>
        <span>KINAL · PERITO TÉCNICO EN COMPUTACIÓN</span>
      </footer>
    </div>
  )
}
