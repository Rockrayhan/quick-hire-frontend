
import { Facebook, Linkedin, Instagram, Twitter, Music2 } from "lucide-react";
import Logo from "../common/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-gray-300 py-16 ">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo + About */}
          <div className="col-span-2 space-y-4">
            <Logo />
            <p className="text-gray-400 text-sm">
              Great platform for job seekers passionate about startups. Find
              your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div className="space-y-2">
            <h6 className="font-semibold text-white mb-2">About</h6>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Advice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-2">
            <h6 className="font-semibold text-white mb-2">Resources</h6>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <h6 className="font-semibold text-white mb-2">
              Get Job Notifications
            </h6>
            <p className="text-gray-400 text-sm">
              The latest job news & articles, sent to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 p-3 rounded-md border border-gray-600 bg-[#2a2f3b] placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-3 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2026 QuickHire. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>

            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>

            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>

            <a href="#" className="hover:text-white transition">
              <Music2 className="w-5 h-5" />
            </a>

            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
