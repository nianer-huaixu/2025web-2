'use client'
import { useEffect,useState } from "react"
import Link from "next/link"
import useStore from "@/hook/useStore"
import { usePathname } from "next/navigation"
export default function Header(){
  const store = useStore()
  const path = usePathname()
  const [scrollHeight,setScrollHeight] = useState(0)
  useEffect(()=>{
    let throttleTimeout = null;
    const handleScroll =()=>{
      if(throttleTimeout === null){
        throttleTimeout = setTimeout(()=>{
          setScrollHeight(document.documentElement.scrollTop)
          throttleTimeout = null
        },200)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
      clearTimeout(throttleTimeout)
    }
  },[scrollHeight])
  const data = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/product'},
    {label:'技术中心',route:'/tech'}, 
    {label:'应用领域',route:'/apply'},
    {label:'产品案例',route:'/case'},
    {label:'联系我们',route:'/contact'}
  ]

  return <header style={{backgroundColor:scrollHeight>980?'#000':''}}
    className="w-full px-20 h-20 leading-20 flex justify-between fixed z-999 items-center"> 
    <div><img width={205} src={store.common.url + 'header/logo.webp'}/></div>
    <div>
      {data.map((item,i)=>{
        return <Link className="ml-20 hover:text-[#FF6600] transition-colors duration-100"
          style={{color:path==item.route?'#FF6600':''}}
          key={i} href={item.route}>
          {item.label}
        </Link>
      })}
    </div>
  </header>
}