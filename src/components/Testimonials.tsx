import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Lời giải quẻ rất sâu sắc và thực tế. Nó giúp tôi có cái nhìn rõ ràng hơn về quyết định kinh doanh sắp tới.",
    author: "Anh Minh",
    role: "Doanh nhân",
  },
  {
    text: "Tôi tìm thấy sự bình yên sau khi nghe tư vấn. Không hề có cảm giác mê tín, mà là một sự thấu hiểu tâm lý tuyệt vời.",
    author: "Chị Lan",
    role: "Giáo viên",
  },
  {
    text: "Thầy tư vấn cực kì có tâm, xem xong lâu lâu hỏi lại thầy vẫn trả lời và giải đáp nhiệt tình, giới thiệu cho nhiều bạn rồi ai cũng thấy đúng.",
    author: "Chị Hoàng",
    role: "Nội trợ",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-trad-ivory">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-trad-brown/60">Những trải nghiệm thực tế từ những người đã tin tưởng chúng tôi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-trad-brown/5 relative"
            >
              <Quote className="w-10 h-10 text-trad-gold/20 absolute top-6 right-6" />
              <p className="text-lg italic text-trad-brown/80 mb-8 leading-relaxed relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-trad-beige flex items-center justify-center font-bold text-trad-brown">
                  {item.author[0]}
                </div>
                <div>
                  <h4 className="font-bold">{item.author}</h4>
                  <p className="text-sm text-trad-brown/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
