import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from './lib/utils';

// --- UI Components ---
const Overline = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <span className="text-[10px] md:text-xs font-sans tracking-[0.25em] text-text-muted uppercase">{text}</span>
    <div className="w-12 h-px bg-border-light" />
  </div>
);

const SectionHeading = ({ title, subtitle, className }: { title: string, subtitle: string, className?: string }) => (
  <div className={cn("text-center mb-20", className)}>
    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{title}</h2>
    <div className="w-16 h-px bg-gold mx-auto mb-6" />
    <p className="text-sm font-sans tracking-[0.2em] text-text-muted uppercase">{subtitle}</p>
  </div>
);

const CTAButton = ({ className, text = "無料相談・初回検査のご予約" }: { className?: string, text?: string }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.02, opacity: 0.95 }}
    className={cn(
      "inline-flex items-center justify-center bg-gradient-to-r from-[#c5a059] via-[#e8c878] to-[#c5a059] text-white py-4 px-10 text-xs md:text-sm tracking-[0.15em] transition-all duration-300 shadow-lg hover:shadow-xl font-medium",
      className
    )}
  >
    {text}
  </motion.a>
);

const FAQItem = ({ q, a, isLast, key }: { q: string, a: string, isLast?: boolean, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={cn("border-t border-border-light", isLast && "border-b")}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-start justify-between text-left focus:outline-none group"
      >
        <span className="font-serif text-lg md:text-xl text-primary pr-8 group-hover:text-gold transition-colors">
          {q}
        </span>
        <ChevronDown className={cn("w-5 h-5 text-text-muted transition-transform duration-500 mt-1 shrink-0", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-text-main leading-loose text-sm md:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Content Components ---
const BeginnerContent = () => (
  <div className="space-y-24">
    {/* Detailed Japanese Content */}
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">01</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          「今週もまた、ヒアルロン酸の注射ですか？」
        </h3>
        <p className="text-base text-text-main leading-loose">
          終わりのない通院から卒業する、『切らない膝治療』の最新の解決策。整形外科でのヒアルロン酸注射や痛み止め。これらは決して無駄ではありませんが、すり減った軟骨を元に戻すものではありません。いわば、サビた自転車に「潤滑油」を差しているのと同じ状態（その場しのぎ）です。根本的な解決にはならないため、いずれ限界が来て「人工関節の手術」を宣告されてしまう方が後を絶たないのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">02</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          「手術」か「我慢」か。<br/>その2択を終わらせる第3の選択肢【再生医療】。
        </h3>
        <p className="text-base text-text-main leading-loose">
          「人工関節の手術は絶対に避けたい…」 そんな方に今、選ばれているのが「再生医療（幹細胞治療）」です。ご自身の脂肪などから採取した細胞を用いて幹細胞での治療を行うことで、失われた軟骨などの組織を「自分の力で修復・再生させる」最先端の治療法です。メスを入れないため、日帰りで、体への負担が少ないのが最大の特徴です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">03</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          ちょっと待って！<br/>「ただ幹細胞での治療を行うだけ」では、費用が無駄になるかもしれません。
        </h3>
        <p className="text-base text-text-main leading-loose">
          再生医療は素晴らしい治療ですが、弱点があります。幹細胞は、いわば「再生の種」です。しかし、長年痛みを抱えた膝の周りは、血流が悪く冷え切った『カチカチの枯れた土壌』になっています。栄養のない冷たい土壌に、いくら高級な種（幹細胞）を用いて幹細胞での治療を行っても、うまく育たずに効果が出ないことがあるのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">04</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          幹細胞での治療と同時に、膝の「土壌」と「天然サポーター」を復活させる。
        </h3>
        <p className="text-base text-text-main leading-loose">
          これが、当院の【Dr.リバイブ】というプログラムです。当院では、再生医療の効果を最大限に引き出すために、幹細胞での治療の前後で特別な準備とフォローを行います。特殊な高周波と内側からの栄養で、膝まわりの細胞にエネルギーを充電し、幹細胞が一番育ちやすい「温かい環境」を作ります。さらに、膝の痛みの原因である「太ももの筋肉の衰え」を呼び覚まし、膝を支える力を取り戻します。
        </p>
      </div>

      <div className="md:col-span-2 space-y-8 pt-12 border-t border-border-light text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-serif text-primary leading-relaxed">
          「最高の土壌」に「最高の種」を。<br/>一生、自分の足で歩くための究極のプログラム
        </h3>
        <p className="text-base text-text-main leading-loose">
          痛みを抑え、土台を整える「Dr.リバイブ」。すり減った組織を修復する「再生医療（幹細胞治療）」。これらを組み合わせた総合治療が、全国でも当院だけで受けられる『切らない膝治療の最新かつ最終かつ最高の到達地点』です。
        </p>
        <div className="pt-8">
          <p className="text-base text-primary font-serif mb-6">まずは、あなたの現状を総合的に診てもらいませんか？</p>
          <CTAButton text="LINEで無料相談・初回検査を予約する" />
        </div>
      </div>
    </div>
  </div>
);

const ExperiencedContent = () => (
  <div className="space-y-24">
    {/* Detailed Japanese Content */}
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">01</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          PRP療法が「期待外れ」に終わってしまった理由。
        </h3>
        <p className="text-base text-text-main leading-loose">
          PRPなどの注入療法は、ご自身の修復力に頼る治療です。しかし、膝の細胞が「エネルギー切れ（ATP不足）」を起こしていると、どれだけ良い刺激を与えても、細胞は修復作業を始めてくれません。「スイッチが入らない体」に、信号だけを送っても効果は出にくいのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">02</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          貴重な「種」を、痩せた「土壌」に撒いていませんか？
        </h3>
        <p className="text-base text-text-main leading-loose">
          脂肪幹細胞（MSC）は非常に強力な再生の種です。しかし、膝の軟骨が消失し、炎症が続いている過酷な環境で「カチカチで、栄養の届かない土壌」に幹細胞での治療だけを行っても、幹細胞が根付く（定着する）のは非常に困難です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">03</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          高周波と栄養で、膝の「エネルギー工場」を再起動する。
        </h3>
        <p className="text-base text-text-main leading-loose">
          軟骨細胞の代謝は、すべて「ミトコンドリア」の働きに依存しています。Dr.リバイブは、高周波で深部からエネルギー（電子）をチャージし、ミトコンドリアを活性化させます。「温かく、エネルギーに満ちた土壌」に整えてから幹細胞を迎える。これが、治療の価値を最大限に引き出す絶対条件です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">04</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          膝を守る「天然のサポーター（筋肉）」を呼び覚ます。
        </h3>
        <p className="text-base text-text-main leading-loose">
          膝の軟骨障害の多くは、筋肉（大腿四頭筋）が正しく使えていないことが原因です。Dr.リバイブは、眠っている硬くなり癒着した筋肉を「使える状態」へ再起動させます。再生した軟骨を、新しい筋肉が守り続ける。これが「一生歩ける」仕組みです。
        </p>
      </div>

      <div className="md:col-span-2 space-y-8 pt-12 border-t border-border-light text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-serif text-primary leading-relaxed">
          最高の状態で再生医療へ進むために。
        </h3>
        <p className="text-base text-text-main leading-loose">
          過去の治療で効果を感じられなかった方こそ、土壌を整える「Dr.リバイブ」と「幹細胞治療」の統合的アプローチが必要です。
        </p>
        <div className="pt-8">
          <p className="text-base text-primary font-serif mb-6">もう、迷わなくて大丈夫です。最高の状態で再生医療へ進むことをお勧めします。</p>
          <CTAButton text="LINEで無料相談・初回検査を予約する" />
        </div>
      </div>
    </div>
  </div>
);

// --- Main App ---
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [target, setTarget] = useState<'beginner' | 'experienced'>('beginner');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-gold/30 selection:text-primary">
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-bg-white/95 backdrop-blur-md border-b border-border-light py-4" : "bg-transparent py-6"
      )}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img src="https://www.gateway-clinic.com/wp/wp-content/webp-express/webp-images/themes/original_theme/assets/img/common/logo.png.webp" alt="ゲートウェイクリニック大阪梅田" className="h-10 md:h-12 object-contain" />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {[
              { name: "幹細胞治療について", href: "#stemcell" },
              { name: "当院について", href: "#about" },
              { name: "治療内容", href: "#treatment" },
              { name: "治療の流れ", href: "#flow" },
              { name: "よくある質問", href: "#faq" },
              { name: "医師紹介", href: "#doctor" },
              { name: "アクセス", href: "#access" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-serif tracking-widest text-text-main hover:text-primary transition-colors font-medium whitespace-nowrap">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-bg-white border-b border-border-light overflow-hidden absolute top-full left-0 right-0"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {[
                  { name: "幹細胞治療について", href: "#stemcell" },
                  { name: "当院について", href: "#about" },
                  { name: "治療内容", href: "#treatment" },
                  { name: "治療の流れ", href: "#flow" },
                  { name: "よくある質問", href: "#faq" },
                  { name: "医師紹介", href: "#doctor" },
                  { name: "アクセス", href: "#access" },
                ].map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-serif text-primary tracking-widest"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4">
                  <CTAButton className="w-full" />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/doctor-elegant/1920/1080" 
            alt="Doctor in clinic" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* 視認性を高めるためにグラデーションを濃くし、少しぼかしを入れる */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/95 to-bg-main/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.4] tracking-tight mb-8">
              膝の再生医療を<br />
              <span className="text-gold">「一生の宝物」</span>にするために。
            </h1>
            <p className="text-base md:text-lg text-text-main font-sans leading-loose mb-12 max-w-2xl">
              過去の治療で効果を感じられなかった方へ贈る、細胞の再起動という新常識。<br /><br />
              次世代の統合型再生医療「Dr.リバイブ」×「幹細胞治療」で、あなたの膝を根本から再起動する。
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* Stem Cell Section */}
      <section id="stemcell" className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="幹細胞治療について" subtitle="ABOUT STEM CELL" />
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-serif text-primary mb-6">再生医療（幹細胞治療）とは？</h3>
              <p className="text-base text-text-main leading-loose mb-12">
                人間の体に本来備わっている「自己修復能力」を最大限に引き出す最先端の治療法です。ご自身の脂肪組織から取り出した「間葉系幹細胞」を、厚生労働省届出の専用施設で培養・活性化し、膝関節内に幹細胞での治療を行います。幹細胞の持つ「損傷箇所への集積（ホーミング効果）」により、すり減った軟骨や傷ついた組織の保護・修復・再生を強力に促します。
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-white p-4 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/blue-cell-biology/800/600" 
                  alt="Stem cell therapy" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <div className="lg:col-span-6 lg:order-2">
              <h3 className="text-2xl font-serif text-primary mb-6">なぜ当院の治療は「唯一無二」なのか？</h3>
              <p className="text-base text-text-main leading-loose mb-12">
                「なぜ今まで治らなかったのか？」――その答えは、膝の「土壌（体内環境）」にあります。<br />
                幹細胞は、いわば「再生の種」です。しかし、慢性的な痛みを抱えた膝の多くは、血流が滞り、細胞のエネルギーが枯渇した状態にあります。どれほど質の高い「種」を撒いても、冷たく乾いた「土壌」では、根を張る（定着する）ことはできません。かけがえのない治療を真の意味で成功に導くためには、事前の「土壌改良」が不可欠なのです。
              </p>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <div className="aspect-[4/3] bg-white p-4 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/professional-clinic-hospital/800/600" 
                  alt="Soil concept" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <div className="lg:col-span-6">
              <h3 className="text-2xl font-serif text-primary mb-6">Dr.リバイブによる「根本からの再起動」</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-serif text-primary mb-3">1. 医療用高周波による「深部加温」で、細胞の道を切り拓く</h4>
                  <p className="text-base text-text-main leading-loose">
                    手技では届かない関節深部の組織温度を上昇させます。滞っていた血流を劇的に改善することで、注入された幹細胞が迷うことなく損傷箇所へ行き渡る「道」が整います。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-primary mb-3">2. 分子栄養学による「インナーケア」で、細胞を再起動させる</h4>
                  <p className="text-base text-text-main leading-loose">
                    血管・加齢医学の専門家である院長が「正確な診断」に基づき、細胞が働くための栄養素を最適化。幹細胞が「修復作業」を最大限の力で行える環境を作ります。
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-white p-4 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/cell-repair-moving/800/600" 
                  alt="Medical device" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent transform -skew-y-2 z-0"></div>
            <div className="relative z-10 bg-white/80 backdrop-blur-sm border border-gold/30 p-10 md:p-16 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-8 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-gold hidden md:block"></span>
                統合的アプローチが生む圧倒的な納得感
                <span className="w-12 h-px bg-gold hidden md:block"></span>
              </h3>
              <p className="text-base md:text-lg text-text-main leading-loose">
                「Dr.リバイブ」で膝を温かく、栄養に満ちたフカフカの土壌へとリバイブさせ、そこに「高品質な幹細胞」を届ける。<br className="hidden md:block" />
                <span className="font-bold text-primary">「内科的アプローチ」×「再生医療」の融合</span>こそが、痛みの根本改善へと導く当院独自のメソッドです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 bg-bg-white border-t border-border-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="当院について" subtitle="ABOUT US" />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-6">
              <div className="aspect-square bg-white p-2 shadow-lg mb-6">
                <img src="https://picsum.photos/seed/clinic-management/600/600" alt="Management" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-serif text-primary">法に準拠した管理体制</h3>
              <p className="text-sm text-text-main leading-loose">
                再生医療等の安全性の確保等に関する法律に基づき、国の基準を満たした厳格な管理体制。
              </p>
            </div>
            <div className="space-y-6">
              <div className="aspect-square bg-white p-2 shadow-lg mb-6">
                <img src="https://picsum.photos/seed/cell-culture/600/600" alt="Cell Culture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-serif text-primary">高度な細胞培養加工施設</h3>
              <p className="text-sm text-text-main leading-loose">
                厚生労働省に届出済みの細胞培養加工施設（施設番号：FC5140001等）と提携し、医薬品製造と同等基準の品質管理体制で細胞を培養。
              </p>
            </div>
            <div className="space-y-6">
              <div className="aspect-square bg-white p-2 shadow-lg mb-6">
                <img src="https://picsum.photos/seed/medical-safety/600/600" alt="Safety" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-serif text-primary">副作用・リスク</h3>
              <p className="text-sm text-text-main leading-loose">
                ご自身の細胞を使用するため本質的な副作用（拒絶反応など）は極めて低いですが、稀に局所麻酔によるアレルギー反応や内出血が生じる場合があります。※本治療は自由診療です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section id="treatment" className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="治療内容" subtitle="TREATMENT" />
          
          <div className="flex justify-center mb-24 border-b border-border-light">
            <button 
              onClick={() => setTarget('beginner')}
              className={cn(
                "px-4 md:px-8 py-4 text-sm md:text-base font-serif transition-all relative",
                target === 'beginner' ? "text-primary" : "text-text-muted hover:text-primary"
              )}
            >
              初めての方へ
              {target === 'beginner' && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
              )}
            </button>
            <button 
              onClick={() => setTarget('experienced')}
              className={cn(
                "px-4 md:px-8 py-4 text-sm md:text-base font-serif transition-all relative",
                target === 'experienced' ? "text-primary" : "text-text-muted hover:text-primary"
              )}
            >
              他院で効果がなかった方へ
              {target === 'experienced' && (
                <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
              )}
            </button>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={target}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {target === 'beginner' ? <BeginnerContent /> : <ExperiencedContent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-32 bg-bg-white border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <SectionHeading title="治療の流れ" subtitle="PROCESS" />
          <div className="space-y-12">
            {[
              { title: "ご相談・正確な診断", desc: "寳學院長による問診と診察。現状の膝や全身の細胞・血流の状況を正確に把握し、最善の治療方針を決定します。" },
              { title: "術前検査・Dr.リバイブ", desc: "感染症等の血液検査と並行し、Dr.リバイブによる「土壌作り（高周波加温・栄養指導）」を開始します。" },
              { title: "脂肪採取", desc: "下腹部を2cmほど切開し、局所麻酔下で1〜2gの脂肪を採取します（所要時間約20分）。" },
              { title: "細胞培養", desc: "厚生労働省届出の専用施設にて、約4〜6週間かけて高品質な幹細胞へ培養・増殖させます。" },
              { title: "治療（投与）", desc: "最適な状態に整った膝関節内へ、培養した幹細胞を注射により投与します。" },
              { title: "経過観察", desc: "投与から1, 3, 6, 12カ月を目安に、効果の確認と細胞の定着をサポートするための診察を行います。" }
            ].map((step, i) => (
              <div key={i} className="flex gap-8 md:gap-16 items-start border-b border-border-light pb-12 last:border-0">
                <span className="text-2xl md:text-4xl font-serif text-gold/50 shrink-0 mt-1">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-4">{step.title}</h3>
                  <p className="text-sm text-text-main leading-loose">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-bg-main border-t border-border-light">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <SectionHeading title="よくある質問" subtitle="FAQ" />
          <div>
            {[
              { q: "この治療を受けるには入院が必要でしょうか？", a: "入院していただく必要はございません。外来通院による日帰りでの治療が可能です。" },
              { q: "何回実施すれば効果はありますか？", a: "1回の治療から効果は実感いただけます。ただし、個人差や疾患の状態により、複数回実施した方が効果が高いという事実もあります（採取した細胞は凍結保存し、1年以内であれば複数回使用することが可能です）。" },
              { q: "副作用はありますか？", a: "ご自身の細胞を使用するため、アレルギーなどの本質的な副作用は極めて低いです。" },
              { q: "公的保険診療の対象になりますか？", a: "本治療は自由診療となり、公的保険診療の対象外となります。" }
            ].map((faq, i, arr) => (
              <FAQItem key={i} q={faq.q} a={faq.a} isLast={i === arr.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section id="doctor" className="py-32 md:py-48 bg-bg-white border-t border-border-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="医師紹介" subtitle="DOCTOR" />
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] w-full overflow-hidden bg-bg-main shadow-xl">
                <img 
                  src="https://www.gateway-clinic.com/wp/wp-content/webp-express/webp-images/uploads/2024/10/b8e32e921c62c4ed0d25e1cabe350f49-1000x1389.jpg.webp" 
                  alt="院長 寳學 英隆" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l border-gold pl-8 md:pl-12 mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">院長 寳學 英隆<br/><span className="text-lg text-text-muted font-sans mt-2 block">Dr. Hidetaka Hougaku</span></h2>
                <div className="space-y-6 text-base text-text-main leading-loose">
                  <p>
                    「なぜ今まで治らなかったのか？」その答えは、局所の問題だけでなく、血流や代謝といった全身の「土壌」が大きく影響しているからです。私は内科・循環器内科の専門知識と、血管や細胞の加齢に関する長年の研究経験から、細胞が喜ぶ環境を根本から再起動させた上で、再生の種（幹細胞）をまくことの重要性を確信しています。かけがえのない治療を真の意味で「一生の宝物」にするために、正確な診断と洗練された医療技術で皆様の歩む未来をサポートします。
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-xl text-primary mb-6 border-b border-border-light pb-2">略歴</h4>
                  <ul className="space-y-3 text-sm md:text-base text-text-main leading-loose">
                    <li>1986年 徳島大学医学科卒業</li>
                    <li>1986年 大阪大学第一内科入局 高血圧脳卒中の診療・研究に従事</li>
                    <li>1999年 大阪大学第一内科 助手任用</li>
                    <li>1999年 米国国立衛生研究所(NIH) 加齢研究所に留学</li>
                    <li>2002年 大阪大学 病態情報内科学 (旧第一内科) 総務委員長 （渉外 人事）</li>
                    <li>2004年 大阪大学医学部 循環器内科学 脳卒中センター講師</li>
                    <li>2008年 大阪大学医学部 循環器内科学 脳卒中センター准教授</li>
                    <li>2008年 国立大学法人奈良先端科学技術大学院大学 教授 保健管理センター所長</li>
                    <li>2024年 ゲートウェイクリニック大阪梅田 院長 就任</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary mb-6 border-b border-border-light pb-2">資格・学会活動</h4>
                  <ul className="space-y-3 text-sm md:text-base text-text-main leading-loose">
                    <li>医学博士の学位授与（大阪大学）</li>
                    <li>日本医師会認定産業医</li>
                    <li>日本内科学会 認定内科医、近畿地方会評議員</li>
                    <li>日本脳卒中学会 脳卒中専門医、評議員</li>
                    <li>日本高血圧学会 特別正会員（FJSH）、評議員</li>
                    <li>日本脳ドック学会 評議員</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-32 md:py-48 bg-bg-main border-t border-border-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="アクセス" subtitle="ACCESS" />
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8">ゲートウェイクリニック大阪梅田</h2>
              
              <div className="space-y-8 text-base text-text-main leading-loose">
                <div>
                  <h4 className="font-serif text-primary mb-2 border-b border-border-light pb-2">住所</h4>
                  <p>〒530-0001<br/>大阪府大阪市北区梅田3丁目2-2 KITTE大阪 6階</p>
                </div>
                
                <div>
                  <h4 className="font-serif text-primary mb-2 border-b border-border-light pb-2">アクセス</h4>
                  <p>JR「大阪駅」西口改札直結<br/>Osaka Metro各線・阪神本線 各「梅田駅」「西梅田駅」「東梅田駅」から好アクセス。</p>
                </div>
                
                <div>
                  <h4 className="font-serif text-primary mb-2 border-b border-border-light pb-2">診療時間</h4>
                  <p>月曜〜金曜 10:00〜20:00<br/>（最終受付19:00 / 土・日・祝は休診）</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="w-full aspect-video bg-white shadow-xl overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=ゲートウェイクリニック大阪梅田&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps ゲートウェイクリニック大阪梅田"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 md:py-56 bg-bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary leading-relaxed mb-16">
          一生、自分の足で歩くための<br/>
          <span className="text-gold">究極のプログラム</span>
        </h2>
        <CTAButton className="mb-12" />
      </section>

      {/* Footer */}
      <footer className="bg-bg-white py-16 px-6 md:px-12 border-t border-border-light">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <img src="https://www.gateway-clinic.com/wp/wp-content/webp-express/webp-images/themes/original_theme/assets/img/common/logo.png.webp" alt="ゲートウェイクリニック大阪梅田" className="h-12 object-contain" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-sans text-text-main">
            <a href="#" className="hover:text-primary transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-primary transition-colors">免責事項</a>
            <a href="#" className="hover:text-primary transition-colors">運営法人情報</a>
          </div>
          <p className="text-xs font-sans text-text-muted">
            ©︎ゲートウェイクリニック大阪梅田
          </p>
        </div>
      </footer>
    </div>
  );
}
