import useStore from "@/hook/useStore"
import Banner from "@/components/banner"
import styles from "@/styles/tech.module.scss"
export default function Tech(){
  const store = useStore()
  const data = [
    {text:'设备机器',href:'#tech1'},
    {text:'工艺流程',href:'#tech2'},
    {text:'材质标准',href:'#tech3'},
    {text:'资质荣誉',href:'#tech4'},
    {text:'技术指导',href:'#tech5'},
  ]
  const tech1 = [
    {text1:'行业经验',text2:'16年'},
    {text1:'一站式',text2:'生产加工服务'},
    {text1:'千吨级',text2:'常备库存'}
  ]
  return <>
  <Banner url='tech.webp'/>
  <div className="bg-[#FCF5F5] h-20 w-full">
    <div className="w-350 m-auto flex justify-between anchor">
      {data.map((item,i)=>{
        return <a className="block mx-5 text-[#333] text-2xl leading-20" key={i} href={item.href}>{item.text}</a>
      })}
    </div>
  </div>
  {/* tech 1 */}
  <div className="upwards" id='tech1'></div>
  <section className={['mt-10',styles.tech1].join(' ')}>
    <div className="main text-[#808080] relative pb-20">
      <h5 className="text-4xl text-[#333] tracking-[4]">设备机器</h5>
      <p className="text-lg">Equipment Machine</p>
      <p className="w-160 text-lg leading-8 mt-5">江苏天研航工新材料有限公司，是一家专业从事批发、加工，零售于一体，并在先进的管理信息系统的支持和运作下，形成善于控制客户成本的优势，以“一站式金属采购”模式，为客户降低成本，创造竞争优势，对客户进行360度的服务。主营产品为铝合金、不锈钢、钛合金等金属材料库存材料千吨，规格齐全。凭借多年积累的相关领域的丰富经验，专业、快捷为客户提供一站式金属材料供应商。</p>
      <div className={["w-191 flex my-10 bg-[#FAFAFA] justify-evenly py-5",styles.tech1TopBox].join(' ')}>
        {tech1.map((item,i)=>{
          return <div key={i} className="text-center">
            <p className="text-3xl text-[#FF6600] mb-4 tracking-[4]">{item.text1}</p>
            <p className="text-lg text-[#333]">{item.text2}</p>
          </div>
        })}
      </div>
      <img className="absolute top-0 right-0 z-[-1]" src={store.common.url + 'tech/tech1-1.webp'}/>
    </div>
    <div className={["main flex justify-between pb-10",styles.tech1Bottom].join(' ')}>
      <div className="imgbox relative">
        <img src={store.common.url +'tech/tech1-2.webp'}/>
        <div className={styles.tech1BottomLeft}>
          <p className="text-center mb-10">我们为客户提供可靠的产品和服务。一切都是为了创造真正的价值，见证客户成功。</p>
          <div className="m-auto flex w-[70%] flex-wrap justify-between">
            <p>⊙ 高品质高精尖</p>
            <p>⊙ 精密切割</p>
          </div>
          <div className="m-auto flex w-[70%] flex-wrap justify-between pb-10">
            <p>⊙ 现货库存</p>
            <p>⊙ 服务保障</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mb-5">
          <div className="mr-5 imgbox"><img src={store.common.url +'tech/tech1-3.webp'}/></div>
          <div className="imgbox"><img src={store.common.url +'tech/tech1-4.webp'}/></div>
        </div>
        <div className="flex justify-between">
          <div className="imgbox"><img src={store.common.url +'tech/tech1-5.webp'}/></div>
          <div className="imgbox"><img src={store.common.url +'tech/tech1-6.webp'}/></div>
          <div className="imgbox"><img src={store.common.url +'tech/tech1-7.webp'}/></div>
        </div>
      </div>
    </div>
  </section>
  <div className="upwards" id='tech2'></div>
  <section className="text-center">
    <h5 className="text-4xl text-[#333] tracking-[4]">工艺流程</h5>
    <p className="text-lg text-[#808080]">Process Flow</p>
    <img className="m-auto" src={store.common.url +'tech/flow.webp'}/>
  </section>
  <div className="upwards" id='tech3'></div>
  <section className={["main",styles.tech3].join(' ')}>
    <div className="text-center mb-5">
      <h5 className="text-4xl text-[#333] tracking-[4]">材质标准</h5>
      <p className="text-lg text-[#808080]">Material Standard</p>
    </div>
    <div className="flex">
      <img src={store.common.url + 'tech/stand1.webp'}/>
      <div className="text-left text-[#808080] pl-5">
        <p className={["text-4xl text-[#333]",styles.tectTitle].join(' ')}>生产标准</p>
        <li>⊙ <p className="pl-[10]">公司所有产品严格按照GB5237-2008标准和美国 ASTMB221、英国BSEN7德国DIN EN 755、日本JS H4 100的标准生产检测产品质量。</p></li>
        <li>⊙ <p className="pl-[10]">拥有目前国际最先进的铝型材生产设备与产品质量检测设备</p></li>
        <li>⊙ <p className="pl-[10]">产品畅销全国20多个省市自治区并出口到全球五大洲</p></li>
      </div>
    </div>
    <div className="flex">
      <div className="text-left text-[#808080] pr-5">
        <p className={["text-4xl text-[#333] mt-5",styles.tectTitle].join(' ')}>质量体系</p>
        <li>⊙ <p className="pl-[10]">以战略保障系统、资源保障系统、运营保障系统、测量保障系 统、改进保障系统为手段，标准化良好行为等管理体系和标准中，实现保障系统发挥最大效能。</p></li>
        <li>⊙ <p className="pl-[10]">致力于通过科技创新成为金属原材料领域内的技术先驱，力求生产出零缺陷、高精度、性能优越的产品</p></li>
      </div>
      <img src={store.common.url + 'tech/stand2.webp'}/>
    </div>
  </section>
  <div className="upwards" id='tech4'></div>
  <section className="text-center">
    <h5 className="text-4xl text-[#333] tracking-[4]">资质荣誉</h5>
    <p className="text-lg text-[#808080]">Qualification and Honor</p>
    <img className="mt-10 mb-10" src={store.common.url +'tech/honor.webp'}/>
  </section>
  <div className="upwards" id='tech5'></div>
  <section className={styles.tech5}>
    <div className="text-center mb-5">
      <h5 className="text-4xl text-[#333] tracking-[4]">技术指导</h5>
      <p className="text-lg text-[#808080]">Technical Guidance</p>
    </div>
    <div className="main flex justify-between">
      <div className="relative my-10">
        <img src={store.common.url + 'tech/gui1.webp'}/>
        <p className='absolute left-4 bottom-20 text-3xl'>原料</p>
        <p className="absolute left-4 bottom-10 text-lg">100%原料检测</p>
      </div>
      <div className={styles.tech5TopCenter}>
        <div className={["flex",styles.tech5TopCenter1].join(' ')}>
          <p>关键质量控制点</p>
          <p>不合格管理</p>
          <p>大数据分析优化</p>
        </div>
        <div className={["flex text-center text-[#000]",styles.tech5TopCenter2].join(' ')}>
          <div className="flex">
            <div className={styles.tech5TopCenter2Item}>
              <p>熔炼</p>
              <p>Melting</p>
            </div>
            <div className={styles.tech5TopCenter2Item}>
              <p>锻造</p>
              <p>Forging</p>
            </div>
            <div className={styles.tech5TopCenter2Item}>
              <p>轧制</p>
              <p>Rolling</p>
            </div>
          </div>
        </div>
        <div className={["flex",styles.tech5TopCenter3].join(' ')}>
          <p>人员授权</p>
          <p>工具计量与设备管理</p>
          <p>质量月报</p>
        </div>
      </div>
      <div className="relative my-10">
        <img src={store.common.url + 'tech/gui2.webp'}/>
        <p className='absolute left-4 bottom-20 text-3xl'>产品</p>
        <p className="absolute left-4 bottom-10 text-lg">100%产品检测</p>
      </div>
    </div>
  </section>

  </>
}