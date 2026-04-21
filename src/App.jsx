/**
 * WHO: 零想科技官网主应用组件，包含9个区块的单页网站
 * FROM: 依赖ParticleBackground粒子背景、ScrollReveal滚动动画
 * TO: 被main.jsx渲染，终端用户访问
 * HERE: src/App.jsx - 网站主入口
 */

import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ScrollReveal from './components/ScrollReveal';
import './index.css';

// Logo Component
const Logo = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="50%" stopColor="#4a9eff" />
        <stop offset="100%" stopColor="#9d4edd" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <circle cx="50" cy="50" r="45" stroke="url(#logoGrad)" strokeWidth="2" fill="none" filter="url(#glow)" />
    <path 
      d="M50 15 L50 35 M50 65 L50 85 M15 50 L35 50 M65 50 L85 50" 
      stroke="url(#logoGrad)" 
      strokeWidth="2" 
      strokeLinecap="round"
      filter="url(#glow)"
    />
    <circle cx="50" cy="50" r="20" stroke="url(#logoGrad)" strokeWidth="2" fill="none" filter="url(#glow)" />
    <circle cx="50" cy="50" r="8" fill="url(#logoGrad)" filter="url(#glow)" />
    <path 
      d="M30 30 Q50 20 70 30 Q80 50 70 70 Q50 80 30 70 Q20 50 30 30" 
      stroke="url(#logoGrad)" 
      strokeWidth="1.5" 
      fill="none" 
      opacity="0.5"
    />
  </svg>
);

// Hero Section
const HeroSection = () => (
  <section className="hero" id="hero">
    <ScrollReveal>
      <div className="hero-logo">
        <Logo size={140} />
      </div>
    </ScrollReveal>
    
    <ScrollReveal delay={0.2}>
      <h1 className="hero-title">LINGX</h1>
    </ScrollReveal>
    
    <ScrollReveal delay={0.3}>
      <p className="hero-subtitle">DREAMWORKS</p>
    </ScrollReveal>
    
    <ScrollReveal delay={0.5}>
      <p className="hero-slogan">点亮每个人心中的梦境</p>
    </ScrollReveal>
    
    <ScrollReveal delay={0.6}>
      <p className="hero-slogan-en">LIGHT UP YOUR DREAMWORLD</p>
    </ScrollReveal>
    
    <div className="scroll-indicator">
      <span>向下滚动</span>
      <div className="scroll-arrow"></div>
    </div>
  </section>
);

// About Section
const AboutSection = () => (
  <section className="section" id="about">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">关于零想</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">AI驱动的XR沉浸式社交娱乐梦工场</div>
          <div className="section-title-en">AI-Driven XR Immersive Social Entertainment Dreamworks</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              零想科技（LINGX DreamWorks）致力于打造AI驱动的XR沉浸式社交娱乐平台。
              我们相信，未来的社交娱乐将突破物理边界，在虚拟世界中创造真实而有意义的连接。
              通过前沿的AI技术与沉浸式XR体验，我们正在构建一个让每个人都能自由表达、
              尽情探索、共同创造的梦幻世界。
            </p>
          </div>
          <div className="about-visual">
            <div className="about-icon">
              <Logo size={180} />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Origin Section
const OriginSection = () => (
  <section className="section" id="origin">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">创立初衷</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">为什么而出发</div>
          <div className="section-title-en">Why We Started</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <p className="section-text">
          在这个快节奏的时代，人们渴望更深层的连接与更有意义的体验。
          现实世界的限制让我们无法自由表达，传统的社交方式已无法满足年轻人对新鲜、
          有趣、沉浸式体验的渴望。零想科技应运而生——我们要打破这些边界，
          用AI与XR技术创造一个无限可能的梦幻世界，让每个人都能在这里找到属于自己的精彩。
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <div className="cards-grid">
          <div className="vision-card">
            <span className="vision-card-icon">🎭</span>
            <h3 className="vision-card-title">打破边界</h3>
            <p className="vision-card-text">突破物理世界限制，在虚拟空间自由探索与表达</p>
          </div>
          <div className="vision-card">
            <span className="vision-card-icon">✨</span>
            <h3 className="vision-card-title">创造连接</h3>
            <p className="vision-card-text">用AI技术打造个性化交互，建立真实有意义的社交关系</p>
          </div>
          <div className="vision-card">
            <span className="vision-card-icon">🚀</span>
            <h3 className="vision-card-title">引领未来</h3>
            <p className="vision-card-text">站在技术前沿，重新定义下一代社交娱乐体验</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Trend Section
const TrendSection = () => (
  <section className="section" id="trend">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">AI + XR 趋势</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">正在发生的未来</div>
          <div className="section-title-en">The Future Is Now</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <p className="section-text">
          AI与XR的融合正在重塑人类交互的方式。生成式AI让虚拟世界拥有了智能的灵魂，
          XR技术则让沉浸式体验成为日常。我们正站在下一次数字革命的风口浪尖，
          见证着一个全新娱乐时代的开启。零想科技致力于成为这场革命的引领者，
          用创新技术为用户带来前所未有的体验。
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <div className="feature-content">
              <h3>生成式AI爆发</h3>
              <p>AIGC技术让内容创作门槛大幅降低，虚拟角色拥有智能对话能力</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">02</span>
            <div className="feature-content">
              <h3>XR设备普及</h3>
              <p>VR/AR/MR头显设备性能提升、成本下降，进入大众消费市场</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">03</span>
            <div className="feature-content">
              <h3>社交元宇宙崛起</h3>
              <p>下一代社交平台从2D平面转向3D沉浸式空间，沉浸式社交成为主流</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">04</span>
            <div className="feature-content">
              <h3>虚实融合体验</h3>
              <p>现实与虚拟的边界逐渐模糊，混合现实应用场景不断拓展</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Advantages Section
const AdvantagesSection = () => (
  <section className="section" id="advantages">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">零想优势</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">为什么选择零想</div>
          <div className="section-title-en">Why Choose LINGX</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-number">01</span>
            <div className="feature-content">
              <h3>AI核心技术</h3>
              <p>自研多模态AI大模型，具备智能对话、情感识别、内容生成能力</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">02</span>
            <div className="feature-content">
              <h3>XR技术积累</h3>
              <p>多年沉浸式技术研发经验，掌握空间计算、实时渲染核心技术</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">03</span>
            <div className="feature-content">
              <h3>用户洞察</h3>
              <p>深度理解年轻用户需求，打造符合时代审美的产品和体验</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">04</span>
            <div className="feature-content">
              <h3>创意团队</h3>
              <p>汇集游戏、影视、动漫领域顶尖创意人才，跨界融合创新</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">05</span>
            <div className="feature-content">
              <h3>快速迭代</h3>
              <p>敏捷开发体系，快速响应市场变化，持续优化用户体验</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-number">06</span>
            <div className="feature-content">
              <h3>生态连接</h3>
              <p>开放平台战略，与上下游合作伙伴共建XR内容生态</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Roadmap Section
const RoadmapSection = () => (
  <section className="section" id="roadmap">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">发展目标</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">我们的路线图</div>
          <div className="section-title-en">Our Roadmap</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <div className="timeline-title">产品孵化</div>
              <div className="timeline-desc">完成核心AI+XR技术验证，推出MVP产品</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <div className="timeline-title">产品打磨</div>
              <div className="timeline-desc">完善产品体验，打磨核心功能，建立用户口碑</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2026</div>
              <div className="timeline-title">规模增长</div>
              <div className="timeline-desc">用户规模突破百万，实现商业化验证</div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-year">2027+</div>
              <div className="timeline-title">生态繁荣</div>
              <div className="timeline-desc">构建开放生态，成为XR社交娱乐领域领导者</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Vision Section
const VisionSection = () => (
  <section className="section" id="vision">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">使命愿景</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">我们要做什么</div>
          <div className="section-title-en">Our Mission & Vision</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="cards-grid">
          <div className="vision-card">
            <span className="vision-card-icon">💫</span>
            <h3 className="vision-card-title">我们的使命</h3>
            <p className="vision-card-text">
              用AI与XR技术赋能每一个人，让梦想触手可及，让想象成为现实
            </p>
          </div>
          <div className="vision-card">
            <span className="vision-card-icon">🌟</span>
            <h3 className="vision-card-title">我们的愿景</h3>
            <p className="vision-card-text">
              成为全球领先的XR沉浸式社交娱乐平台，构建下一个时代的数字生活空间
            </p>
          </div>
          <div className="vision-card">
            <span className="vision-card-icon">❤️</span>
            <h3 className="vision-card-title">核心价值观</h3>
            <p className="vision-card-text">
              用户至上 · 创新驱动 · 开放协作 · 追求极致
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Works Section
const WorksSection = () => (
  <section className="section" id="works">
    <div className="section-inner">
      <ScrollReveal>
        <div className="section-label">作品案例</div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <div className="section-title">
          <div className="section-title-cn">我们的作品</div>
          <div className="section-title-en">Our Works</div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <div className="works-grid">
          <div className="work-card">
            <div className="work-card-bg">
              <span className="work-card-icon">🌈</span>
            </div>
            <div className="work-card-overlay">
              <h3 className="work-card-title">梦境空间</h3>
              <p className="work-card-desc">AI驱动的沉浸式社交虚拟空间</p>
            </div>
          </div>
          <div className="work-card">
            <div className="work-card-bg">
              <span className="work-card-icon">🎮</span>
            </div>
            <div className="work-card-overlay">
              <h3 className="work-card-title">虚拟形象</h3>
              <p className="work-card-desc">AI生成个性化虚拟形象与表情</p>
            </div>
          </div>
          <div className="work-card">
            <div className="work-card-bg">
              <span className="work-card-icon">🎵</span>
            </div>
            <div className="work-card-overlay">
              <h3 className="work-card-title">沉浸娱乐</h3>
              <p className="work-card-desc">VR音乐会与虚拟演出体验</p>
            </div>
          </div>
          <div className="work-card">
            <div className="work-card-bg">
              <span className="work-card-icon">🏠</span>
            </div>
            <div className="work-card-overlay">
              <h3 className="work-card-title">虚拟家园</h3>
              <p className="work-card-desc">个性化虚拟空间设计与建造</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

// Footer Section
const FooterSection = () => (
  <footer className="footer" id="contact">
    <ScrollReveal>
      <div className="footer-logo">
        <Logo size={80} />
      </div>
    </ScrollReveal>
    
    <ScrollReveal delay={0.1}>
      <h2 className="footer-brand">零想科技 LINGX</h2>
    </ScrollReveal>
    
    <ScrollReveal delay={0.2}>
      <p className="footer-tagline">AI驱动的XR沉浸式社交娱乐梦工场</p>
    </ScrollReveal>
    
    <ScrollReveal delay={0.3}>
      <div className="footer-contact">
        <div className="footer-contact-item">
          邮箱：<a href="mailto:hello@lingx.tech">hello@lingx.tech</a>
        </div>
        <div className="footer-contact-item">
          地址：北京市海淀区中关村科技园区
        </div>
      </div>
    </ScrollReveal>
    
    <ScrollReveal delay={0.4}>
      <p className="footer-copyright">
        © 2024 零想科技（北京）有限公司 LINGX DreamWorks. All rights reserved.
      </p>
    </ScrollReveal>
  </footer>
);

// Loading Screen
const LoadingScreen = ({ isLoading }) => (
  <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
    <div className="loading-spinner"></div>
  </div>
);

// Main App
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {/* Background Effects */}
      <div className="bg-gradient"></div>
      <div className="bg-grid"></div>
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <main className="main-content">
        {/* 1. Hero - 首屏 */}
        <HeroSection />
        
        {/* 2. About - 公司介绍 */}
        <AboutSection />
        
        {/* 3. Origin - 创立初衷 */}
        <OriginSection />
        
        {/* 4. Trend - AI+XR趋势 */}
        <TrendSection />
        
        {/* 5. Advantages - 零想优势 */}
        <AdvantagesSection />
        
        {/* 6. Roadmap - 发展目标 */}
        <RoadmapSection />
        
        {/* 7. Vision - 使命愿景 */}
        <VisionSection />
        
        {/* 8. Works - 作品案例 */}
        <WorksSection />
        
        {/* 9. Footer - 底部联系 */}
        <FooterSection />
      </main>
    </>
  );
}

export default App;