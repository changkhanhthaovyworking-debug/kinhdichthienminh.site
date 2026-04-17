import { motion } from "motion/react";
import { Quote } from "lucide-react";

const feedbackImages = [
  { url: "./feedback1.jpg", alt: "Phản hồi khách hàng 1" },
  { url: "./fb2.jpg", alt: "Phản hồi khách hàng 2" },
  { url: "./fb3.jpg", alt: "Phản hồi khách hàng 3" },
  { url: "./fb4.jpg", alt: "Phản hồi khách hàng 4" },
  { url: "./fb5.jpg", alt: "Phản hồi khách hàng 5" },
  { url: "./fb6.jpg", alt: "Phản hồi khách hàng 6" },
  { url: "./fb7.jpg", alt: "Phản hồi khách hàng 7" },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-trad-ivory">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Khách Hàng Nói Gì</h2>
          <p className="text-sm md:text-base text-trad-brown/60">Hình ảnh phản hồi thực tế từ những người đã tin tưởng Dịch sư Thiên Minh</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {feedbackImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-trad-brown/5 shadow-sm hover:shadow-xl transition-all duration-500 bg-white p-2"
            >
              <img 
                src={item.url} 
                alt={item.alt}
                className="w-full h-auto rounded-xl object-cover cursor-zoom-in"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-trad-brown/40 text-sm">
          * Thông tin khách hàng được bảo mật và chỉ chia sẻ khi có sự cho phép.
        </div>
      </div>
    </section>
  );
}
