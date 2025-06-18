import { useEffect,useState } from 'react'
import Banner from "@/components/banner"
import useStore from '@/hook/useStore'
import styles from '@/styles/product.module.scss'
export default function Product(){
  const [filed,setField] = useState('')
  const store = useStore()
  const data = [
    {cate:'英科耐尔',en:'Inconel',label:'Inconel',list:'600、601、617、625、 718、x750'},
    {cate:'英科洛伊',en:'Incoloy',label:'Incoloy',list:'800、800H、825、926、 800HT'},
    {cate:'哈氏合金',en:'Hastelloy',label:'Hastelloy',list:'C276、C22、C4、B2、 G30、B3'},
    {cate:'蒙乃尔',en:'Monel',label:'',list:'Monel400、Monel k500'},
    {cate:'双相不锈钢',en:'DP钢',label:'',list:'2101、2304、S2750、S2760 2205、2507 '},
    {cate:'超级不锈钢',en:'SDSS',label:'',list:'253MA、AL-6XN、254SMO、 904L'},
    {cate:'沉淀硬化钢',en:'PH-Mo',label:'',list:'17-4PH、17-7PH、SUS630、 FV520B、15-5PH、13-8PH'},
    {cate:'钛/钛合金',en:'Ti',label:'',list:'TA1、TA2、TA6、TA9、TC4、 TC6、TC10、TC11'},
    {cate:'铝/铝合金',en:'AI',label:'',list:'7075、7050、6061、6063、6082、 2A12、2024、5083、5052、3A21'},
    {cate:'耐腐蚀合金',en:'NS alloy ',label:'',list:'NS1402、NS3304、NS1101、 NS3103、NS1404、NS3203'},
    {cate:'美标合金',en:'ASTM Alloy',label:'',list:'N10276、N06625、N08800、 NO8811、N08810、N07718'},
    {cate:'国标牌号',en:'GB brand',label:'',list:'XCr15Fe7TiA1、NiMo29Cr、 NiCr30FeMo、 NiMo15Cr15W'},
    {cate:'德标牌号',en:'DIN',label:'',list:'1.4462、14547、1.4529、1.4958 2.4610、2.4675、2.4642、2.4617'},
    {cate:'高铬合金',en:'High Cralloy',label:'',list:'Nimonic75、Nimonic80A、 Nimonic90、Nimonic93'},
    {cate:'奥氏体不锈钢',en:'ASS',label:'',list:'304、316L、309S、310S、316Ti'},
    {cate:'日本牌号',en:'SUS',label:'',list:'NCF825、NCF2B、NAS800、 NCF600、NAS630、NAS800H'},
  ]
  return <>
  <Banner url='product.webp'/>
  <div className={["main",styles.productTop].join(' ')}>
    <div className="flex p-5 bg-[#F76115] content-center">
      <div>
        <h4 className='text-4xl'>PRODUCT</h4>
        <h4 className='text-4xl'>主营产品————</h4>
      </div>
      <div className={styles.search}>
        <input type="search" maxLength='10'
          placeholder='请输入具体型号'/>
        <input type="submit" value='搜索'/>
      </div>
    </div>
    <div className='grid grid-cols-5 gap-5 mt-10'>
      {data.map((item,i)=>{
        return <div key={i} className={['p-2',styles.cateItem].join(' ')}>
          <p className='text-center'>{item.cate} | {item.en}</p>
          <div className={styles.cateItemLink}>
            {item.label}{item.list.split((li,l)=>{
              return <a key={l}>{li}</a>
            })}
          </div>
        </div>
      })}
      <div className='col-start-4 col-end-6 row-start-3 row-end-5'>
        <img className='w-full mt-15' src={store.common.url + 'product/img1.webp'}/>
      </div>
    </div>
  </div>
  </>
}