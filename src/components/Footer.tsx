import { Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-trad-brown text-trad-ivory py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-xs opacity-90">
          © 2026 KINH DỊCH THIÊN MINH · THUẬN THIÊN CẢI VẬN
        </div>

        <div className="flex items-center gap-8 text-xs opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Facebook</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Zalo</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Email</a>
        </div>
      </div>
    </footer>
  );
}
