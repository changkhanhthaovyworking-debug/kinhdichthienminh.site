import { motion } from "motion/react";

interface CTABannerProps {
  onContactClick: () => void;
}

export default function CTABanner({ onContactClick }: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-trad-brown rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-trad-ivory rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-trad-ivory rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-trad-ivory mb-8 leading-tight">
              Đặt lịch xem quẻ ngay để hiểu rõ vận trình sắp tới của bạn.
            </h2>
            <button 
              onClick={onContactClick}
              className="bg-trad-ivory text-trad-brown px-12 py-5 rounded-full text-xl font-bold hover:bg-trad-gold hover:text-trad-ivory transition-all hover:scale-105 active:scale-95"
            >
              Đặt Lịch Xem Quẻ
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
