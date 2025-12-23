import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar,
  Users,
  Ticket,
  Building,
  Heart,
  HelpCircle,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      {/**
       * Footer component for DESKTOP DEVICES
       */}
      <footer
        id="footer"
        className="bg-gray-900 text-white z-[9999] relative py-16 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div id="footer-brand">
              <h3 className="text-2xl font-bold mb-4">
                <Link to={'/'} className='w-full'>
                  <img
                    src="https://res.cloudinary.com/dbhpul04t/image/upload/v1766001844/velte_ijulb7ijulb7ijul-removebg-preview_h3d6xw.png"
                    alt="Velte"
                    className="w-20"
                  />
                </Link>
              </h3>
              <p className="text-gray-400 mb-6">
                Your ultimate event platform for discovering, creating, and
                managing amazing events.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Facebook size={20} />
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Twitter size={20} />
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Instagram size={20} />
                </span>
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Linkedin size={20} />
                </span>
              </div>
            </div>

            {/* Improved Product Column */}
            <div id="footer-product">
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Events Discovery
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Vendor Booking
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Event Creation
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Ticket Management
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Venue Booking
                  </span>
                </li>
              </ul>
            </div>

            <div id="footer-company">
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link to={'/about'} className="w-full">
                      About Us
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link to={'/contact-us'} className="w-full">
                      Contact
                    </Link>
                  </span>
                </li>
                {/* <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    Blog
                  </span>
                </li> */}
              </ul>
            </div>

            <div id="footer-support">
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link to={'/privacy-policy'} className='w-full'>
                      Privacy Policy
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link to={'/terms'} className="w-full">
                      Terms of Service
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <Link to={'/community-guidelines'} className='w-full'>
                      Community Guidelines
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Velte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/**
       * Footer component for MOBILE DEVICES
       */}
      <footer id="footer" className={`bg-gray-900 text-white py-8 md:hidden`}>
        <div className="container mx-auto px-5">
          {/* Brand Section */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-3">Velte</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-md mx-auto">
              Your ultimate event platform for discovering, creating, and
              managing amazing events.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Facebook size={20} />
              </span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Twitter size={20} />
              </span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Instagram size={20} />
              </span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Linkedin size={20} />
              </span>
            </div>
          </div>

          {/* Mobile Accordion-style Links */}
          <div className="grid grid-cols-2 gap-6 mx-auto mb-8">
            {/* Product Links with Icons */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-300 text-sm uppercase tracking-wide">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Events
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Vendors
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Tickets
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Venues
                  </span>
                </li>
              </ul>
            </div>

            {/* Company & Support Links with Icons */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-300 text-sm uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    About
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Contact
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Privacy
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-gray-400 hover:text-white transition-colors cursor-pointer py-1">
                    Terms
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Mobile Links with Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <span className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <HelpCircle size={14} />
              <span>Help Center</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Briefcase size={14} />
              <span>Careers</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <BookOpen size={14} />
              <span>Blog</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <HelpCircle size={14} />
              <span>FAQ</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Velte. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
