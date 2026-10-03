import { Facebook, Instagram, Linkedin } from "lucide-react";

function PinterestIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.174.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.62 0 12.017 0z" />
    </svg>
  );
}

export default function FooterSocials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Facebook */}
      <a
        href="https://www.facebook.com/subhagruhavizagplots"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook - Subhagruha Vizag Plots"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-[#1877F2] hover:text-white hover:scale-110 shadow-sm"
      >
        <Facebook size={16} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/subhagruhavizagplots/?next=%2F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram - Subhagruha Vizag Plots"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:scale-110 shadow-sm"
      >
        <Instagram size={16} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/subhagruha-vizag-b405aa169/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn - Subhagruha Vizag"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-[#0A66C2] hover:text-white hover:scale-110 shadow-sm"
      >
        <Linkedin size={16} />
      </a>

      {/* Pinterest */}
      <a
        href="https://in.pinterest.com/subhagruharealestates/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest - Subhagruha Real Estates"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all duration-200 hover:bg-[#E60023] hover:text-white hover:scale-110 shadow-sm"
      >
        <PinterestIcon className="h-4 w-4 fill-current" />
      </a>
    </div>
  );
}
