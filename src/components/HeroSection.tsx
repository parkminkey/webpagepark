import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="opacity-0 animate-fade-in-up">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {[
              { label: "동네 삼촌", delay: "0s" },
              { label: "이웃", delay: "0.5s" },
              { label: "상담사", delay: "1.0s" },
              { label: "목사", delay: "0.25s" },
            ].map(({ label, delay }) => (
              <span
                key={label}
                className="text-white/90 font-sans text-sm md:text-base tracking-wide border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full"
                style={{ animation: `float 3.5s ease-in-out infinite ${delay}` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <h1 className="opacity-0 animate-fade-in-up animate-delay-100 text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          박민기
        </h1>

        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <p className="text-white/95 font-sans text-lg md:text-2xl leading-relaxed max-w-xl mx-auto mb-12 break-keep">
            골목에서, 캠퍼스에서, 상담실에서<br />
            삶의 자리마다 사람들 곁에 있습니다.
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="inline-block bg-accent text-accent-foreground font-sans text-base font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            사역 소개
          </a>
          <a
            href="#book"
            className="inline-block border-2 border-white/50 text-white font-sans text-base font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10"
          >
            저서 보기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animate-delay-400">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
