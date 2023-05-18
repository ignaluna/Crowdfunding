import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import style from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div className={style.container}> Hola
      </div>
    </main>
  )
}
