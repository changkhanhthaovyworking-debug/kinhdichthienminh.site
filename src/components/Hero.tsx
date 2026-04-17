import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden py-12 md:py-0">
      <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-left items-center md:items-start order-2 md:order-1"
        >
          <span className="font-serif italic text-trad-gold text-base md:text-lg mb-3 md:mb-4">Thuận Thiên Cải Vận</span>
          <h1 className="text-4xl md:text-[54px] font-bold leading-[1.2] md:leading-[1.15] mb-5 md:mb-6">
            KINH DỊCH 
          </h1>
          <p className="text-base md:text-lg text-trad-brown/70 mb-8 md:mb-10 max-w-[440px] leading-[1.6] md:leading-[1.7]">
           Kinh Dịch giúp con người hiểu đúng thời vận, nhìn rõ bản chất sự việc và đưa ra lựa chọn chính xác hơn trong từng giai đoạn cuộc đời.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center w-full sm:w-auto">
            <button onClick={onContactClick} className="btn-primary w-full sm:w-auto">Chọn Quẻ Xem Ngay</button>
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
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-md aspect-square rounded-full border-2 border-trad-gold/20 p-4 md:p-6 flex items-center justify-center">
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-trad-gold/40 animate-[spin_20s_linear_infinite]" />
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(74,44,23,0.3)]">
              <img 
                src="./logo-lhp.png" 
                alt="Thầy Thiên Minh" 
                className="w-full h-full object-cover hover:scale-210 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-trad-ivory p-4 md:p-6 rounded-2xl shadow-xl border border-trad-gold/20 z-10">
              <div className="text-2xl md:text-4xl font-serif text-trad-gold">☯</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
