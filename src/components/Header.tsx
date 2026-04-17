import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="container-custom w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border border-trad-gold/30 bg-white">
            <img 
              src="/logo-lhp.png" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight">KINH DỊCH THIÊN MINH</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Trang chủ</a>
          <a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Dịch vụ</a>
          <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Giới thiệu</a>
          <button 
            onClick={onContactClick}
            className="text-sm opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          >
            Liên hệ - Đặt quẻ
          </button>
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={onContactClick}
            className="bg-trad-brown text-trad-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-trad-brown-light transition-colors"
          >
            Xem Quẻ Ngay
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-trad-ivory border-b border-trad-brown/5 p-6 flex flex-col gap-4 font-medium"
        >
          <a href="#" onClick={() => setIsOpen(false)}>Trang chủ</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Dịch vụ</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Giới thiệu</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="text-left"
          >
            Liên hệ
          </button>
          <button 
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="btn-primary w-full mt-2"
          >
            Xem Quẻ Ngay
          </button>
        </motion.div>
      )}
    </header>
  );
}
