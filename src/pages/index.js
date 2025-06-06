import Image from "next/image"
import useStore from "@/hook/useStore"
import { Geist, Geist_Mono } from "next/font/google"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CountUp from "react-countup"
import { useState } from "react"
import styles from '@/styles/index.module.scss'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})
function Product(){
  const store = useStore()
  const [activeSlide, setActiveSlide] = useState(0)
  const productData = [
    {
      one:{
        text:'哈氏合金',
        text2:'HastelloyC276、C22、C4、G30、B2、B3',
        img:store.common.url + 'index/哈氏合金.webp',
        link:''
      },
      two:{
        text:'蒙乃尔合金',
        text2:'Monel 401、Monel K500、Monel 400、Monel 405、Monel 404',
        img:store.common.url + 'index/德标牌号.webp',
        link:''
      },
      three:{
        text:'英科罗伊',
        img:store.common.url + 'index/英科罗伊.webp',
        link:'',
      },
      four:{
        text:'钛合金',
        img:store.common.url + 'index/钛合金.webp',
        link:''
      },
      five:{
        text:'铝合金',
        img:store.common.url + 'index/铝合金.webp',
        link:''
      },
      six:{
        text:'双相不锈钢',
        img:store.common.url + 'index/双相不锈钢.webp',
        link:''
      }
    },
    {
      one:{
        text:'哈氏合金',
        text2:'HastelloyC276、C22、C4、G30、B2、B3',
        img:store.common.url + 'index/哈氏合金.webp',
        link:''
      },
      two:{
        text:'蒙乃尔合金',
        text2:'Monel 401、Monel K500、Monel 400、Monel 405、Monel 404',
        img:store.common.url + 'index/德标牌号.webp',
        link:''
      },
      three:{
        text:'英科罗伊',
        img:store.common.url + 'index/德标牌号.webp',
        link:'',
      },
      four:{
        text:'钛合金',
        img:store.common.url + 'index/德标牌号.webp',
        link:''
      },
      five:{
        text:'铝合金',
        img:store.common.url + 'index/铝合金.webp',
        link:''
      },
      six:{
        text:'双相不锈钢',
        img:store.common.url + 'index/双相不锈钢.webp',
        link:''
      }
    },
    {
      one:{
        text:'哈氏合金',
        text2:'HastelloyC276、C22、C4、G30、B2、B3',
        img:store.common.url + 'index/哈氏合金.webp',
        link:''
      },
      two:{
        text:'蒙乃尔合金',
        text2:'Monel 401、Monel K500、Monel 400、Monel 405、Monel 404',
        img:store.common.url + 'index/德标牌号.webp',
        link:''
      },
      three:{
        text:'英科罗伊',
        img:store.common.url + 'index/德标牌号.webp',
        link:'',
      },
      four:{
        text:'钛合金',
        img:store.common.url + 'index/德标牌号.webp',
        link:''
      },
      five:{
        text:'铝合金',
        img:store.common.url + 'index/铝合金.webp',
        link:''
      },
      six:{
        text:'双相不锈钢',
        img:store.common.url + 'index/双相不锈钢.webp',
        link:''
      }
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    appendDots: dots => (
      <div style={{borderRadius: "10px",padding: "20px",bottom:'-100px'}}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          backgroundColor: activeSlide == i ?'#FF6600':'#808080',
          color:activeSlide == i ?'#FF6600':'#808080',
          height:'8px',
          fontSize:'8px'
        }}
      > {i}
      </div>
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  return <section className="w-350 m-auto py-10">
    <div className="w-full flex justify-between">
      <p className="text-lg text-[#808080] w-212">经过十多年不断的研究和开发，天研经营的产品已经覆盖了镍铬高温合金(inconel+Incoloy)、镍铜高温合金(Monel)、镍钼高温合金(哈氏Hastelloy)、镍铁合金(软磁合金)、双相不锈钢、超级不锈钢、钛合金、铝合金和铜合金，原材质保书随货寄出，同时支持第三方专业机构进行材质检测。</p>
      <div>
        <h4 className="text-5xl text-[#4B4948] font-medium mb-3 text-start">
          <img className="inline mr-5 mt-[-10]" src={store.common.url +'index/icon2.webp'}/>
          产品与介绍
          </h4>
        <p className="font-[Roboto-Black] text-[#FF6600] text-3xl font-black">Products and introduction</p>
      </div>
    </div>
    <p className="text-right mt-15">
      <a className="text-[#FF6600] text-lg">更多产品</a>
      <img className="inline ml-2 mt-[-5]" src={store.common.url +'index/arrow.webp'}/>
    </p>
    <div className="">
      <Slider {...settings}>
        {productData.map((item,i)=>{
          return <div key={i}>
            <div className="grid grid-cols-4 product-grid h-180">
              <div className="row-span-2">
                <img src={item.one.img}/>
                <p className="text-[#333] text-3xl text-center mt-5">{item.one.text}</p>
                <p className="text-[#808080] text-2xl mt-8 mb-16">{item.one.text2}</p>
                <a className="block mx-auto w-30 h-8 leading-8 bg-[#949494] hover:bg-[#FF6600] text-white rounded-2xl">MORE  &gt;</a>
              </div>
              <div className="col-start-2 col-end-4 pl-5 h-90">
                <img src={item.two.img}/>
                <p className="text-left text-[#333] mt-5 text-3xl">{item.two.text}</p>
                <p className="text-left text-[#808080] mt-8 text-2xl w-80">{item.two.text2}</p>
                <a className="text-center block w-30 h-8 leading-8 mt-8 bg-[#949494] hover:bg-[#FF6600] text-white rounded-2xl">MORE  &gt;</a>
              </div>
              <div className="h-90">
                <img src={item.three.img}/>
                <span>{item.three.text}</span>
              </div>
              <div className="h-90">
                <img src={item.four.img}/>
                <span>{item.four.text}</span>
              </div>
              <div className="h-90">
                <img src={item.five.img}/>
                <span>{item.five.text}</span>
              </div>
              <div className="h-90">
                <img src={item.six.img}/>
                <span>{item.six.text}</span>
              </div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  </section>
}
function Apply(){
  const store = useStore()
  const data = [
    {label:'航天航空',text:'扬东铝业集团具有航空领域用高端铝铁材料的提供能力,品种繁多,其中一些军工标准产品等新型发动机涡轮盘、压气盘、叶片用铝成功应用于“飞豹”、“歼十”、轰炸机、强击机等核心部件制作。同时扬东铝业为火箭发动机重要部件提供军用铝材料,为发展我国航天事业做出贡献。铝合金具有密度低、比强度高、耐蚀性好和成型性优良等-系列优点,这些优良性能使铝合金成为航空航天的重要材料。主要用于机身蒙皮、机翼及安定面蒙皮、机身隔框、油箱、连接件等结构。'},
    {label:'船舶制造',text:'扬东铝业集团供应的海洋系泊链铝用于船舶和石油工业，强度高，韧性好，具备耐海水腐蚀、抗疲劳、耐磨损等特性。其中四级系泊链是目前海洋用的最高级别系链，需求量较大，成功通过国际著名船级社品质认证，填补了国内空白，实物质量达到国际水平，已经形成批量化供应铝产品能力，广泛用于勘探平台、浮时采油平台、海上储油转运站和辅助船队等海洋工程及专用船舶领域。'},
    {label:'轨道交通',text:'扬东铝业集团铝制列车重量轻、耐腐蚀、运行性能好。铝板在轨道车上主要用作车体外板、车顶板、地板、车内装饰板等部位，同时一些小规格的铝管也用于车身内部的通风和传输。针对轨道交通生产的铝合金中厚板，具有强度高、挤压性好、焊接性好、耐腐蚀性好等优点，尤其适合作为铝制列车车体、底架、框架使用，在保证车身强度的同时减轻了车体的重量，能有效节约能源及降低运营维护费用。'},
    {label:'医疗设备',text:'扬东铝业集团铝合金在医疗行业应用广泛，早期简单的器械类包括拐杖、轮椅、担架、助力器、油膏缸、消毒盒、病床等等。'},
    {label:'汽车制造',text:'扬东铝业集团铝合金在汽车上的应用可带来诸多好处，比如：更高效，更高的强重比，可满足复杂形状的要求。在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。节能环保已成为当今世界的主旋律，而高昂的能源费用和材料的循环利用已成为汽车制造商正面临的主要难题。当此时机，铝合金凭借其优越的比强度、优良的成型性和高效的循环利用率，逐步成为汽车制造商的宠儿，“铝代钢”已大势所趋。'},
    {label:'工业模具',text:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，工模具被誉为“现代工业之母”在现代工业被广泛应用。随着市场的发展及铝合金技术的提高，目前欧美市场逐渐呈现铝模替代钢模的现象。制造成本低。铝模具在制造、装置、注塑车间装置调整时间、运输等比钢模具更具优越性成本更低。重量轻。由于其密度只有一般模具钢的36%，故运动惯性比较低，在生产过程中加，减速度均比较容易，能减低机器及模具的损耗。制造时间短，机械加工较易，其切削速度比一般模具钢快6倍以上，故大量减低模具加工时间，令模具可更快进行生产。且尺寸稳定性高。热传导率卓越。其热传导率比一般模具钢高，故可节省模具在生产时的冷切时间50%，从而提高模具的生产效率。'},
    {label:'消费电子',text:'扬东铝业集团助力电子电器制造企业在世界范围内占据有利的竞争位置，实现让产品更轻、更薄、更耐用的愿望。铝合金拥有良好的可加工性和导电性，是绝佳的散热材料。能按照客户需求提供各类挤压型材，适用于大功率变电装置、稳压电源、通讯电源、净化电源、广播电视发射装置、逆变电源等各种大型电源产品，也用于自动控制仪表等电力电子产品领域。'},
    {label:'能源化工',text:'扬东铝业集团5000系铝合金材料具有良好的抗腐蚀性和可焊接性能，用铝合金制造的体，内部不需要任何防护涂层就可以运输各种液体或者液化气，并且因为没有腐蚀，从而保证油品更清洁，罐体强制报废后回收价值也更高同时，因为铝合金具有良好的导电性能，很少集聚静电在罐体上，所以不会产生火花而导致爆炸，而且铝合金能很好的吸收罐体在碰撞时所产生的照间能力，不会造成罐体开裂而产生泄漏。也因为罐体的重量大大减轻，车身的重心相应降低，从而降低罐车侧翻的可能性。这也是BP'}
  ]
  const [index,setIndex] = useState(0)
  function toggleIndex(i){
    setIndex(i)
  }
  return <section className={[styles.applyWrap].join(' ')} style={{backgroundImage:`url('${store.common.url}index/apply-bg${index+1}.webp')`}}>
    <h4>应用领域</h4>
    <p>{data[index].text}</p>
    <div className={[styles.applyGroup,'main'].join(' ')}>
      {data.map((item,i)=>{
        return <div key={i} className={styles.applyItem} onMouseEnter={()=>toggleIndex(i)}>
          <div style={{backgroundColor:index==i?'#FF6600':''}}><img src={store.common.url + 'index/apply'+(i+1)+'.webp'}/></div>
          <span>{item.label}</span>
        </div>
      })}
    </div>
  </section>
}
function Tech(){
  const store = useStore()
  const data = [
    {icon:store.common.url+'index/icon3-1.webp',text1:'仓储基地',text2:'Storage Base',text3:'从下单到出库发货，都经过三道质检，保障成品合格率在100%以上，我们拥有大量库存，可以供亲们提供足够的货源，让亲们不在担心断货、缺货的危机、让亲们放心的加工生产。'},
    {icon:store.common.url+'index/icon3-2.webp',text1:'检测设备',text2:'Detection Equipment',text3:'从下单到出库发货，都经过三道质检，保障成品合格率在100以上，我们拥有大量库存，可以供亲们提供足够的货源，让亲们不在担心断货、缺货的危机、让亲们放心的加工生产。'},
    {icon:store.common.url+'index/icon3-3.webp',text1:'精湛技术',text2:'Superb Technique',text3:'我们承诺客户下单后，现货产品当天发货，加工，切割，产品根据产品特性3-5天发货，定制特种产品，根据实际情况7-30天出厂并安排发货，解决客户急需要求。'},
    {icon:store.common.url+'index/icon3-4.webp',text1:'售后服务',text2:'After-sales Service',text3:'我们做到每个订单，都及时跟踪。保障客户能及时安全收货；并不断听取客户的意见与建议，反思我们自身存在的问题，让客户用的舒心放心。'}
  ]
  const [index,setIndex] = useState(null)
  function enterItem(i){
    setIndex(i)
  }
  function leaveItem(){
    setIndex(null)
  }
  return <section className={['w-full',styles.techWrap].join(' ')}>
    <div className={['main',].join(' ')}>
      <div className="w-full flex justify-between mb-15">
        <p className="text-lg text-[#808080] w-212">公司对客户的差异化需求快速响应，成立了完备的配套加工服务中心，现可为客户提供板材横剪开平、纵剪分条、激光切割、等离子切割、棒材改锻、钢带订做、拉丝贴膜等一站式加工配套服务。所有产品可相应按照德国/欧EN/ISO/DIN、美国ASTM /ASME/UNS/AWS、日本IS以及我国GBT、GJB、YBЛ、NBTHG、HB等标准供应，并可根据客户提供的图纸和技术要求进行订制供货。</p>
        <div>
          <h4 className="text-5xl text-[#4B4948] font-medium mb-3 text-start">
            <img className="inline mr-5 mt-[-10]" src={store.common.url +'index/icon3.webp'}/>
            技术与服务
            </h4>
          <p className="font-[Roboto-Black] text-[#FF6600] text-3xl font-black">Technology and Service</p>
        </div>
      </div>
      <div className={["flex",styles.techCenter].join(' ')}>
        {data.map((item,i)=>{
          return <div key={i} className={["relative overflow-hidden h-[650]",styles.techItem].join(' ')} onMouseEnter={()=>enterItem(i)} onMouseLeave={()=>leaveItem()}>
            {index == i ? <img className="h-full" src={store.common.url +'index/4-'+(i+1)+'-a.webp'}/> :<img className="h-full" src={store.common.url +'index/4-'+(i+1)+'-m.webp'}/>}
            <div style={{display:index == i ?'none':'block'}} className={["w-full h-max absolute bottom-10 left-10",styles.techM].join(' ')}>
              <img className="mb-5" src={item.icon}/>
              <p className="text-3xl">{item.text1}</p>
              <p className="text-lg">{item.text2}</p>
            </div>
            <div style={{display:index == i ?'block':'none'}} className={["w-full h-max absolute top-25 left-10",styles.techA].join(' ')}>
              <p className="text-3xl">{item.text1}</p>
              <p className="text-lg">{item.text2}</p>
              <p className="text-lg w-100 mt-10 mb-15">{item.text3}</p>
              <a className="block w-32 h-8 bg-[#FF6600] rounded-2xl text-center leading-8 absolute top-75">了解更多</a>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>
}
function Flow(){
  const store = useStore()
  const data =[
    {text:'需求沟通',text1:'有图纸:来图定制',text2:'无图纸:沟通需求'},
    {text:'确认方案',text1:'图纸清单',text2:'细节确认'},
    {text:'出单报价',text1:'交期确认',text2:'运送方式'},
    {text:'成交付款',text1:'排单加工',text2:' '},
    {text:'包装发货',text1:'严格质检',text2:'物流送货上门'},
    {text:'售后服务',text1:'贴心售后',text2:'积极解决'}
  ]
  return <section className={styles.flowWrap}>
    <h4>定制流程</h4>
    <div className={['main',styles.flowMain].join(' ')}>
      {data.map((item,i)=>{
        return <div key={i} className={styles.flowMainItem}>
          <div><img src={store.common.url +'index/icon4-'+(i+1)+'.webp'}/></div>
          <span>{item.text}</span>
          <p>{item.text1}</p>
          <p>{item.text2}</p>
        </div>
      })}
    </div>
  </section>
}
export default function Home() {
  const store = useStore()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
  };
  const introData= {
    first:[
      {img:store.common.url+'index/icon1-1.webp',start:0,end:15,tag:'年',text:'行业经验'},
      {img:store.common.url+'index/icon1-2.webp',start:0,end:100,tag:'人',text:'技术团队'},
      {img:store.common.url+'index/icon1-3.webp',start:0,end:12,tag:'吨',text:'年出货量',unit:'万'}
    ],
    second:[
      {start:0,end:20000,tag:'㎡',text:'占地面积'},
      {start:0,end:6000,tag:'吨',text:'库存量'},
      {start:0,end:1,tag:'天',text:'库存现货'},
      {start:0,end:500,tag:'家',text:'服务客户'},
    ]
  }
  
  return <>
    <div className="w-full banner-container">
      <Slider {...settings}>
        <img src={store.common.url + 'banner/index1.webp'}/>
        <img src={store.common.url + 'banner/index2.webp'}/>
        <img src={store.common.url + 'banner/index3.webp'}/>
      </Slider>
    </div>
    {/* index-1 */}
    <section className="w-full h-250 bg-[#F2F2F2]">
      <div className="w-350 m-auto py-10">
        <h4 className="text-5xl text-[#FF6600] font-bold">Metal Supermarket</h4>
        <div className="flex justify-between">
          <div className="mt-5">
            <h5 className="text-5xl text-[#4B4948] font-medium">品行天下<span className="text-[#FF6600]">▪</span>高精品质<span className="text-[#FF6600]">▪</span>工艺精湛</h5>
            <p className="text-[#808080] text-2xl w-170 my-5">通过集采购、加工、零售、物流配送于一体的"一站式"服务，天研已成为金属材料行业流通领域首屈一指的全新标杆企业。</p>
            <a className="text-[#FF6600] text-lg">查看更多 <img className="inline ml-2 mt-[-5]" src={store.common.url +'index/arrow.webp'}/></a>
            <div className="flex justify-between mt-25 ">
              <div>
                {introData.first.map((item,i)=>{
                  return <div className="mb-25" key={i}>
                    <pre className="flex text-[#FF6600] items-start font-[Roboto-Medium]">
                      <img width={24} src={item.img}/>
                      <CountUp className="countup60" start={0} end={item.end} duration={3} separator=''/>
                      {item.unit && <span className="text-6xl m-0 leading-13">{item.unit}</span>}
                      <i className="text-xl not-italic ml-2">{item.tag}</i>
                    </pre>
                    <p className="text-[#808080] text-2xl mt-5 ml-12">{item.text}</p>
                  </div>
                })}
              </div>
              <div className="h-min grid grid-cols-2 gap-10 ml-2">
                {introData.second.map((item,i)=>{
                  return <div key={i} className="bg-white w-70 h-40 p-5">
                    <pre className="flex text-[#FF6600] items-start font-[Roboto-Medium]">
                      <CountUp className="font-medium text-6xl" start={0} end={item.end} duration={3} separator=''/>
                      <span>{item.tag}</span>
                    </pre>
                    <p className="text-[#808080] text-2xl mt-4">{item.text}</p>
                  </div>
                })}
              </div>
            </div>
          </div>
          <img className="h-min" src={store.common.url + 'index/背景图片.webp'}/>
        </div>
      </div>
    </section>
    {/* index-2 */}
    <Product/>
    {/* index-3 */}
    <Apply/>
    {/* index-4 */}
    <Tech/>
    {/* index-5 */}
    <Flow/>
  </>
}
