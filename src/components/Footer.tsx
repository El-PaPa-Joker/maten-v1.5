import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-200 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-accent mb-4">اكاديميه متين</h3>
            <p className="text-gray-400 mb-4">
              نحن نؤمن بأن الصحة والقوة حق للجميع، ونسعى لمساعدتك في تحقيق أهدافك
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-accent">الرئيسية</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-accent">من نحن</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-accent">خدماتنا</Link></li>
              <li><Link to="/#packages" className="text-gray-400 hover:text-accent">الباقات</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-accent">الوظائف</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات قانونية</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-accent">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-accent">الشروط والأحكام</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">ساعات العمل</h4>
              <p className="text-gray-400">السبت - الخميس: 9:00 ص - 10:00 م</p>
              <p className="text-gray-400">الجمعة: 2:00 م - 8:00 م</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} اكاديميه متين. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;