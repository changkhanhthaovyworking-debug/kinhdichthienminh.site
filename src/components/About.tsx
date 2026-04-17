import { motion } from "motion/react";
import { Sparkles, ShieldCheck, ScrollText } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Sparkles className="w-5 h-5" />, text: "Thầy Thiên Minh có hơn 6 năm nghiên cứu và thực hành Kinh Dịch & Dịch Lý." },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Đã luận quẻ cho hàng trăm nghìn khách hàng trên khắp Việt Nam và cộng đồng Kiều bào." },
    { icon: <ScrollText className="w-5 h-5" />, text: "Cam kết luận quẻ đúng trọng tâm, sáng rõ, minh bạch, đúng theo từng mệnh số" },
  ];

  return (
    <section id="about" className="section-padding bg-trad-ivory">
      <div className="container-custom grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-sm mx-auto md:max-w-none"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src="./thay-thien-minh.jpg" 
              alt="Thầy Thiên Minh" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-trad-gold/10 rounded-full blur-2xl md:blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Thầy Thiên Minh là ai?
          </h2>
          <p className="text-base md:text-lg text-trad-brown/70 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Thầy Thiên Minh có hơn 6 năm nghiên cứu và ứng dụng Kinh Dịch trong đời sống thực tế, tập trung vào việc giúp người khác hiểu vận, chọn đúng thời, đi đúng hướng. 
          </p>

          <div className="space-y-4 md:space-y-6 text-left max-w-md mx-auto md:mx-0">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-3 md:p-0">
                <div className="w-10 h-10 rounded-full bg-trad-beige flex items-center justify-center text-trad-gold shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-trad-brown/80 text-sm md:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
