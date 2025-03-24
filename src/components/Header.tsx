
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="text-gserve-purple font-bold text-2xl">G<span className="text-gserve-dark-gray">serve</span></div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gserve-purple transition-colors">
              <span>ผลิตภัณฑ์</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">POS</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payments</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inventory</a>
              </div>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-gserve-purple transition-colors">ราคา</a>
          <a href="#" className="text-gray-700 hover:text-gserve-purple transition-colors">ลูกค้าของเรา</a>
          <a href="#" className="text-gray-700 hover:text-gserve-purple transition-colors">บล็อก</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <select 
              className="appearance-none bg-transparent border border-gray-300 rounded-md px-2 py-1 pr-8 cursor-pointer text-sm"
              defaultValue="th"
            >
              <option value="en">EN</option>
              <option value="th">TH</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
          <Button className="bg-gserve-brown hover:bg-gserve-light-brown text-white transition-colors">
            ติดต่อเจ้าหน้าที่
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-4">
            <div className="py-2 border-b border-gray-200">
              <button className="flex items-center justify-between w-full text-left text-gray-700 py-2">
                <span>ผลิตภัณฑ์</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <a href="#" className="block py-2 text-gray-700">ราคา</a>
            <a href="#" className="block py-2 text-gray-700">ลูกค้าของเรา</a>
            <a href="#" className="block py-2 text-gray-700">บล็อก</a>
            
            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">เลือกภาษา:</span>
                <select 
                  className="appearance-none bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm"
                  defaultValue="th"
                >
                  <option value="en">EN</option>
                  <option value="th">TH</option>
                </select>
              </div>
              <Button className="w-full bg-gserve-brown hover:bg-gserve-light-brown text-white">
                ติดต่อเจ้าหน้าที่
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
