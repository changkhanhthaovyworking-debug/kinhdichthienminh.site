import { motion } from "motion/react";
import { Target, Calendar, Leaf, Heart, Smartphone, Layers, PlusCircle } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal, { ServiceDetail } from "./ServiceDetailModal";

const services: ServiceDetail[] = [
  {
    id: "vande-1",
    title: "Quẻ xem cụ thể một vấn đề",
    form: "Văn bản",
    description: "Bạn nên chọn xem quẻ này nếu đang muốn đặt câu hỏi cho một tình huống cụ thể, phân vân giữa nhiều lựa chọn hoặc cần ra quyết định quan trọng nhưng chưa nắm rõ toàn cảnh.",
    benefits: [
      "Hướng dẫn gieo quẻ rõ ràng, dễ thực hiện",
      "Luận giải sâu sát, đi thẳng vào câu hỏi quan tâm",
      "Lời khuyên cụ thể giúp cải thiện tình trạng, giảm tổn hại",
      "Hỏi thêm 2-3 câu liên quan để làm rõ luận giải"
    ],
    examples: [
      "Tôi có nên ký hợp đồng với đối tác này vào ngày mai không?",
      "Tôi và người cũ có còn duyên để quay lại bên nhau không?"
    ],
    price: "300.000 VND"
  },
  {
    id: "vande-2",
    title: "Quẻ xem cụ thể hai vấn đề",
    form: "Văn bản",
    description: "Bạn nên chọn xem nếu: Bạn đang muốn đặt câu hỏi cho hai tình huống cụ thể. Bạn phân vân giữa nhiều lựa chọn và cần tìm hướng đi phù hợp. Bạn cần ra quyết định quan trọng nhưng chưa nắm rõ toàn cảnh. Bạn muốn hiểu rõ hơn về tình hình hiện tại trước khi hành động. Tương tự như xem một vấn đề nhưng dành cho những ai đang băn khoăn về hai tình huống khác nhau cùng lúc, giúp tiết kiệm chi phí và có cái nhìn tổng quát hơn.",
    benefits: [
      "Hướng dẫn gieo quẻ chi tiết cho cả hai sự việc",
      "Luận giải độc lập và sâu sắc cho từng vấn đề",
      "Giải pháp tối ưu cho những băn khoăn đôi",
      "Hỏi thêm 2-3 câu mỗi vấn đề để hiểu thấu đáo"
    ],
    examples: [
      "1. Tôi có nên ký hợp đồng với đối tác này vào ngày mai không?",
      "2. Tôi có tiến đến hôn nhân được với người hiện tại không?"
    ],
    price: "500.000 VND"
  },
  {
    id: "vannien",
    title: "Quẻ vận niên (một năm)",
    form: "Văn bản lưu trữ",
    description: "Biết rõ những biến chuyển trong 12 tháng tới (tính từ ngày đặt lịch). Luận giải chi tiết vận khí từng tháng để đón lành - tránh dữ và chuẩn bị cho các bước chuyển quan trọng.",
    benefits: [
      "Bức tranh tổng quan vận mệnh 1 năm tới",
      "Chi tiết Tình duyên, Công danh, Sự nghiệp năm 2026",
      "Soi rõ Gia đạo, Con cái và Sức khỏe nội thân trong năm 2026",
      "Nắm bắt cơ hội & thách thức theo từng tháng",
      "Lời khuyên hóa giải khó khăn, giảm thiểu rủi ro"
    ],
    price: "500.000 VND"
  },
  {
    id: "menhmay",
    title: "Quẻ mệnh tổng quan trọn đời",
    form: "Video & Văn bản lưu trữ",
    description: "Dành cho ai muốn hiểu sâu sắc về bản ngã, nghiệp lực và toàn bộ hành trình cuộc đời từ sự nghiệp, tài lộc đến hôn nhân, gia đạo.",
    benefits: [
      "Luận giải trọn đời chi tiết về Công danh, sự nghiệp, hôn nhân, tình duyên, gia đạo, con cái, tài lộc, sức khỏe, nội thân,...",
      "Biết trước các bước ngoặt quan trọng trong đời",
      "Khám phá định hướng lâu dài và cách cải vận",
      "Video phân tích riêng biệt, chỉ rõ điểm then chốt",
      "Hỏi đáp 2-3 câu liên quan để tháo gỡ thắc mắc bản mệnh"
    ],
    price: "900.000 VND"
  },
  {
    id: "capdoi",
    title: "Quẻ mệnh trọn đời dành cho cặp đôi",
    form: "Video & Văn bản lưu trữ",
    description: "Phân tích sự tương hợp giữa hai người, nắm bắt các giai đoạn thịnh suy trong mối quan hệ và tìm cách hóa giải xung đột để xây dựng nền tảng bền vững.",
    benefits: [
      "Hiểu rõ mệnh chi tiết: Công danh, sự nghiệp, hôn nhân, tình duyên, gia đạo, con cái, tài lộc, sức khỏe, nội thân,... của từng người trong cặp đôi",
      "Luận giải cách hóa giải xung khắc, bồi đắp gắn kết",
      "Biết trước các dấu mốc quan trọng của cuộc sống chung",
      "Gợi ý đặt tên con hợp mệnh (nếu đã là vợ chồng)",
      "Video luận giải riêng sâu sắc cho cả hai người"
    ],
    price: "2.000.000 VND"
  },
  {
    id: "sim",
    title: "Quẻ luận sim phong thủy",
    form: "Văn bản",
    description: "Phân tích SĐT bạn đang dùng có thực sự phù hợp với bản mệnh hay đang cản trở tài lộc, công danh của bạn.",
    benefits: [
      "Phân tích điểm mạnh, điểm yếu của dãy số hiện tại",
      "Lời khuyên sim có nên tiếp tục dùng hay cần thay đổi",
      "Gợi ý các dãy số đẹp hỗ trợ đúng mong cầu (tài lộc, gia đạo...)",
      "Hỗ trợ đúng định hướng phong thủy cá nhân"
    ],
    price: "500.000 VND"
  }
];

interface ServicesProps {
  onContactClick: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "vande-1": return <Target className="w-8 h-8" />;
      case "vande-2": return <PlusCircle className="w-8 h-8" />;
      case "vannien": return <Calendar className="w-8 h-8" />;
      case "menhmay": return <Leaf className="w-8 h-8" />;
      case "capdoi": return <Heart className="w-8 h-8" />;
      case "sim": return <Smartphone className="w-8 h-8" />;
      default: return <Layers className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Chọn Quẻ Phù Hợp Với Bạn</h2>
          <div className="w-16 md:w-24 h-1 bg-trad-gold mx-auto rounded-full opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-trad group flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-trad-beige flex items-center justify-center text-trad-gold mb-4 group-hover:bg-trad-brown group-hover:text-trad-white transition-colors shrink-0">
                {getIcon(service.id)}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 leading-tight">{service.title}</h3>
                <p className="text-sm text-trad-brown/60 mb-6 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-[12px] font-bold uppercase tracking-widest text-trad-gold hover:text-trad-brown transition-colors cursor-pointer"
                >
                  Xem chi tiết →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceDetailModal 
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onContactClick={onContactClick}
      />
    </section>
  );
}
