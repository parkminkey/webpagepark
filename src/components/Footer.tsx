const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-primary border-t border-primary-foreground/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-primary-foreground/50 font-sans text-sm">
          © {new Date().getFullYear()} 박민기. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
