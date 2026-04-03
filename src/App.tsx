/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Sprout, 
  Activity, 
  ShieldCheck, 
  MessageCircle, 
  AlertCircle,
  CheckCircle2,
  UserCheck,
  UserPlus,
  Minus,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
type TargetType = 'experienced' | 'beginner';

// --- Components ---

const CTAButton = ({ className, variant = 'primary' }: { className?: string, variant?: 'primary' | 'outline' | 'accent' }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={cn(
      "inline-flex items-center justify-center gap-3 font-bold transition-all duration-300 rounded-full tracking-wider text-sm",
      variant === 'primary' 
        ? "bg-gateway-navy text-white py-4 px-8 hover:bg-gateway-blue shadow-lg" 
        : variant === 'accent'
        ? "bg-gateway-gold text-white py-4 px-8 hover:bg-opacity-90 shadow-lg"
        : "border-2 border-gateway-navy text-gateway-navy py-4 px-8 hover:bg-gateway-navy hover:text-white",
      className
    )}
  >
    <MessageCircle className="w-5 h-5" />
    <span>ご相談・初回検査のご予約</span>
  </motion.a>
);

const Section = ({ children, className, id, title, subtitle, centered = true }: { children: React.ReactNode, className?: string, id?: string, title?: string, subtitle?: string, centered?: boolean }) => (
  <section id={id} className={cn("py-20 md:py-32 px-6", className)}>
    <div className="max-w-7xl mx-auto">
      {(title || subtitle) && (
        <div className={cn("mb-16 space-y-4", centered ? "text-center" : "text-left")}>
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-sans text-gateway-navy font-bold"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gateway-gold font-medium tracking-widest uppercase"
            >
              {subtitle}
            </motion.p>
          )}
          <div className={cn("w-12 h-1 bg-gateway-gold mt-6", centered ? "mx-auto" : "ml-0")} />
        </div>
      )}
      {children}
    </div>
  </section>
);

const EditorialHeader = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={cn("mb-12 space-y-4", centered ? "text-center" : "text-left")}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-sans text-gateway-navy font-bold leading-[1.4]"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-base text-gateway-slate font-light leading-[1.8]"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Content Sections ---

const ExperiencedContent = () => (
  <div className="space-y-0">
    {/* Hero */}
    <Section className="min-h-[95vh] flex items-center bg-white relative pt-40">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 hidden lg:block" />
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="text-gateway-gold font-bold tracking-[0.3em] uppercase text-xs block">Regenerative Medicine Program</span>
            <h1 className="text-5xl md:text-7xl font-serif text-gateway-navy leading-[1.3] font-bold">
              膝の再生医療を<br />
              <span className="italic text-gateway-gold">一生の宝物</span>に。
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gateway-slate font-light max-w-xl leading-[1.8]"
          >
            過去の治療で効果を感じられなかった方へ贈る、<br />
            Dr.リバイブによる「細胞の再起動」という新常識。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <CTAButton />
          </motion.div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-slate-100 overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://picsum.photos/seed/clinic/800/1000" 
              alt="Gateway Clinic Interior" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-gateway-navy p-10 shadow-2xl hidden md:block">
            <p className="text-white font-serif italic text-lg leading-[1.8]">
              "Beyond conventional treatment.<br />
              Rebooting your cellular potential."
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Analysis */}
    <Section className="bg-slate-50">
      <EditorialHeader 
        title="PRP療法が「期待外れ」に終わってしまった理由。" 
        subtitle="注入された信号は、受け取る側の準備が整っていなければ意味をなしません。"
      />
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-10 text-lg text-gateway-slate font-light leading-[1.8]">
          <p>PRPなどの注入療法は、ご自身の修復力に頼る治療です。</p>
          <p>
            しかし、膝の細胞が<span className="font-bold text-gateway-navy">「エネルギー切れ（ATP不足）」</span>を起こしていると、どれだけ良い刺激を与えても、細胞は修復作業を始めてくれません。
          </p>
          <div className="line-accent p-10 bg-white shadow-sm italic text-gateway-navy font-medium leading-[1.8]">
            「スイッチが入らない体」に、信号だけを送っても効果は出にくいのです。
          </div>
        </div>
        <div className="glass-card aspect-square flex items-center justify-center p-12 group relative overflow-hidden">
          <div className="absolute inset-0 navy-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
          <Zap className="w-24 h-24 text-gateway-gold stroke-[1px]" />
          <div className="absolute bottom-10 text-center w-full">
            <p className="text-[10px] tracking-[0.4em] uppercase text-slate-400">Cellular Energy Deficit</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Soil Analogy */}
    <Section className="bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <EditorialHeader 
          centered
          title="100万円の「種」を、痩せた「土壌」に撒いていませんか？" 
        />
        <div className="space-y-10 text-xl text-gateway-slate font-light leading-[1.8]">
          <p>
            脂肪幹細胞（MSC）は非常に強力な再生の種です。<br />
            しかし、膝の軟骨が消失し、炎症が続いている過酷な環境で「カチカチで、栄養の届かない土壌」に注射だけをしても、幹細胞が根付く（定着する）のは非常に困難です。
          </p>
        </div>
        <div className="section-divider" />
      </div>
    </Section>

    {/* Dr. Revive Role */}
    <Section className="navy-gradient text-white">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Minus className="text-gateway-gold w-8" />
            <span className="text-gateway-gold font-bold tracking-[0.2em] uppercase text-xs">The Dr. Revive Method</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight font-bold">
            高周波と栄養で、膝の<br />
            <span className="italic text-gateway-gold">「エネルギー工場」</span>を再起動する。
          </h2>
          <div className="space-y-8 text-lg text-slate-300 font-light leading-[1.8]">
            <p>軟骨細胞の代謝は、すべて「ミトコンドリア」の働きに依存しています。</p>
            <p>Dr.リバイブは、高周波で深部からエネルギー（電子）をチャージし、ミトコンドリアを活性化させます。</p>
            <p className="text-white text-xl font-serif italic border-l-2 border-gateway-gold pl-8 leading-[1.8]">
              「温かく、エネルギーに満ちた土壌」に整えてから幹細胞を迎える。
            </p>
            <p>これが、100万円を無駄にしない絶対条件です。</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square border border-white/10 flex items-center justify-center">
            <Activity className="w-32 h-32 text-gateway-gold opacity-30 animate-pulse" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-7xl font-serif text-white block mb-2">98%</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-slate-500">Cellular Activation</span>
          </div>
        </div>
      </div>
    </Section>

    {/* Dental Pulp */}
    <Section className="bg-white">
      <EditorialHeader 
        title="「点（膝）」への注射に加え、「線（全身）」からの点滴で修復力を爆発させる。" 
      />
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { title: "Local Injection", desc: "膝という「現場」を直接修復。脂肪幹細胞の局所注射。" },
          { title: "Systemic Update", desc: "歯髄幹細胞上清液の全身投与で、修復システムをアップデート。" },
          { title: "Double Approach", desc: "内側と外側からのダブルアプローチで、再生を強力に後押し。" }
        ].map((item, i) => (
          <div key={i} className="p-12 border border-slate-100 hover:border-gateway-gold transition-all duration-500 group bg-slate-50/50">
            <span className="text-gateway-gold/20 text-7xl font-serif mb-8 block group-hover:text-gateway-gold transition-colors">0{i+1}</span>
            <h3 className="text-xl font-serif mb-4 text-gateway-navy font-bold">{item.title}</h3>
            <p className="text-gateway-slate font-light text-sm leading-[1.8]">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="bg-slate-50 text-center py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gateway-navy">
          もう、迷わなくて大丈夫です。
        </h2>
        <p className="text-xl text-gateway-slate font-light leading-[1.8]">
          まだまだ改善の可能性があります。<br />
          まずは、当院で、現状を正確に把握し、あなたのための「最適解」を一緒に確認しませんか？
        </p>
        <div className="flex flex-col items-center gap-8">
          <CTAButton />
          <div className="flex items-center gap-4 text-gateway-gold">
            <Minus className="w-8" />
            <span className="text-xs tracking-[0.3em] uppercase font-bold">Consultation & Initial Exam</span>
            <Minus className="w-8" />
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const BeginnerContent = () => (
  <div className="space-y-0">
    {/* Hero */}
    <Section className="min-h-[95vh] flex items-center bg-gateway-cream relative pt-40">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="text-gateway-gold font-bold tracking-[0.3em] uppercase text-xs block">Advanced Knee Care</span>
            <h1 className="text-5xl md:text-6xl font-serif text-gateway-navy leading-[1.4] font-bold">
              「今週もまた、<br />
              <span className="italic text-gateway-gold">ヒアルロン酸</span>の注射ですか？」
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-gateway-slate font-light max-w-xl leading-[1.8]">
            終わりのない通院から卒業する、<br />
            ゲートウェイクリニックの『切らない膝治療』。
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CTAButton />
          </motion.div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white shadow-2xl rounded-full overflow-hidden border-[15px] border-white">
            <img 
              src="https://picsum.photos/seed/active/1000/1000" 
              alt="Active Lifestyle" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-10 right-0 bg-gateway-navy text-white p-8 shadow-2xl">
            <p className="text-xs tracking-[0.3em] uppercase font-bold">The New Standard</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Problem */}
    <Section className="bg-white">
      <EditorialHeader 
        title="なぜ、長年通院しても「痛み」は消えないのか？" 
        subtitle="対症療法だけでは、根本的な解決には至りません。"
      />
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-10 text-lg text-gateway-slate font-light leading-[1.8]">
          <p>整形外科でのヒアルロン酸注射や痛み止め。これらは決して無駄ではありませんが、すり減った軟骨を元に戻すものではありません。</p>
          <p className="text-gateway-navy font-bold border-b-2 border-gateway-gold pb-4 inline-block italic">
            いわば、サビた自転車に「潤滑油」を差しているのと同じ状態です。
          </p>
          <p>
            根本的な解決にはならないため、いずれ限界が来て「人工関節の手術」を宣告されてしまう方が後を絶たないのです。
          </p>
        </div>
        <div className="bg-slate-50 p-12 flex flex-col justify-center space-y-8 border-l-4 border-gateway-navy">
          <div className="flex items-center gap-4 text-gateway-gold">
            <AlertCircle className="w-8 h-8" />
            <span className="font-serif italic text-2xl font-bold">The Critical Limit</span>
          </div>
          <p className="text-sm text-gateway-slate leading-[1.8]">
            多くの患者様が、手術しか選択肢がなくなるまで待ってしまいます。再生医療は、その前に検討すべき「第3の道」です。
          </p>
        </div>
      </div>
    </Section>

    {/* Solution: Regenerative Medicine */}
    <Section className="navy-gradient text-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          「手術」か「我慢」か。<br />
          その2択を終わらせる<span className="text-gateway-gold italic">第3の選択肢</span>。
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6 opacity-80 font-light text-lg">
            <p>「人工関節の手術は絶対に避けたい…」 そんな方に今、選ばれているのが「再生医療（幹細胞治療）」です。</p>
            <p>ご自身の脂肪などから採取した細胞を膝に注射することで、失われた軟骨などの組織を「自分の力で修復・再生させる」最先端の治療法です。</p>
          </div>
          <div className="p-10 border border-white/10 bg-white/5 flex flex-col justify-center">
            <CheckCircle2 className="text-gateway-gold w-12 h-12 mb-6" />
            <p className="text-2xl font-serif font-bold">メスを入れない日帰り治療</p>
            <p className="text-[10px] text-slate-500 mt-4 tracking-[0.4em] uppercase">Minimal Invasive Therapy</p>
          </div>
        </div>
      </div>
    </Section>

    {/* Soil & Support */}
    <Section className="bg-white">
      <EditorialHeader 
        title="注射と同時に、膝の「土壌」と「天然サポーター」を復活させる。" 
        subtitle="Dr.リバイブ×再生医療のシナジー効果。"
      />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="group p-10 border border-slate-50 hover:border-gateway-gold transition-all duration-500 bg-slate-50/30">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gateway-gold font-serif text-3xl italic font-bold">01.</span>
              <h3 className="text-2xl font-serif font-bold">土壌をフカフカにする</h3>
            </div>
            <p className="text-gateway-slate font-light leading-[1.8]">
              特殊な高周波と内側からの栄養で、膝まわりの細胞にエネルギーを充電します。幹細胞が一番育ちやすい「温かい環境」を作ります。
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="group p-10 border border-slate-50 hover:border-gateway-gold transition-all duration-500 bg-slate-50/30">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gateway-gold font-serif text-3xl italic font-bold">02.</span>
              <h3 className="text-2xl font-serif font-bold">天然のサポーターを復活</h3>
            </div>
            <p className="text-gateway-slate font-light leading-[1.8]">
              膝の痛みの原因である「太ももの筋肉の衰え」を、キツいリハビリなしで呼び覚まし、膝を支える力を取り戻します。
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Final CTA */}
    <Section className="bg-gateway-cream text-center py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-gateway-navy">
          まずは、あなたの現状を<br /><span className="italic text-gateway-gold">総合的</span>に診ませんか？
        </h2>
        <div className="space-y-6 text-xl text-gateway-slate font-light leading-[1.8]">
          <p>「私でもまだ間に合う？」「手術を回避できる？」</p>
          <p>その疑問に、データと医療の力でハッキリとお答えします。</p>
        </div>
        <CTAButton />
      </div>
    </Section>
  </div>
);

// --- Main App ---

export default function App() {
  const [target, setTarget] = useState<TargetType>('experienced');

  const handleTargetChange = (newTarget: TargetType) => {
    setTarget(newTarget);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-gateway-gold selection:text-white bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 20 L80 20 L80 45 L50 45 L50 55 L80 55 L80 80 L20 80 Z" fill="none" stroke="#C5A059" strokeWidth="8" />
                <path d="M80 45 L80 80 L20 80 L20 20 L80 20" fill="none" stroke="#C5A059" strokeWidth="8" strokeLinejoin="bevel" />
                <path d="M50 45 L80 45" fill="none" stroke="#C5A059" strokeWidth="8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg md:text-xl tracking-tight text-gateway-navy font-bold leading-none">ゲートウェイクリニック</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] tracking-widest text-gateway-navy font-medium">大阪梅田</span>
                <span className="text-[8px] tracking-wider text-gateway-gold font-light uppercase hidden sm:inline">Gateway Clinic Osaka Umeda</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gateway-navy">
              <a href="#features" className="hover:text-gateway-gold transition-colors">当院の特徴</a>
              <a href="#treatment" className="hover:text-gateway-gold transition-colors">治療内容</a>
              <a href="#flow" className="hover:text-gateway-gold transition-colors">治療の流れ</a>
              <a href="#access" className="hover:text-gateway-gold transition-colors">アクセス</a>
            </div>
            <CTAButton className="py-3 px-6 text-[11px] md:text-xs" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/medical/1920/1080" 
            alt="Medical Hero" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block bg-gateway-navy/5 px-4 py-2 rounded-full">
              <span className="text-gateway-navy font-bold text-sm tracking-widest uppercase">Regenerative Medicine</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans text-gateway-navy leading-[1.2] font-bold">
              膝の痛みを<br />
              <span className="text-gateway-gold italic">根本から</span>再起動。
            </h1>
            <p className="text-xl md:text-2xl text-gateway-slate font-light leading-[1.8] max-w-xl">
              「手術」か「我慢」か。その2択を終わらせる、ゲートウェイクリニック大阪梅田の『切らない膝治療』。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <CTAButton variant="accent" />
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-full border-2 border-gateway-navy text-gateway-navy font-bold hover:bg-gateway-navy hover:text-white transition-all"
              >
                詳しく見る
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/seed/doctor/800/1000" 
                alt="Doctor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gateway-navy text-white p-8 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-lg font-serif italic mb-4">"We believe in the power of your own cells."</p>
              <p className="text-xs tracking-widest uppercase opacity-60">Gateway Clinic Specialists</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <Section id="features" title="当院の3つの特徴" subtitle="Why Choose Us">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Zap className="w-10 h-10" />, 
              title: "Dr.リバイブ・メソッド", 
              desc: "高周波と栄養で「細胞のエネルギー工場」を再起動し、幹細胞が定着しやすい土壌を整えます。" 
            },
            { 
              icon: <ShieldCheck className="w-10 h-10" />, 
              title: "切らない・日帰り治療", 
              desc: "メスを入れず、ご自身の細胞を用いた治療のため、体への負担が少なく日帰りで受診可能です。" 
            },
            { 
              icon: <Activity className="w-10 h-10" />, 
              title: "オーダーメイド医療", 
              desc: "患者様一人ひとりの膝の状態を精密に分析し、最適な再生医療プログラムをご提案します。" 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gateway-light p-10 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-gateway-navy group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gateway-navy">{feature.title}</h3>
              <p className="text-gateway-slate font-light leading-[1.8]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Target Toggle Section */}
      <Section id="treatment" className="bg-gateway-light" title="あなたの状態に合わせた治療" subtitle="Personalized Care">
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-2 rounded-full shadow-sm border border-slate-100">
            <button 
              onClick={() => handleTargetChange('experienced')}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                target === 'experienced' ? "bg-gateway-navy text-white shadow-md" : "text-slate-400 hover:text-slate-600"
              )}
            >
              治療経験のある方
            </button>
            <button 
              onClick={() => handleTargetChange('beginner')}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                target === 'beginner' ? "bg-gateway-navy text-white shadow-md" : "text-slate-400 hover:text-slate-600"
              )}
            >
              幹細胞治療が初めての方
            </button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={target}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {target === 'experienced' ? <ExperiencedContent /> : <BeginnerContent />}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Flow Section */}
      <Section id="flow" title="治療の流れ" subtitle="Treatment Flow">
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gateway-gold/20 -translate-y-1/2 hidden md:block" />
          {[
            { step: "01", title: "カウンセリング", desc: "専門のスタッフが丁寧にお悩みをお伺いします。" },
            { step: "02", title: "精密検査・診断", desc: "MRIや血液検査で膝の状態を詳細に分析します。" },
            { step: "03", title: "治療計画のご提案", desc: "最適な再生医療プログラムを医師がご提案します。" },
            { step: "04", title: "治療開始", desc: "Dr.リバイブと幹細胞治療による再起動を開始します。" }
          ].map((item, i) => (
            <div key={i} className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm z-10">
              <span className="text-4xl font-bold text-gateway-gold/20 block mb-4">{item.step}</span>
              <h3 className="text-xl font-bold mb-4 text-gateway-navy">{item.title}</h3>
              <p className="text-sm text-gateway-slate font-light leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Doctor Section */}
      <Section className="bg-gateway-navy text-white" title="医師紹介" subtitle="Our Specialist" centered={false}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              患者様一人ひとりの<br />
              <span className="text-gateway-gold italic">「歩く喜び」</span>のために。
            </h3>
            <div className="space-y-6 text-lg text-slate-300 font-light leading-[1.8]">
              <p>ゲートウェイクリニック大阪梅田では、最新の再生医療技術と、独自のDr.リバイブ・メソッドを組み合わせることで、従来の治療では限界があった膝の痛みに対して、新たな可能性をご提案しています。</p>
              <p>「手術しかない」と言われた方も、諦める前に一度ご相談ください。私たちは、あなたの細胞が持つ本来の力を信じています。</p>
            </div>
            <div className="pt-8 border-t border-white/10">
              <p className="text-xl font-bold">ゲートウェイクリニック大阪梅田 院長</p>
              <p className="text-gateway-gold tracking-widest uppercase text-sm mt-2">Director of Gateway Clinic</p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-white/5 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/doctor-profile/800/600" 
              alt="Doctor Profile" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Access Section */}
      <Section id="access" title="アクセス" subtitle="Access & Info">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gateway-light p-10 rounded-3xl space-y-8">
              <div>
                <h4 className="text-gateway-gold font-bold text-xs tracking-widest uppercase mb-4">Clinic Name</h4>
                <p className="text-2xl font-bold text-gateway-navy">ゲートウェイクリニック 大阪梅田</p>
              </div>
              <div>
                <h4 className="text-gateway-gold font-bold text-xs tracking-widest uppercase mb-4">Address</h4>
                <p className="text-gateway-slate leading-[1.8]">
                  〒530-0001<br />
                  大阪府大阪市北区梅田3丁目2番2号<br />
                  KITTE大阪 6階<br />
                  <span className="text-sm font-bold text-gateway-navy">JR大阪駅西口改札直結</span>
                </p>
              </div>
              <div>
                <h4 className="text-gateway-gold font-bold text-xs tracking-widest uppercase mb-4">Hours</h4>
                <p className="text-gateway-slate leading-[1.8]">
                  10:00 - 19:00<br />
                  <span className="text-sm">※完全予約制</span>
                </p>
              </div>
            </div>
            <CTAButton className="w-full" />
          </div>
          <div className="lg:col-span-7 aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
            {/* Placeholder for Map */}
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
              Google Maps Integration
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gateway-light py-20 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M20 20 L80 20 L80 45 L50 45 L50 55 L80 55 L80 80 L20 80 Z" fill="none" stroke="#C5A059" strokeWidth="8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg tracking-tight text-gateway-navy font-bold leading-none">ゲートウェイクリニック</span>
              <span className="text-[10px] tracking-widest text-gateway-navy font-medium mt-1">大阪梅田</span>
            </div>
          </div>
          <div className="flex gap-12 text-sm font-bold text-gateway-navy">
            <a href="#" className="hover:text-gateway-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gateway-gold transition-colors">Terms of Service</a>
          </div>
          <p className="text-slate-400 text-xs tracking-widest uppercase">© 2026 GATEWAY CLINIC OSAKA UMEDA.</p>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-8 left-0 right-0 z-50 px-6 lg:hidden">
        <CTAButton className="w-full py-5 shadow-2xl" />
      </div>
    </div>
  );
}
