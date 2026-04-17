import { motion } from "motion/react";
import { Sparkles, ShieldCheck, ScrollText } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Sparkles className="w-5 h-5" />, text: "Thầy Thiên Minh có hơn 6 năm nghiên cứu và thực hành Kinh Dịch & Dịch Lý." },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Đã luận quẻ cho hàng trăm nghìn khách hàng trên khắp Việt Nam và cộng đồng kiều bào." },
    { icon: <ScrollText className="w-5 h-5" />, text: "Dựa Cam kết luận quẻ đúng trọng tâm, sáng rõ, minh bạch, đúng theo từng mệnh số kinh điển nguyên bản" },
  ];

  return (
    <section id="about" className="section-padding bg-trad-ivory">
      <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src="/thay-thien-minh.jpg" 
              alt="Thầy Thiên Minh" 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-trad-gold/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Thầy Thiên Minh là ai?
          </h2>
          <p className="text-lg text-trad-brown/70 mb-10 leading-relaxed">
            Thầy Thiên Minh có hơn 6 năm nghiên cứu và ứng dụng Kinh Dịch trong đời sống thực tế, tập trung vào việc giúp người khác hiểu vận, chọn đúng thời, đi đúng hướng. 
            Thầy không xem quẻ theo kiểu chung chung mà luận theo từng trường hợp cụ thể, đưa ra góc nhìn rõ ràng để người xem chủ động quyết định. 
            Với định hướng Thuận thiên cải vận, thầy giúp người hữu duyên nhìn rõ bản mệnh, điều chỉnh lựa chọn và hạn chế những bước đi sai trong cuộc sống. 
            
          </p>

          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-trad-beige flex items-center justify-center text-trad-gold">
                  {item.icon}
                </div>
                <span className="font-medium text-trad-brown/80">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
