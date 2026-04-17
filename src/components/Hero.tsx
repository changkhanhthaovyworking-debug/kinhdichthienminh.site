import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="font-serif italic text-trad-gold text-lg mb-4">Thuận Thiên Cải Vận</span>
          <h1 className="text-5xl md:text-[54px] font-bold leading-[1.15] mb-6">
            KINH DỊCH 
            <br />
            
          </h1>
          <p className="text-lg text-trad-brown/70 mb-10 max-w-[440px] leading-[1.7]">
           Kinh Dịch là nền tảng cốt lõi của hầu hết các hệ thống huyền học phương Đông, từ tử vi, phong thủy đến bát tự.
           Kinh Dịch vận hành theo quy luật biến dịch của tự nhiên Thiên - Địa - Nhân, giúp con người hiểu đúng thời vận, nhìn rõ bản chất sự việc và đưa ra lựa chọn chính xác hơn trong từng giai đoạn cuộc đời.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button onClick={onContactClick} className="btn-primary">Chọn Quẻ Xem Ngay</button>
            <a href="#about" className="btn-secondary group">
              <span>Tìm hiểu thêm</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-full border-2 border-trad-gold/20 p-6 flex items-center justify-center">
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-trad-gold/40 animate-[spin_20s_linear_infinite]" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(74,44,23,0.3)]">
              <img 
                src="/logo-lhp.png" 
                alt="Thầy Thiên Minh" 
                className="w-full h-full object-cover hover:scale-210 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-trad-ivory p-6 rounded-2xl shadow-xl border border-trad-gold/20 z-10">
              <div className="text-4xl font-serif text-trad-gold">☯</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
