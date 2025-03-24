
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-gserve-purple font-bold text-2xl mb-4">G<span className="text-gserve-dark-gray">serve</span></div>
            <p className="text-gray-600 text-sm mb-4">แพลตฟอร์มบริหารธุรกิจครบวงจรสำหรับธุรกิจทุกขนาด</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gserve-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gserve-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gserve-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">ผลิตภัณฑ์</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">POS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">ระบบการชำระเงิน</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">ระบบสต๊อกสินค้า</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">โปรแกรมสมาชิก</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">รายงานและการวิเคราะห์</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">เกี่ยวกับเรา</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">เกี่ยวกับบริษัท</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">ติดต่อเรา</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">ร่วมงานกับเรา</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gserve-purple text-sm">ข่าวสารและบล็อก</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">ติดต่อเรา</h3>
            <p className="text-gray-600 text-sm mb-2">โทร: 02-XXX-XXXX</p>
            <p className="text-gray-600 text-sm mb-4">อีเมล: contact@gserve.com</p>
            <p className="text-gray-600 text-sm">
              บริษัท จีเสิร์ฟ (ประเทศไทย) จำกัด<br />
              อาคาร XXX ชั้น XX<br />
              ถนนXXX แขวงXXX เขตXXX<br />
              กรุงเทพฯ 10XXX
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Gserve. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gserve-purple text-sm">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="text-gray-500 hover:text-gserve-purple text-sm">เงื่อนไขการใช้บริการ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
