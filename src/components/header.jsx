'use client'
import Link from "next/link"
import useStore from "@/hook/useStore"
import { usePathname } from "next/navigation"
export default function Header(){
  const store = useStore()
  const path = usePathname()
  
  const data = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/product'},
    {label:'技术中心',route:'/tech'},
    {label:'应用领域',route:'/apply'},
    {label:'产品案例',route:'/case'},
    {label:'联系我们',route:'/contact'}
  ]
  return <header className="w-full px-20 h-20 leading-20 flex justify-between fixed z-50 items-center">
    <div><img width={205} src={store.common.url + 'header/logo.webp'}/></div>
    <div>
      {data.map((item,i)=>{
        return <Link className="ml-20 hover:text-[#FFFF07] transition-colors duration-100"
          style={{color:path==item.route?'#FFFF07':''}}
          key={i} href={item.route}>
          {item.label}
        </Link>
      })}
    </div>
  </header>
}