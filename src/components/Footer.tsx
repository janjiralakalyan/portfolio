import { PORTFOLIO_DATA } from "@/constants/data";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#0D0D1D]">
       <div className="section-container flex flex-col md:flex-row justify-between items-center gap-10 opacity-50">
          <p className="text-sm font-medium tracking-widest uppercase">
            Designed by Figma Community
          </p>
          <p className="text-sm font-medium tracking-widest uppercase">
            Replicated with ❤️ by Antigravity
          </p>
          <p className="text-sm font-medium tracking-widest uppercase">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
          </p>
       </div>
    </footer>
  );
}
