import { Store, Brain, GraduationCap, Monitor, Church, ExternalLink, Music, Instagram, Youtube } from "lucide-react";

type LinkIconType = 'instagram' | 'youtube' | 'naver';

interface LinkItem {
  label: string;
  url: string;
  iconType?: LinkIconType;
}

interface Ministry {
  icon: React.ElementType;
  title: string;
  description: string;
  link?: LinkItem | null;
}

const LinkIcon = ({ type }: { type?: LinkIconType }) => {
  if (!type) return null;
  if (type === 'instagram') return <Instagram className="w-3.5 h-3.5" />;
  if (type === 'youtube') return <Youtube className="w-3.5 h-3.5" />;
  if (type === 'naver') return <img src="https://www.google.com/s2/favicons?domain=naver.com&sz=16" className="w-3.5 h-3.5" alt="" />;
  return null;
};

const MinistryCard = ({ item }: { item: Ministry }) => (
  <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-7 md:p-10 border border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/30">
    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
      <item.icon className="w-5 h-5 text-accent" />
    </div>
    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center break-keep">
      {item.title}
    </h3>
    <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-4 break-keep">
      {item.description}
    </p>
    {item.link && (
      <a
        href={item.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-accent font-sans text-sm font-medium hover:underline transition-colors"
      >
        <LinkIcon type={item.link.iconType} />
        {item.link.label}
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    )}
  </div>
);

const ministriesFirst: Ministry[] = [
  {
    icon: Store,
    title: "간식파라다이스",
    description:
      "학교가 끝나도 갈 곳이 없는 아이들이 있습니다. 학원 사이 짧은 틈에 편의점 앞을 서성이는 아이들. 그 아이들에게 \"오늘 어땠어?\" 하고 먼저 물어봐 주는 어른이 있는 공간을 만들었습니다. 이름을 불러주고, 이야기를 들어주고, 아무 조건 없이 응원합니다. 아이들에겐 따뜻한 어른이, 부모님에겐 믿을 수 있는 이웃이 되는 것이 이 공간의 전부입니다.",
    link: { label: "인스타그램 바로가기", url: "https://www.instagram.com/gansikparadise", iconType: 'instagram' },
  },
  {
    icon: Brain,
    title: "글로벌SQ연구소 인천가석센터 (센터장)",
    description:
      "\"나는 왜 이렇게 힘들까\", \"내가 잘 하고 있는 걸까\" — 이런 질문 앞에 선 사람들을 만납니다. SQ(Spiritual Quotient) 전문 상담과 정밀 검사를 통해 스스로의 가치를 발견하고, 흔들리지 않는 삶의 중심을 찾아가도록 함께합니다.",
    link: { label: "네이버 블로그 바로가기", url: "https://blog.naver.com/sqlifedesign", iconType: 'naver' },
  },
  {
    icon: GraduationCap,
    title: "숭실대학교 캠퍼스 멘토링",
    description:
      "대학교 1학년. 아무것도 모른 채 낯선 도시에 혼자 던져진 느낌을 아시나요? 2023년 2학기부터 숭실대학교 캠퍼스 협력멘토링으로 이어지며, 매주 목요일 그 막막함을 안고 캠퍼스를 걷는 새내기들을 만납니다. 진로, 관계, 정체성 — 무엇이든 털어놓을 수 있는 자리를 만들고, 진심으로 경청합니다. 지금까지 15개 이상의 학과에서 70명이 넘는 청년들과 그렇게 만났습니다.",
  },
  {
    icon: Monitor,
    title: "목회자 IT 지원 — 미니스트리 컴패니언",
    description:
      "말씀을 전하고 사람을 섬기는 일에 집중해야 할 목회자가 기술 문제로 시간을 빼앗기는 건 안타까운 일입니다. PC 환경 정비부터 유튜브·SNS 채널 운영, AI 도구 활용까지 — 기술 때문에 막히는 목회자 곁에서 함께 해결합니다.",
    link: { label: "유튜브 재생목록 바로가기", url: "https://youtube.com/playlist?list=PLamMUiBC09y8G0DTGMURLZlbFYfbaf_No&si=_3JIvUO1MGyXOZ0p", iconType: 'youtube' },
  },
];

const ministryLast: Ministry = {
  icon: Church,
  title: "더행복한교회",
  description:
    "2022년 10월 인천 석남동에서 시작한 교회입니다. 대한예수교장로회 합신 교단 소속으로 개혁주의 전통을 따릅니다. 영어 JEBS 예배로 어린이들이 더 큰 하나님 나라를 꿈꾸게 하고, 소리 내어 성경 읽기와 IDPM(말씀을 주야로 무한히 읊조리며 깊이 새기는 훈련)을 통해 말씀이 삶의 능력이 되는 공동체를 세워갑니다. 이웃의 일상 속에 가까이 있는 교회를 지향합니다.",
  link: { label: "네이버 블로그 바로가기", url: "https://blog.naver.com/thehappyhanchurch", iconType: 'naver' },
};

const MinistrySection = () => {
  return (
    <section id="ministry" className="py-24 md:py-36 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-accent font-sans text-sm tracking-[0.25em] uppercase mb-5">
            Ministry & Life
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-5 break-keep">
            이 자리에서 하는 일들
          </h2>
          <p className="text-muted-foreground font-sans text-base md:text-xl max-w-2xl mx-auto leading-relaxed break-keep">
            사람을 만나고, 이야기를 듣고, 곁에 있어주는 것 — 모든 일의 시작은 같습니다.
          </p>
        </div>

        <div className="space-y-5">
          {ministriesFirst.map((item) => (
            <MinistryCard key={item.title} item={item} />
          ))}

          {/* 찬양사역 */}
          <div id="worship" className="group bg-card/80 backdrop-blur-sm rounded-2xl p-7 md:p-10 border border-border/50 transition-all duration-300 hover:shadow-xl hover:border-accent/30">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Music className="w-5 h-5 text-accent" />
            </div>
            <p className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-1 text-center">Worship Ministry</p>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 text-center break-keep">찬양사역</h3>
            <p className="text-muted-foreground font-sans text-base md:text-lg leading-relaxed mb-4 break-keep">
              노래는 말로 다 못 하는 것을 전합니다. 한국컨티넨탈싱어즈, 디사이플스, 프론티어즈 등 한국을 대표하는 찬양 팀에서 활동하며 수많은 무대에서 찬양을 인도해 왔습니다. CBS 워십콘서트 '치유'에 참여했으며, 개인 앨범 1집 「하나님의 손」과 디지털 싱글 「사랑한다 너를 너무 사랑해」를 발표했습니다.
            </p>
            <a
              href="https://youtube.com/channel/UC51UrBJdWpejSiwuOCzBjXQ?si=8sF_4y11iQIJMtie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-accent font-sans text-sm font-medium hover:underline transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              유튜브 채널 바로가기
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <MinistryCard item={ministryLast} />
        </div>
      </div>
    </section>
  );
};

export default MinistrySection;
