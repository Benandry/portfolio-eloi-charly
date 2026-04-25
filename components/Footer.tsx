import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { navLinks } from "@/app/constant/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Gradient line at top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About / Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              R. Eloi Charly
            </h3>
            <p className="text-gray-400 text-sm">
              Développeur Full Stack passionné par la création d&apos;applications web modernes et performantes.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:eloi.charly@example.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Liens Rapides</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-cyan-500">▹</span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-cyan-500" />
                <span>Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaEnvelope className="text-cyan-500" />
                <a href="mailto:eloi.charly@example.com" className="hover:text-cyan-400 transition-colors">
                  eloi.charly@example.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FaPhone className="text-cyan-500" />
                <a href="tel:+261340000000" className="hover:text-cyan-400 transition-colors">
                  +261 34 00 000 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} R. Eloi Charly. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}