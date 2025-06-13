import Banner from "@/components/banner"
import styles from "@/styles/case.module.scss"
import Link from "next/link"
import { useState } from "react"
import useStore from "@/hook/useStore"
export default function Case(){
  const store = useStore()
  const plantData = [
    {
      text:'Haynes International（美国哈氏）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'VDM Metals',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'Special Metals Corp',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'YAKIN （日本冶金工业株式会社）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'CARPENTER TECHNOLOGY（美国卡彭特）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'NIPPON STEEL （新日本制铁公司）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'Kaiser Aluminum（美国凯撒铝业）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'ATI（美国冶联科技集团）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'AUSTRIA METALL（AMAG奥地利金属公司）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'Alcoa（美国美铝）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    },
    {
      text:'DAIDO STEEL （日本大同特殊钢）',
      text1:'作为特殊钢业界之领导企业，既是工业炉的使用者又是它的生产者，以高质量的产品、新生的材料和完善的服务，一跃成为世界屈指可数的特殊钢生产厂家，始终处于时代领先地位，致力于为每一个用户提供最好的支援，其精密的产品也为海恩斯广大客户群体提供更多优质的选择，与客户融为一体，与公司创造了和谐的合作关系，携手共进，合作共赢。',
      lists:['CLEANSTAR','DSRO3F','DSR31H','DSR16FC','DSR20HA']
    }
  ]
  const [index,setIndex] = useState(0)
  function hoverItem(i){
    setIndex(i)
  }
  const data2 =[
    {text1:'精密加工',text2:'17-4PH 紧固装备'},
    {text1:'石油化工',text2:'15-5PH 管道连接法兰'},
    {text1:'石油化工',text2:'17-7PH 化学反应器'},
    {text1:'精密加工',text2:'1.4462 太阳能热水器'},
    {text1:'汽车制造',text2:'1.4301 汽车轻量化材料'},
    {text1:'船舶制造',text2:'1.4404 抗海蚀环境'},
    {text1:'石油化工',text2:'2205 石油天然气管道'},
    {text1:'能源化工',text2:'2507 化工设备管'},
    {text1:'精密加工',text2:'2520 脱盐设备'},
    {text1:'航空航天',text2:'高温材料科研'},
    {text1:'航空航天',text2:'310S 高温风机'},
    {text1:'石油化工',text2:'904L 换热管'},
    {text1:'精密加工',text2:'254SM0 膨胀接头'},
    {text1:'机械工程',text2:'253MA 石化管道'},
    {text1:'航空航天',text2:'Inconel600 涡轮叶片'},
    {text1:'石油化工',text2:'GH4169 石油钻具'},
    {text1:'航空航天',text2:'7075 航空铝材'},
    {text1:'精密加工',text2:'1J22 电机制造'},
    {text1:'机械工程',text2:'316L 染料设备'},
    {text1:'机械工程',text2:'HastelloyC高压设备'},
    {text1:'石油化工',text2:'601高温炉配件'},
    {text1:'天然气产业链',text2:'825气体输送管网'},
    {text1:'医疗标准合金',text2:'35N医用规格配件'},
    {text1:'航空航天',text2:'718发动机零部件'},
    {text1:'航空航天',text2:'AMS飞机引擎叶片'},
    {text1:'光伏发电',text2:'800风电传输储能管'},
    {text1:'海水淡化',text2:'276耐腐蚀配件制造'},
    {text1:'船舶制造',text2:'6061船用铝板'},
    {text1:'机械工程',text2:'36精密部件研发'},
    {text1:'化工新材料',text2:'2507化工原料生产'},
  ]
  return <>
  <Banner url='case.webp'/>
  <div className={styles.title}>
    <h4 className="text-center text-5xl">合作钢厂专利牌号</h4>
    <span className="text-5xl">COOPERATIVE STEEL PLANT</span>
  </div>
  <section>
    <div className={["w-full",styles.case1].join(' ')} style={{background:`url('${store.common.url}/case/mark${index+1}-bg.webp')`}}>
      <div className={["main flex",styles.case1Main].join(' ')}>
        <div className={styles.case1MainL}>
          {plantData.map((item,i)=>{
            return <p key={i} onMouseEnter={()=>hoverItem(i)} className="px-4" style={{background:index==i?'linear-gradient(90deg, #D20000 0%, #FEB00F 100%)':''}}>
              {item.text}
            </p>
          })}
        </div>
        <div className={styles.case1MainR}>
          <img src={store.common.url + 'case/mark' + (index+1) +'.webp'}/>
          <p className="mb-15">{plantData[index].text1}</p>
          <span className="text-3xl mb-10">钢厂专利牌号</span>
          <div className="flex justify-between my-10">
            {plantData[index].lists.map((li,l)=>{
              return <Link key={l} href={''} className="border-1 py-1 px-5">{li}</Link>
            })}
          </div>
          <Link href={''} className="border-1 py-2 px-5">更多 +</Link>
        </div>
      </div>
    </div>
  </section>
  <div className={styles.title}>
    <h4 className="text-center text-5xl">百家企业•成功案例</h4>
    <span className="text-5xl">HUNDREDS OF ENTERPRISE SUCCESS</span>
  </div>
  <section className="main grid grid-cols-5 gap-5 text-center pb-15">
    {data2.map((item,i)=>{
      return <div className={styles.caseItem}>
        <img src={store.common.url + 'case/' + i + '.webp'}/>
        <p className="text-lg text-[#E71E19] font-medium">{item.text1}</p>
        <p className="text-lg text-[#333]">{item.text2}</p>
      </div>
    })}
  </section>
  </>
} 