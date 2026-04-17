import { motion } from "motion/react";
import { Facebook, Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Zalo",
      href: "https://zalo.me/0972271556", 
      color: "bg-[#0068ff]", // Zalo blue
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://www.facebook.com/KinhdichThienMinh",
      color: "bg-[#1877f2]", // Facebook blue
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Gọi điện",
      href: "tel:0972271556",
      color: "bg-trad-brown", // Theme brown for phone
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {contacts.map((contact, index) => (
        <motion.a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white ${contact.color} hover:brightness-110 shadow-trad-brown/20 transition-all`}
          title={contact.label}
        >
          {contact.icon}
        </motion.a>
      ))}
    </div>
  );
}
