import Banner from "@/components/banner"
import useStore from "@/hook/useStore"
export default function Apply(){
  const store = useStore()
  const data = [
    {
      text:'航空工业对材料的要求非常苛刻:高温下的稳定性、较高的蠕变强度、良好的疲劳特性、缓慢的裂纹扩展、韧性，以及耐高温氧化性。天研航工新材料是商业飞机和空间探索领域特种合金供货商。我们的优势库存涵盖了不同种类不锈钢、镍基合金，航空铝合金，钛基合金和钴基合金的需求。这些合金泛应用于制作航空、航天领域的关键部件。',
      text1:'航空航天',
      list:[
        {model:'SUS631',label:'不锈钢'},
        {model:'304/316',label:'不锈钢'},
        {model:'Inconel 718',label:''},
        {model:'Ti-6Al-4V (TC4)',label:''},
        {model:'7075',label:'铝合金'}
      ],
      link:'apply0'
    },
    {
      text:'高性能铝合金材料制备技术的重大突破，各项技术指标达到世界先进水平，并成为国内为数不多的同时通过了DNVGL、CCS、ABS、BV、LR五大船级社工厂认可。所生产的铝合金材料主要应用于高速船体外板、甲板、骨架结构、船舶上层建筑、海上直升机平台、海洋工程平台居住区等。',
      text1:'船舶制造',
      list:[
        {model:'Ti1023',label:'钛合金'},
        {model:'GJB 2295A',label:'不锈钢'},
        {model:'GJB 2296A',label:'不锈钢'},
        {model:'GJB 2297A',label:'不锈钢'},
        {model:'5083',label:'船用铝合金'}
      ],
      link:'apply1'
    },
    {
      text:'天研航工新材料供应的铁路用钢主要有铁路弹簧钢、扣件用钢、道岔用钢、钩尾框用钢、铁路轴承钢、欧标合金钢，美标合金钢等产品，全部通过国家铁道部认可并具备了批量供货能力，大量用于制造铁路货车、高速客车、动车组列车的关键零部件,成为其铁路优秀供应商。',
      text1:'轨道交通',
      list:[
        {model:'U74',label:'不锈钢'},
        {model:'PD2/PD3',label:'不锈钢'},
        {model:'U71Mn',label:'不锈钢'},
        {model:'U71Mn',label:'不锈钢'},
        {model:'6063/5083',label:'铝合金'}
      ],
      link:'apply2'
    },
    {
      text:'天研航工新材料供应的铁路用钢主要有铁路弹簧钢、扣件用钢、道岔用钢、钩尾框用钢、铁路轴承钢、欧标合金钢，美标合金钢等产品，全部通过国家铁道部认可并具备了批量供货能力，大量用于制造铁路货车、高速客车、动车组列车的关键零部件,成为其铁路优秀供应商。',
      text1:'医疗设备',
      list:[
        {model:'304/316',label:'不锈钢'},
        {model:'316L/904L',label:'不锈钢'},
        {model:'2205',label:'双相不锈钢'},
        {model:'Hastelloy系列合金',label:''},
        {model:'06Cr19Ni10奥氏体',label:''}
      ],
      link:'apply3'
    },
    {
      text:'满足汽车轻量化需求的铝合金产品，推动我国新能源汽车的可持续发展。高翻边性能、低温快速时效响应、及高导电等铝合金材料，已广泛应用在新能源汽车引擎盖内外板、后尾箱盖内板、车门内板、电池Pack系统等零部件。车制造中常用的金属类材料，包括各种类型的钢材，如低碳钢、中碳钢、高碳钢以及合金钢，它们被广泛用于构建汽车的主体架构、车身以及发动机组件。这些多样化的材料在汽车的生产过程中都扮演着重要的角色，它们共同保证了汽车的性能、安全性和舒适性。',
      text1:'汽车制造',
      list:[
        {model:'Ti - 6A1 - 4V',label:'钛合金'},
        {model:'HC340LA',label:'合金钢'},
        {model:'DP590',label:'高强度钢'},
        {model:'SAPH440',label:'高强度钢'},
        {model:'6061/5052',label:'铝合金'}
      ],
      link:'apply4'
    },
    {
      text:'工业模具用钢具有纯洁度高、尺寸精度高、表面质量好、组织均匀致密、淬透性稳定等特点，产品工艺技术和实物质量达到国际先进水平，广泛应用于生产大型工程机械液压挖掘机、推土机等的履带链轨、履带轮毂、链轮、重载轮轴、支重轴等关键零部件，产品已得到各大重工企业等国际知名公司的接受和认可，成为其合格供应商。',
      text1:'工业模具',
      list:[
        {model:'Cr12Mo1V1',label:'不锈钢'},
        {model:'H13（AISI）',label:'合金钢'},
        {model:'H11（AISI）',label:'合金钢'},
        {model:'HD2（3Cr2W8V）',label:''},
        {model:'2A12/7075',label:'铝合金'}
      ],
      link:'apply5'
    },
    {
      text:'电子电器行业是国内对材料要求比较广泛：采购规格多样化的客户群体,通过针对现货库存备货，材料分级等措施，运用外协加工单位多台先进横剪、纵剪设备配合生产，给不锈铝板披上了“美丽的外衣”。公司可以加工HL、04、SB、8K等表面种类，HL、NO4工艺包含干磨和油磨，拥有国内先进SB表面研磨设备，和多台先进的中厚卷油磨生产线。保证电子电器行业铝制材料的优质性、多品种材料供应的及时性。',
      text1:'消费电子',
      list:[
        {model:'304/316',label:'不锈钢'},
        {model:'Ti-6Al-4V（Gr5）',label:''},
        {model:'（Gr1/Gr2）',label:'纯钛'},
        {model:'AZ31B',label:'镁合金'},
        {model:'6061/7075',label:'铝合金'}
      ],
      link:'apply6'
    },
    {
      text:'我们提供全系列高性能超级合金完全满足生成和分配电能苛刻的应用。超级合金和服务多用于建设和维护天然气，煤炭和核能发电厂，以及可再生能源发电，如太阳能、风能、热能、燃料电池和地热。我们为电力市场提供开模和闭模锻件，粉末，髋部件和由高性能钢，高温合金，钛和铝制成的棒材。从材料加工到技术支持，我们提供能实现发电设备最高生产效率的选材解决方案。',
      text1:'能源化工',
      list:[
        {model:'304/304L (S30403)',label:''},
        {model:'Inconel 625',label:''},
        {model:'S32205',label:'双相不锈钢'},
        {model:'C-276',label:'哈氏合金'},
        {model:'2507',label:'超级双相钢'}
      ],
      link:'apply7'
    }    
  ]
  const list = [
    {text:'航空航天',link:'apply0'},
    {text:'船舶制造',link:'apply1'},
    {text:'轨道交通',link:'apply2'},
    {text:'医疗设备',link:'apply3'},
    {text:'汽车制造',link:'apply4'},
    {text:'工业模具',link:'apply5'},
    {text:'消费电子',link:'apply6'},
    {text:'能源化工',link:'apply7'}
  ]
  return <>
  <Banner url='apply.webp'/>
  <div className="main flex justify-between anchor">
    {list.map((item,i)=>{
      return <a className="block text-2xl text-[#333] leading-20 hover:text-[#FF6600]" key={i} href={'#'+item.link}>{item.text}</a>
    })}
  </div>
  {data.map((item,i)=>{
    return <section key={i}>
      <div className="upwards" id={item.link}></div>
      <div className="h-150" style={{backgroundImage:`url('${store.common.url}apply/${i}.webp')`}}>
        <div className="main flex h-full" style={{flexDirection: i%2!=0 ?'row-reverse' :''}}>
          <div className="h-full w-90 bg-[rgba(227,2,18,0.7)] pt-10 text-center">
            <h4 className="text-4xl font-bold tracking-[4]">{item.text1}</h4>
            <p className="text-2xl mt-2 mb-10">—— 质量放心 ——</p>
            {item.list.map((li,l)=>{
              return <a key={l} className="block m-auto mb-7 py-2 w-[80%] bg-[#fff] text-[#E30212] text-2xl">
                {li.model + li.label}
                <img className="inline-block ml-2 mt-[-2]" src={store.common.url + 'apply/arrow.png'}/>
              </a>
            })}
            <span><a className="text-2xl">查看更多 》</a></span>    
          </div>
          <div className="py-13 h-full flex flex-col justify-between" style={{margin:i%2!=0?'0 60px 0 0':'0 0 0 60px'}}>
            <p className="text-2xl w-251 leading-13">{item.text}</p>
            <div className="flex">
              <img src={store.common.url +'apply/' + i +'0.webp'}/>
              <img src={store.common.url +'apply/' + i +'1.webp'}/>
              <img src={store.common.url +'apply/' + i +'2.webp'}/>
              <img src={store.common.url +'apply/' + i +'3.webp'}/>
            </div> 
          </div>
        </div>
      </div>
    </section>
  })}
  </>
} 