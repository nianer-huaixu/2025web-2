import useStore from "@/hook/useStore"
import Link from "next/link"
export default function Footer(){
  const store = useStore()
  const data1 = [
    {img:store.common.url +'index/f-icon-1.webp',text1:'189 6365 0984',text2:'免费服务热线'},
    {img:store.common.url +'index/f-icon-2.webp',text1:'0512-62388068',text2:'销售总机'},
    {img:store.common.url +'index/f-icon-3.webp',text1:'0512-62388058',text2:'销售二部'},
    {img:store.common.url +'index/f-icon-4.webp',text1:'0512-62388198',text2:'销售传真'}
  ]
  const data2 = [
    {
      title:'产品中心',
      list:[
        {text:'哈氏合金',link:''},
        {text:'蒙乃尔合金',link:''},
        {text:'英科罗伊',link:''},
        {text:'英科耐尔',link:''},
        {text:'高温合金',link:''},
        {text:'精密合金',link:''},
        {text:'高铬合金',link:''},
        {text:'超级不锈钢',link:''},
        {text:'双相不锈钢',link:''}
      ]
    },
    {
      title:'应用领域',
      list:[
        {text:'航天航空',link:''},
        {text:'船舶制造',link:''},
        {text:'轨道交通',link:''},
        {text:'医疗设备',link:''},
        {text:'汽车制造',link:''},
        {text:'工业模具',link:''},
        {text:'消费电子',link:''},
        {text:'能源化工',link:''}
      ]
    },
    {
      title:'技术中心',
      list:[
        {text:'仓储基地',link:''},
        {text:'检测设备',link:''},
        {text:'精湛技术',link:''},
        {text:'售后服务',link:''},
        {text:'品牌实力',link:''},
        {text:'生产工艺',link:''}
      ]
    },
    {
      title:'产品案例',
      list:[
        {text:'汽车用铝',link:''},
        {text:'模具用铝',link:''},
        {text:'船舶用铝',link:''},
        {text:'军工用铝',link:''}
      ]
    },
    {
      title:'联系我们',
      list:[
        {text:'公司动态',link:''},
        {text:'行业新闻',link:''},
        {text:'资源中心',link:''}
      ]
    }
  ]
  return <footer>
    <div className={['footerTop','main'].join(' ')}>
      {data1.map((item,i)=>{
        return <div key={i} className="footerTopItem">
          <img src={item.img}/>
          <div>
            <p>{item.text1}</p>
            <span>{item.text2}</span>
          </div>
        </div>
      })}
    </div>
    <div className={['footerCenter','main'].join(' ')}>
      {data2.map((item,i)=>{{
        return <ul key={i}>
          <h5><Link href="/">{item.title}</Link></h5>
          {item.list.map((li,l)=>{
            return <li key={l}><Link href={'/'}>{li.text}</Link></li>
          })}
        </ul>
      }})}
      <div className="erweimaWrap">
        <img src={store.common.url + 'index/erweima.webp'}/>
        <span>关注我们</span>
      </div>
    </div>
    <p className="text-1xl text-center mt-10">2021 江苏扬东铝业集团有限公司 版权所有  <a href="" target="_blank">苏ICP备2022015057号-1</a></p>
  </footer>
}