import Banner from "@/components/banner"
import useStore from "@/hook/useStore"
export default function Contact(){
  const store = useStore()
  const data =[
    {text1:'销售一部',text2:'0512-62388068',text3:'TEL'},
    {text1:'企业邮箱',text2:'szydtl7075@163.com',text3:'MAILBOX'},
    {text1:'销售二部',text2:'0512-62388058',text3:'TEL'},
    {text1:'销售传真',text2:'0512-62388198',text3:'FAX'},
    {text1:'急单热线',text2:'189-6365-0984 朱小姐',text3:'TEL'},
    {text1:'公司地址',text2:'江苏省苏州市工业园区唯亭春辉路',text3:'ADDRESS'},
  ]
  return <>
  <Banner url='contact.webp'/>
  <section className="main grid grid-cols-2 gap-y-15 px-10 py-15 relative top-[-60]" style={{backgroundImage:`url('${store.common.url}contact/bg1.webp')`}}>
    {data.map((item,i)=>{
      return <div key={i} className="flex items-center text-[#333333]">
        <img className="mr-5" src={store.common.url + 'contact/icon-' +i + '.webp'}/>
        <span className="text-3xl mr-5">{item.text1}</span>
        <span className="text-3xl font-bold">{item.text2}</span>
      </div>
    })}
  </section>
  <section className="full" style={{backgroundImage:`url('${store.common.url}contact/bg2.webp')`}}>
    <div className="main h-209">
      <div className="p-10 bg-[rgba(227,2,18,0.75)] text-[#fff] text-2xl h-full w-min">
        <p className="w-150 mb-20 leading-11 text-justify">天研航工新材料是一家以进口品牌代理、国内钢材生产加工、现货仓储、销售配送特种合金为核心业务的金属材料运营企业。主要从事哈氏合金、高温合金、镍基合金、钻铬合金、英科耐尔、因科罗伊、蒙乃尔合金、超级不锈钢、双相钢、钛合金、不锈钢等供货业务。可提供“钢板、钢棒、钢带、钢管、钢丝、毛细管、焊材、锻件、三通”等规格尺寸，支持客户图纸定制。</p>
        <p className="w-150 mb-10 leading-11 text-justify">主要为国内石油化工、化学工业、化工装备制造业、火电、新能源行业及煤化工项目提供了大量不同材质与规格。积累了丰富的经验。为了更好更广泛的满足客户需求，目前我们根据国内外客户的需求已全面开展了人民币结算和外汇结算并用，同时进行国内国际进出口贸易共同运作的经营体制。</p>
        <p className="text-4xl text-right">
          <i>////////  &nbsp;公司简介</i>
        </p>
      </div>
    </div>
  </section>
  <section>
    <img src={store.common.url + 'contact/bg.webp'}/>
  </section>
  </>
}