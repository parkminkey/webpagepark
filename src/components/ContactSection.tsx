import { Mail } from "lucide-react";

const ThreadsIcon = () => (
  <svg viewBox="0 0 192 192" className="w-5 h-5" fill="currentColor">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.23c8.249.053 14.474 2.452 18.502 7.129 2.932 3.405 4.893 8.107 5.864 14.055-7.314-1.244-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.631-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.643 32.788 28.08 19.882 44.485 13.224 67.315 13.001 96v.065c.223 28.685 6.88 51.515 19.787 67.92 14.504 18.437 36.094 27.885 64.174 28.08h.113c24.708-.173 42.099-6.642 56.401-20.961 18.963-18.924 18.435-42.692 12.186-57.251-4.547-10.597-13.176-19.216-24.125-25.865Zm-41.37 55.171c-10.527.577-21.469-4.135-27.256-11.863-3.052-4.09-4.82-9.346-4.564-14.975.516-11.22 9.715-17.698 26.535-18.661 2.328-.134 4.613-.2 6.858-.2 6.065 0 11.768.552 17.012 1.584-1.972 24.705-9.049 42.674-18.585 43.115Z"/>
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-3">Connect</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
          함께 연결되기
        </h2>
        <p className="text-primary-foreground/70 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          사역에 대해 궁금하시거나, 함께 나누고 싶은 이야기가 있으시다면
          언제든지 연락해 주세요.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.threads.com/@syoojyoopapamoksa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105"
          >
            <ThreadsIcon />
            스레드 팔로우
          </a>
          <a
            href="mailto:syoojyoopapa@gmail.com"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            이메일 보내기
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
