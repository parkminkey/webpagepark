import { Heart, Users, MapPin } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "먼저 다가가는 사람",
    description: "기다리지 않고 먼저 이름을 불러주고, 먼저 안부를 묻습니다. 관계는 언제나 먼저 다가가는 사람에게서 시작됩니다.",
  },
  {
    icon: Users,
    title: "옆에 있어주는 사람",
    description: "아이들의 성장 곁에, 청년들의 고민 곁에, 이웃의 일상 곁에 있습니다. 화려한 해결책보다 그냥 옆에 있어주는 것이 때로 가장 큰 힘입니다.",
  },
  {
    icon: MapPin,
    title: "동네 안에 사는 사람",
    description: "특별한 무대가 아니라, 살아가는 동네 골목 안에서 이웃들을 만납니다. 일상의 자리가 곧 사역의 자리입니다.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="warm-gradient py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-accent font-sans text-sm tracking-[0.25em] uppercase mb-5">About</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-12 leading-tight break-keep">
            골목에서 시작된 이야기
          </h2>
          <div className="max-w-xl mx-auto space-y-3 text-foreground/70">
            <p className="font-sans text-base md:text-xl text-left md:text-center leading-relaxed break-keep">골목 안에 사는 아이들을 이름으로 부릅니다.</p>
            <p className="font-sans text-base md:text-xl text-left md:text-center leading-relaxed break-keep">낯선 캠퍼스를 걷는 청년들의 이야기를 듣습니다.</p>
            <p className="font-sans text-base md:text-xl text-left md:text-center leading-relaxed break-keep">삶의 무게에 지친 사람 곁에 앉아, 함께 답을 찾습니다.</p>
            <p className="font-sans text-base md:text-xl text-left md:text-center leading-relaxed break-keep">길을 잃었다고 느끼는 사람에게는 상담사로 함께합니다.</p>
            <p className="font-serif text-lg md:text-2xl text-foreground font-semibold pt-5 leading-snug text-left md:text-center break-keep">
              이웃들이 있는 자리라면, 그 자리에 있는 것. 그것이 이 모든 일의 시작입니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
