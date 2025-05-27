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
      {img:store.common.url+'index/icon1-3.webp',start:0,end:12,tag:'吨',text:'年出货量'}
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
    <div className="w-full h-250 bg-[#F2F2F2]">
      <div className="w-350 m-auto py-10">
        <h4 className="text-5xl text-[#FF6600] font-bold">Metal Supermarket</h4>
        <div className="flex justify-between">
          <div className="mt-5">
            <h5 className="text-5xl text-[#4B4948] font-medium">品行天下<span className="text-[#FF6600]">▪</span>高精品质<span className="text-[#FF6600]">▪</span>工艺精湛</h5>
            <p className="text-[#808080] text-2xl w-170 my-5">通过集采购、加工、零售、物流配送于一体的"一站式"服务，天研已成为金属材料行业流通领域首屈一指的全新标杆企业。</p>
            <a className="text-[#FF6600] text-lg">查看更多 <img className="inline mt-[-5]" src={store.common.url +'index/arrow.webp'}/></a>
            <div className="flex justify-between mt-25">
              <div>
                {introData.first.map((item,i)=>{
                  return <div key={i}>
                    <img src={item.img}/>
                    <pre className="text-[#FF6600]"><CountUp start={0} end={item.end} duration={3} separator=''/><i>{item.tag}</i></pre>
                  </div>
                })}
              </div>
              <div></div>
            </div>
          </div>
          <img src={store.common.url + 'index/背景图片.webp'} className="m-4"/>
        </div>
      </div>
    </div>
  </>
}
