import Image from "next/image"
import useStore from "@/hook/useStore"
import { Geist, Geist_Mono } from "next/font/google"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CountUp from "react-countup"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

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
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // autoplay:true,
    autoplaySpeed:3000,
  };
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
    <section className="w-350 m-auto py-10">
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
        <Slider {...settings1}>
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
  </>
}
