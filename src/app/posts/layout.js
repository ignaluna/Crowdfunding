import Counter from "../components/counter";
import style from "../page.module.css"


export default function PostLayout({ children }) {
  return (
    <div className={style.layout}> 
        <Counter/>
        {children}
    </div>
  )
}
