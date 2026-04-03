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
    whileHover={{ backgroundColor: 'var(--color-gold-hover)' }}
    className={cn(
      "inline-flex items-center justify-center bg-gold text-white py-4 px-10 text-xs md:text-sm tracking-[0.15em] transition-colors duration-300",
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
        <p className="text-sm text-text-main leading-loose">
          終わりのない通院から卒業する、『切らない膝治療』の最新の解決策。整形外科でのヒアルロン酸注射や痛み止め。これらは決して無駄ではありませんが、すり減った軟骨を元に戻すものではありません。いわば、サビた自転車に「潤滑油」を差しているのと同じ状態（その場しのぎ）です。根本的な解決にはならないため、いずれ限界が来て「人工関節の手術」を宣告されてしまう方が後を絶たないのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">02</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          「手術」か「我慢」か。<br/>その2択を終わらせる第3の選択肢【再生医療】。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          「人工関節の手術は絶対に避けたい…」 そんな方に今、選ばれているのが「再生医療（幹細胞治療）」です。ご自身の脂肪などから採取した細胞を膝に注射することで、失われた軟骨などの組織を「自分の力で修復・再生させる」最先端の治療法です。メスを入れないため、日帰りで、体への負担が少ないのが最大の特徴です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">03</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          ちょっと待って！<br/>「ただ注射するだけ」では、費用が無駄になるかもしれません。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          再生医療は素晴らしい治療ですが、弱点があります。幹細胞は、いわば「再生の種」です。しかし、長年痛みを抱えた膝の周りは、血流が悪く冷え切った『カチカチの枯れた土壌』になっています。栄養のない冷たい土壌に、いくら高級な種（幹細胞）を注射しても、うまく育たずに効果が出ないことがあるのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">04</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          注射と同時に、膝の「土壌」と「天然サポーター」を復活させる。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          これが、当院の【Dr.リバイブ】というプログラムです。当院では、再生医療の効果を最大限に引き出すために、注射の前後で特別な準備とフォローを行います。特殊な高周波と内側からの栄養で、膝まわりの細胞にエネルギーを充電し、幹細胞が一番育ちやすい「温かい環境」を作ります。さらに、膝の痛みの原因である「太ももの筋肉の衰え」を、キツいリハビリなしで呼び覚まし、膝を支える力を取り戻します。
        </p>
      </div>

      <div className="md:col-span-2 space-y-8 pt-12 border-t border-border-light text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-serif text-primary leading-relaxed">
          「最高の土壌」に「最高の種」を。<br/>一生、自分の足で歩くための究極のプログラム
        </h3>
        <p className="text-sm text-text-main leading-loose">
          痛みを抑え、土台を整える「Dr.リバイブ」。すり減った組織を修復する「再生医療（幹細胞注射）」。さらに、全身の修復力を若返らせる「幹細胞上清液の点滴」。これらをすべて組み合わせた総合治療が、全国でも当院だけで受けられる『切らない膝治療の最新かつ最終かつ最高の到達地点』です。
        </p>
        <div className="pt-8">
          <p className="text-sm text-primary font-serif mb-6">まずは、あなたの現状を総合的に診てもらいませんか？</p>
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
        <p className="text-sm text-text-main leading-loose">
          PRPなどの注入療法は、ご自身の修復力に頼る治療です。しかし、膝の細胞が「エネルギー切れ（ATP不足）」を起こしていると、どれだけ良い刺激を与えても、細胞は修復作業を始めてくれません。「スイッチが入らない体」に、信号だけを送っても効果は出にくいのです。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">02</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          貴重な「種」を、痩せた「土壌」に撒いていませんか？
        </h3>
        <p className="text-sm text-text-main leading-loose">
          脂肪幹細胞（MSC）は非常に強力な再生の種です。しかし、膝の軟骨が消失し、炎症が続いている過酷な環境で「カチカチで、栄養の届かない土壌」に注射だけをしても、幹細胞が根付く（定着する）のは非常に困難です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">03</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          高周波と栄養で、膝の「エネルギー工場」を再起動する。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          軟骨細胞の代謝は、すべて「ミトコンドリア」の働きに依存しています。Dr.リバイブは、高周波で深部からエネルギー（電子）をチャージし、ミトコンドリアを活性化させます。「温かく、エネルギーに満ちた土壌」に整えてから幹細胞を迎える。これが、治療の価値を最大限に引き出す絶対条件です。
        </p>
      </div>

      <div className="space-y-6">
        <span className="text-gold font-serif text-3xl block mb-4">04</span>
        <h3 className="text-xl font-serif text-primary leading-relaxed">
          「点（膝）」への注射に加え、「線（全身）」からの点滴で修復力を爆発させる。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          当院では、脂肪幹細胞の「局所注射」に加えて、「歯髄幹細胞上清液の全身投与（点滴）」を推奨しています。膝という「現場」を直しながら、血管を通じて「全身の修復システム」を最新状態にアップデートする。この内側と外側からのダブルアプローチが、炎症を抑え、組織の再生を強力に後押しします。
        </p>
      </div>

      <div className="md:col-span-2 space-y-8 pt-12 border-t border-border-light text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-serif text-primary leading-relaxed">
          膝を守る「天然のサポーター（筋肉）」を呼び覚ます。
        </h3>
        <p className="text-sm text-text-main leading-loose">
          膝の軟骨障害の多くは、筋肉（大腿四頭筋）が正しく使えていないことが原因です。Dr.リバイブは、痛みや苦労と時間を伴うリハビリなしで、眠っている硬くなり癒着した筋肉を「使える状態」へ再起動させます。再生した軟骨を、新しい筋肉が守り続ける。これが「一生歩ける」仕組みです。
        </p>
        <div className="pt-8">
          <p className="text-sm text-primary font-serif mb-6">もう、迷わなくて大丈夫です。最高の状態で再生医療へ進むことをお勧めします。</p>
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
          <a href="#" className="font-serif text-xl tracking-widest text-primary">
            CURATOR
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "幹細胞治療について", href: "#stemcell" },
              { name: "当院について", href: "#about" },
              { name: "治療内容", href: "#treatment" },
              { name: "治療の流れ", href: "#flow" },
              { name: "よくある質問", href: "#faq" },
              { name: "医師紹介", href: "#doctor" },
              { name: "アクセス", href: "#access" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="text-xs font-serif tracking-widest text-text-main hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
             <CTAButton text="無料相談・初回検査のご予約" className="py-3 px-6 text-xs" />
          </div>

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
              終わりのない通院から卒業する、<br />
              <span className="text-gold">『切らない膝治療』</span>の<br />
              最新の解決策。
            </h1>
            <p className="text-base md:text-lg text-text-main font-sans leading-loose mb-12 max-w-2xl">
              「人工関節の手術は絶対に避けたい…」<br />
              そんな方に今、選ばれているのが「再生医療（幹細胞治療）」です。<br />
              ご自身の力で組織を修復・再生させる、メスを入れない日帰り治療。
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* Stem Cell Section */}
      <section id="stemcell" className="py-32 md:py-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading title="幹細胞治療について" subtitle="ABOUT STEM CELL" />
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-serif text-primary mb-6">再生医療（幹細胞治療）とは？</h3>
              <p className="text-sm text-text-main leading-loose mb-12">
                人間の体に本来備わっている「自己修復能力」を最大限に引き出す最先端の治療法です。ご自身の脂肪組織から取り出した「間葉系幹細胞」を、厚生労働省届出の専用施設で培養・活性化し、膝関節内に注射します。幹細胞の持つ「損傷箇所への集積（ホーミング効果）」により、すり減った軟骨や傷ついた組織の保護・修復・再生を強力に促します。
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="aspect-square bg-white p-4 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/gold-abstract/800/800" 
                  alt="Abstract cells" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 bg-bg-white border-t border-border-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <SectionHeading title="当院について" subtitle="ABOUT US" />
          <div className="max-w-3xl mx-auto space-y-16">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-6">なぜ当院の治療は「唯一無二」なのか？</h3>
              <p className="text-sm text-text-main leading-loose text-left md:text-center">
                「なぜ今まで治らなかったのか？」――その答えは、膝の「土壌（体内環境）」にあります。幹細胞は、いわば「再生の種」です。しかし、慢性的な痛みを抱えた膝の多くは、血流が滞り、細胞のエネルギーが枯渇した状態にあります。どれほど質の高い「種」を撒いても、冷たく乾いた「土壌」では、根を張る（定着する）ことはできません。かけがえのない治療を真の意味で成功に導くためには、事前の「土壌改良」が不可欠なのです。
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
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="border-l border-gold pl-8 md:pl-12 mb-20">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">院長 寳學 秀高<br/><span className="text-lg text-text-muted font-sans mt-2 block">Dr. Hidetaka Hougaku</span></h2>
                <div className="space-y-6 text-sm text-text-main leading-loose">
                  <p>
                    当院では、単なる「治療」ではなく、患者様お一人おひとりの身体の歴史（Biological Narrative）を紐解き、根本的な修復を目指すキュレーション（Curation）を行っています。
                  </p>
                  <p>
                    米国国立衛生研究所（NIH）での研究や、長年の臨床経験から導き出された「科学的根拠に基づく再生医療」を提供し、皆様が一生ご自身の足で歩ける喜びを取り戻すためのサポートを全力で行います。
                  </p>
                </div>
              </div>
              
              <div className="aspect-[21/9] w-full overflow-hidden bg-bg-main">
                <img 
                  src="https://picsum.photos/seed/stethoscope-macro/1200/500" 
                  alt="Medical precision" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-20 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-lg text-primary mb-4">略歴</h4>
                  <ul className="space-y-2 text-xs text-text-main leading-loose">
                    <li>1986年 徳島大学医学科卒業</li>
                    <li>1986年 大阪大学第一内科入局</li>
                    <li>1999年 米国国立衛生研究所(NIH) 加齢研究所に留学</li>
                    <li>2004年 大阪大学医学部 循環器内科学脳卒中センター講師</li>
                    <li>2008年 国立大学法人奈良最先端科学技術大学院大学教授</li>
                    <li>2024年 ゲートウェイクリニック大阪梅田 院長 就任</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary mb-4">資格・学会活動</h4>
                  <p className="text-xs text-text-main leading-loose">
                    医学博士（大阪大学） / 日本医師会認定産業医 / 日本内科学会 認定内科医 / 日本脳卒中学会 脳卒中専門医 / 日本高血圧学会 特別正会員（FJSH） / ほか多数
                  </p>
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
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">Gateway Clinic<br/>Osaka Umeda</h2>
              <p className="text-sm text-text-main leading-loose mb-12">
                JR大阪駅直結のKITTE大阪6階。洗練された落ち着きのある空間で、皆様のご来院をお待ちしております。
              </p>
            </div>
            
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              <div className="md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto bg-white shadow-xl">
                <img 
                  src="https://picsum.photos/seed/clinic-interior/800/1200" 
                  alt="Clinic interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square bg-white shadow-xl">
                <img 
                  src="https://picsum.photos/seed/sculpture/800/800" 
                  alt="Art piece" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="bg-bg-white p-12 shadow-xl flex flex-col justify-center">
                <p className="text-[10px] font-sans tracking-[0.2em] text-text-muted uppercase mb-4">LOCATION</p>
                <h3 className="text-2xl font-serif text-primary mb-4 italic">KITTE Osaka 6F</h3>
                <p className="text-xs text-text-main leading-loose mb-8">
                  3-2-2 Umeda, Kita-ku, Osaka-shi, Osaka 530-0001
                </p>
                <div className="space-y-2 text-xs text-text-main">
                  <p>JR「大阪駅」西口改札直結</p>
                  <p>月曜〜金曜 10:00〜20:00</p>
                </div>
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
      <footer className="bg-bg-main py-16 px-6 md:px-12 border-t border-border-light">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-lg tracking-widest text-primary">
            THE CLINICAL CURATOR.
          </div>
          <div className="flex gap-8 text-[10px] font-sans tracking-[0.2em] text-text-muted uppercase">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-primary transition-colors">ETHICAL STANDARDS</a>
            <a href="#" className="hover:text-primary transition-colors">JOURNAL</a>
          </div>
          <p className="text-[10px] font-sans tracking-[0.1em] text-text-muted uppercase">
            © 2024 THE CLINICAL CURATOR. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
