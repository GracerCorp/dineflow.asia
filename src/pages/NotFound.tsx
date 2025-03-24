
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="text-gserve-purple text-9xl font-bold mb-4 animate-pulse-soft">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gserve-dark-gray mb-6">ไม่พบหน้าที่คุณค้นหา</h1>
          <p className="text-gray-600 mb-8">ขออภัย เราไม่พบหน้าที่คุณต้องการ โปรดตรวจสอบ URL หรือกลับไปยังหน้าหลัก</p>
          <Button 
            asChild
            className="px-6 py-3 bg-gserve-brown hover:bg-gserve-light-brown text-white font-medium rounded-lg transition-all duration-300 btn-hover-effect"
          >
            <a href="/">กลับไปหน้าหลัก</a>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
