import bookCover from "@/assets/book-cover.jpg";
import { ExternalLink, Youtube } from "lucide-react";

const BookSection = () => {
  return (
    <section id="book" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">Book</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            저서 소개
          </h2>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a
            href="https://bookk.co.kr/bookStore/69317bd788325995645ae027"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden shadow-xl flex justify-center bg-muted/30 w-full max-w-xs transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <img
              src={bookCover}
              alt="목사 어쩌다 사장이 되다 - 박민기 저"
              className="w-auto max-w-full h-72 md:h-[28rem] object-contain"
              loading="lazy"
            />
          </a>

          <div className="w-full text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 leading-snug">
              목사 어쩌다<br />사장이 되다
            </h3>
            <p className="text-accent font-sans text-sm font-medium mb-1">
              교회 밖도 하나님 나라였습니다
            </p>
            <p className="text-muted-foreground font-sans text-xs uppercase tracking-widest mb-6">
              더행복한스토리 출판
            </p>
            <p className="text-muted-foreground font-sans text-sm mb-4">박민기 지음 · 더행복한스토리 · 182쪽 · 14,900원</p>
            <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
              부교역자 사역을 그만두고 생계를 책임지기 위해 대리운전, 출장 수리 기사, 무인 아이스크림 가게와 간식 편의점 사장 등 다양한 사회 경험을 하면서 — 치열하고 평범한 일상 속에서 경험하는 하나님 나라를 소개합니다. 개척교회 목회 현장에 있거나, 교회 밖의 삶을 치열하게 살아내는 성도들에게 위로를 전하는 책입니다.
            </p>
            <blockquote className="border-l-4 border-accent pl-4 mb-8 text-left">
              <p className="text-foreground/70 font-serif text-base italic leading-relaxed">
                "일상의 자리도 분명히 하나님 나라였습니다."
              </p>
            </blockquote>
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://bookk.co.kr/bookStore/69317bd788325995645ae027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                도서 구매하기
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=0aZo-ASnHRc&t=4s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent/40 text-accent font-sans font-medium px-6 py-3 rounded-full transition-all duration-300 hover:bg-accent/10"
              >
                <Youtube className="w-4 h-4" />
                도서 소개 영상 보기
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
