import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Info, CreditCard } from "lucide-react";

export interface ServiceDetail {
  id: string;
  title: string;
  form: string;
  description: string;
  benefits: string[];
  price: string;
  examples?: string[];
}

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose, onContactClick }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-trad-brown/40 backdrop-blur-sm z-[250]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-full max-w-2xl h-fit max-h-[90vh] bg-trad-ivory rounded-[2.5rem] shadow-2xl z-[251] overflow-hidden border border-trad-gold/20 flex flex-col"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-start sticky top-0 bg-trad-ivory z-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-trad-brown mb-2">{service.title}</h2>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-trad-gold/10 rounded-full text-trad-gold text-xs font-bold uppercase tracking-wider">
                  {service.form}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-trad-beige hover:bg-trad-gold/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 pt-0 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-trad-brown-light">
                    <Info className="w-5 h-5" />
                    <h3 className="font-bold uppercase tracking-wide text-sm">Mô tả & Khi nào nên chọn</h3>
                  </div>
                  <p className="text-trad-brown/80 leading-relaxed bg-white/50 p-6 rounded-2xl border border-trad-brown/5">
                    {service.description}
                  </p>
                </div>

                {/* Examples */}
                {service.examples && service.examples.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-trad-brown/60 italic px-2">Ví dụ:</h4>
                    <ul className="space-y-2 px-2">
                      {service.examples.map((ex, idx) => (
                        <li key={idx} className="text-trad-brown/70 border-l-2 border-trad-gold/30 pl-4 py-1 italic">
                          "{ex}"
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Benefits */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-trad-brown-light">
                    <CheckCircle2 className="w-5 h-5" />
                    <h3 className="font-bold uppercase tracking-wide text-sm">Quyền lợi khách hàng</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-4 bg-white/30 rounded-xl border border-trad-brown/5">
                        <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-trad-gold" />
                        <span className="text-sm text-trad-brown/80 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="sticky bottom-0 bg-trad-ivory pt-6 pb-2 mt-4 border-t border-trad-gold/10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-trad-brown text-trad-ivory p-8 rounded-[2rem]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-trad-ivory/10">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest opacity-60">Chi phí dịch vụ</p>
                        <p className="text-2xl font-bold text-trad-gold">{service.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        onClose();
                        onContactClick();
                      }}
                      className="w-full md:w-auto bg-trad-ivory text-trad-brown px-10 py-4 rounded-full font-bold hover:bg-trad-gold hover:text-trad-ivory transition-all active:scale-95"
                    >
                      Đặt Lịch Xem Quẻ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
