/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Cpu, 
  Database, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Mail,
  MapPin,
  Terminal,
  Code2,
  LineChart,
  Phone
} from 'lucide-react';

// --- Types ---
interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
}

interface AwardItem {
  title: string;
  organization: string;
  year: string;
}

// --- Data ---
const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 ~ 至今",
    company: "浙江金数湾科技有限公司",
    role: "产品方案部主管 / 高级方案专家",
    description: "主导人工智能领域产品设计与开发，为嘉兴市数据局、南湖区数据局提供数据要素与人工智能咨询服务。",
    tags: ["AI产品设计", "数据要素", "政府咨询"]
  },
  {
    period: "2021 ~ 2024",
    company: "火石创造 (大数据独角兽)",
    role: "解决方案总监 / 资深咨询师",
    description: "长期为浙江省厅、杭州、宁波、台州局提供数字化转型服务。主导宁波“新材云创”、金华“中药产业大脑”等省级优秀案例。",
    tags: ["数字化转型", "产业大脑", "大数据分析"]
  },
  {
    period: "2019 ~ 2021",
    company: "中电科三十六所 (CETC 36)",
    role: "信息化项目经理 / 技术专家",
    description: "深度参与大数据信创相关信息化建设，负责基层党建数字化系统等核心项目。",
    tags: ["信创", "项目管理", "智慧党建"]
  }
];

const SKILLS = [
  { name: "系统架构", icon: <Cpu size={18} />, level: "高级", percentage: 90 },
  { name: "大数据分析", icon: <Database size={18} />, level: "专家", percentage: 95 },
  { name: "人工智能", icon: <Code2 size={18} />, level: "高级", percentage: 88 },
  { name: "项目管理", icon: <ShieldCheck size={18} />, level: "PMP", percentage: 92 },
  { name: "数据治理", icon: <LineChart size={18} />, level: "专家", percentage: 94 },
  { name: "数字化转型", icon: <Terminal size={18} />, level: "资深", percentage: 90 },
];

const CERTS = [
  "系统架构师 (高级认证)",
  "PMP 项目管理专业人士",
  "阿里巴巴 ACP 认证",
  "人工智能应用开发工程师 (高级)",
  "人工智能训练师"
];

const AWARDS: AwardItem[] = [
  { title: "国家级数据要素大赛二等奖", organization: "国家数据局", year: "2025" },
  { title: "浙江省数据要素大赛优胜奖", organization: "浙江省数据局", year: "2025" },
  { title: "嘉兴市数据要素大赛专家评委", organization: "嘉兴市数据局", year: "2024" },
  { title: "市信息官联盟特聘专家", organization: "嘉兴市CIO联盟", year: "2024" }
];

// --- Components ---

const SectionHeader = ({ title, icon: Icon }: { title: string, icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
      <Icon className="text-emerald-400" size={24} />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-zinc-100 uppercase font-mono">
      {title}
      <span className="block h-1 w-12 bg-emerald-500 mt-1"></span>
    </h2>
  </div>
);

const BackgroundGrid = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <BackgroundGrid />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-zinc-950 font-bold font-mono">
              Q
            </div>
            <span className="text-zinc-100 font-bold tracking-tighter text-lg font-mono">QIAN.YINQING</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            {['首页', '经历', '技能', '荣誉'].map((item, idx) => {
              const ids = ['home', 'experience', 'skills', 'awards'];
              return (
                <button
                  key={item}
                  onClick={() => document.getElementById(ids[idx])?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <a 
            href="tel:15372323999"
            className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full hover:bg-emerald-500/20 transition-all"
          >
            联系我
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        
        {/* Hero Section */}
        <section id="home" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                随时准备创新
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 tracking-tighter mb-6 leading-[0.9]">
                钱胤卿 <br />
                <span className="text-emerald-500">QIAN YINQING</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed">
                中国人民大学信息分析硕士。深耕大数据与人工智能领域，致力于通过数字化转型驱动产业升级。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin size={16} className="text-emerald-500" />
                  浙江 · 嘉兴 / 杭州
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <GraduationCap size={16} className="text-emerald-500" />
                  中国人民大学
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Phone size={16} className="text-emerald-500" />
                  15372323999
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                
                {/* Tech Overlay Elements */}
                <div className="absolute bottom-4 left-4 p-3 bg-zinc-950/80 backdrop-blur border border-zinc-800 rounded-lg">
                  <div className="text-[10px] font-mono text-emerald-500 mb-1 tracking-widest uppercase">职位</div>
                  <div className="text-xs font-bold text-zinc-100">解决方案架构师</div>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-emerald-500/10 rounded-2xl -z-10 animate-[pulse_4s_infinite]" />
              <div className="absolute -inset-8 border border-emerald-500/5 rounded-2xl -z-20 animate-[pulse_6s_infinite]" />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <SectionHeader title="职业经历" icon={Briefcase} />
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-zinc-800 group"
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-emerald-500/60 bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                    {exp.period}
                  </span>
                </div>
                <div className="text-zinc-300 font-medium mb-4">{exp.role}</div>
                <p className="text-zinc-500 mb-6 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Certs Section */}
        <section id="skills" className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader title="核心能力" icon={Cpu} />
              <div className="grid grid-cols-2 gap-4">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl flex flex-col gap-3 group cursor-default"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-emerald-500 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1.5">
                          <div className="text-sm font-bold text-zinc-100">{skill.name}</div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{skill.level}</div>
                        </div>
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                            className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="专业认证" icon={ShieldCheck} />
              <div className="space-y-3">
                {CERTS.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-sm text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {cert}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="mb-32">
          <SectionHeader title="荣誉与奖项" icon={Award} />
          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((award, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-zinc-900/30 border border-zinc-800 rounded-2xl flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <div className="text-emerald-500 mb-2">
                    <Award size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-1">{award.title}</h3>
                  <p className="text-sm text-zinc-500">{award.organization}</p>
                </div>
                <div className="mt-4 text-xs font-mono text-zinc-600">{award.year}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-top border-zinc-800 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="tel:15372323999" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
              <Phone size={20} />
            </a>
            <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
              <Mail size={20} />
            </a>
            <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all">
              <ExternalLink size={20} />
            </a>
          </div>
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">
            &copy; 2026 钱胤卿. 为数据未来而设计.
          </p>
        </footer>

      </main>
    </div>
  );
}
