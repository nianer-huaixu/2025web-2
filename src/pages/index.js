import Image from "next/image"
import useStore from "@/hook/useStore"
import { Geist, Geist_Mono } from "next/font/google"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  return <>
    <div className="w-full banner-container">
      <Slider {...settings}>
        <img src={store.common.url + 'banner/index1.webp'}/>
        <img src={store.common.url + 'banner/index2.webp'}/>
        <img src={store.common.url + 'banner/index3.webp'}/>
      </Slider>
    </div>
  </>
}
