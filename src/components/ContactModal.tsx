import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle, Facebook, Phone, Video } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Zalo: 0972 271 556",
      href: "https://zalo.me/0972271556",
      color: "bg-[#0068ff]",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook: Kinh Dịch Thiên Minh",
      href: "https://www.facebook.com/KinhdichThienMinh",
      color: "bg-[#1877f2]",
    },
    {
      icon: <Video className="w-6 h-6" />,
      label: "TikTok: Kinh Dịch Thiên Minh",
      href: "https://www.tiktok.com/@kinhdichthienminh", // Replace with real TikTok if available
      color: "bg-black",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Hotline: 0972 271 556",
      href: "tel:0972271556",
      color: "bg-trad-brown",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-trad-brown/40 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-[90%] md:w-full max-w-md h-fit bg-trad-ivory rounded-2xl md:rounded-[2rem] shadow-2xl z-[201] overflow-hidden border border-trad-gold/20"
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-trad-brown">Liên hệ Thầy Thiên Minh</h2>
                  <p className="text-xs md:text-sm text-trad-brown/60 italic">Thuận Thiên Cải Vận</p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-trad-beige hover:bg-trad-gold/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-trad-brown/5 hover:border-trad-gold/40 hover:shadow-md transition-all group"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg md:rounded-xl text-white ${contact.color} group-hover:scale-110 transition-transform shrink-0`}>
                      <div className="scale-90 md:scale-100">{contact.icon}</div>
                    </div>
                    <span className="font-semibold text-sm md:text-base text-trad-brown/80">{contact.label}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 md:mt-8 text-center">
                <p className="text-[10px] md:text-xs text-trad-brown/40">
                  Thầy Thiên Minh sẽ phản hồi bạn trong thời gian sớm nhất.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
