
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const Index = () => {
  // Add refs for elements that will be animated on scroll
  const heroImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    const elements = [
      heroImageRef.current,
      featuresRef.current,
      logosRef.current
    ];

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Mock data for features
  const features = [
    {
      title: "ระบบ POS ใช้งานง่าย",
      description: "ออกแบบให้ใช้งานง่าย ไม่ซับซ้อน พร้อมคู่มือและวิดีโอสอนการใช้งาน",
      isOrange: true
    },
    {
      title: "จัดการสต๊อกเรียลไทม์",
      description: "ตรวจสอบและจัดการสต๊อกสินค้าแบบเรียลไทม์ ป้องกันของหมด",
      isOrange: false
    },
    {
      title: "รองรับการขยายสาขา",
      description: "รองรับการขยายธุรกิจไปยังหลายสาขา พร้อมระบบจัดการแบบรวมศูนย์",
      isOrange: false
    },
    {
      title: "รายงานยอดขายละเอียด",
      description: "วิเคราะห์ยอดขาย สินค้าขายดี และพฤติกรรมลูกค้าด้วยรายงานแบบละเอียด",
      isOrange: false
    },
    {
      title: "รองรับมือถือและแท็บเล็ต",
      description: "ใช้งานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ทำงานได้ทุกที่",
      isOrange: false
    },
    {
      title: "การชำระเงินหลากหลาย",
      description: "รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด บัตรเครดิต และ QR Payment",
      isOrange: false
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      quote: "StoreHub ช่วยให้ร้านของเราจัดการสต๊อกสินค้าและยอดขายได้อย่างมีประสิทธิภาพมากขึ้น ประหยัดเวลาและลดข้อผิดพลาด",
      author: "คุณสมศรี",
      position: "เจ้าของร้าน",
      companyName: "ร้านกาแฟบ้านสุข",
      imageSrc: "https://images.unsplash.com/photo-1512901707305-326e571c3b3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      quote: "ใช้งานง่าย รวดเร็ว พนักงานใหม่เรียนรู้ได้ไวมาก การสรุปรายงานยอดขายช่วยให้เราวางแผนธุรกิจได้ดีขึ้น",
      author: "คุณรัตนา",
      position: "ผู้จัดการ",
      companyName: "ร้านอาหารรสเด็ด",
      imageSrc: "https://images.unsplash.com/photo-1546656592-7df029c5e639?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      quote: "ขยายสาขาจาก 1 เป็น 3 สาขาในเวลาไม่ถึงปี ด้วยความช่วยเหลือจากระบบจัดการของ StoreHub ที่ควบคุมทุกอย่างจากที่เดียว",
      author: "คุณนิติพล",
      position: "CEO",
      companyName: "ฟิตเนสอินไซด์",
      imageSrc: "https://images.unsplash.com/photo-1589378835398-3b8636515e2a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  // Mock partner logos
  const partnerLogos = [
    "https://via.placeholder.com/150x70?text=Partner+1",
    "https://via.placeholder.com/150x70?text=Partner+2",
    "https://via.placeholder.com/150x70?text=Partner+3",
    "https://via.placeholder.com/150x70?text=Partner+4",
    "https://via.placeholder.com/150x70?text=Partner+5",
    "https://via.placeholder.com/150x70?text=Partner+6",
    "https://via.placeholder.com/150x70?text=Partner+7",
    "https://via.placeholder.com/150x70?text=Partner+8",
    "https://via.placeholder.com/150x70?text=Partner+9",
    "https://via.placeholder.com/150x70?text=Partner+10",
    "https://via.placeholder.com/150x70?text=Partner+11",
    "https://via.placeholder.com/150x70?text=Partner+12",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:py-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <LeadForm />
            </div>
            
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-storehub-dark-gray">
                  <span className="text-storehub-orange block mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>StoreHub POS</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.4s' }}>ระบบ POS จัดการร้านค้า</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.6s' }}>ครบวงจรในที่เดียว</span>
                </h1>
                
                <div 
                  ref={heroImageRef} 
                  className="mt-8 img-reveal shine-effect"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                    alt="StoreHub POS System" 
                    className="mx-auto lg:ml-0 rounded-lg shadow-xl transition-scale" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block bg-storehub-orange text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Feature ที่โดดเด่น</span>
            <h2 className="text-3xl md:text-4xl font-bold text-storehub-dark-gray mb-4">เมื่อใช้งาน StoreHub POS</h2>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 img-reveal"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                orangeBackground={feature.isOrange}
                className="h-full"
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="px-8 py-6 bg-storehub-orange hover:bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 btn-hover-effect">
              ดูฟีเจอร์ทั้งหมด
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-storehub-dark-gray mb-4">หน้าตา StoreHub เป็นอย่างไร?</h2>
              <p className="text-gray-600 mb-8">ชมการทำงานของโปรแกรม POS ที่ใช้งานง่ายและมีประสิทธิภาพ</p>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl img-reveal revealed">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80" 
                  alt="StoreHub POS Demo" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-storehub-orange rounded-full flex items-center justify-center text-white transition-transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-storehub-dark-gray mb-6 text-center">ทำไมต้องเลือก StoreHub POS?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-storehub-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">เริ่มต้นใช้งานง่าย ไม่ยุ่งยาก</h4>
                  <p className="text-gray-600 text-sm">ติดตั้งและเริ่มใช้งานได้ภายใน 24 ชั่วโมง ไม่ต้องมีความรู้ด้านเทคนิค</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-storehub-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ทีมซัพพอร์ตตลอด 24 ชั่วโมง</h4>
                  <p className="text-gray-600 text-sm">ทีมงานพร้อมให้ความช่วยเหลือตลอดเวลา ผ่านช่องทางที่หลากหลาย</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-storehub-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ระบบคลาวด์ปลอดภัย 100%</h4>
                  <p className="text-gray-600 text-sm">ข้อมูลถูกเก็บบนคลาวด์ที่ปลอดภัย ไม่ต้องกังวลเรื่องข้อมูลสูญหาย</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-storehub-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">อัปเดตฟีเจอร์ใหม่สม่ำเสมอ</h4>
                  <p className="text-gray-600 text-sm">รับฟีเจอร์ใหม่ๆ โดยอัตโนมัติ ไม่ต้องเสียค่าอัปเกรดเพิ่ม</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-storehub-dark-gray mb-4">ลูกค้าพูดถึงเราอย่างไร</h2>
            <p className="text-gray-600">ประสบการณ์จริงจากผู้ประกอบการที่ใช้ StoreHub POS</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                companyName={testimonial.companyName}
                imageSrc={testimonial.imageSrc}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-storehub-dark-gray mb-4">ระบบ POS StoreHub</h2>
            <h3 className="text-2xl font-semibold text-storehub-orange mb-4">รองรับธุรกิจทุกประเภท</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="ร้านอาหาร" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">ร้านอาหาร</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="ร้านค้าปลีก" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">ร้านค้าปลีก</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="คาเฟ่" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">คาเฟ่</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="บาร์" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">บาร์</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2215&q=80" 
                alt="สปา" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">สปา</h4>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="ฟิตเนส" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-storehub-dark-gray">ฟิตเนส</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-storehub-dark-gray mb-4">แบรนด์ชั้นนำที่ไว้วางใจเลือกใช้บริการ StoreHub POS</h2>
          </div>
          
          <div 
            ref={logosRef}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center img-reveal"
          >
            {partnerLogos.map((logo, index) => (
              <div key={index} className="max-w-[150px] grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-storehub-dark-gray mb-4">คำถามที่พบบ่อย</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-storehub-dark-gray mb-2 flex items-start">
                <span className="text-storehub-orange mr-2">?</span>
                <span>ทำไมต้องใช้ StoreHub POS?</span>
              </h3>
              <p className="text-gray-600 ml-6">StoreHub POS ช่วยให้คุณจัดการร้านค้าได้อย่างมีประสิทธิภาพ ลดเวลาในการทำงาน เพิ่มยอดขาย ด้วยระบบที่ใช้งานง่ายและมีฟีเจอร์ครบครัน</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-storehub-dark-gray mb-2 flex items-start">
                <span className="text-storehub-orange mr-2">?</span>
                <span>ต้องมีความรู้ด้านเทคนิคหรือไม่?</span>
              </h3>
              <p className="text-gray-600 ml-6">ไม่จำเป็น! StoreHub ออกแบบมาให้ใช้งานง่าย มีทีมงานช่วยติดตั้งและสอนการใช้งาน พร้อมคู่มือและวิดีโอสอนที่เข้าใจง่าย</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-storehub-dark-gray mb-2 flex items-start">
                <span className="text-storehub-orange mr-2">?</span>
                <span>ข้อมูลของฉันปลอดภัยหรือไม่?</span>
              </h3>
              <p className="text-gray-600 ml-6">StoreHub ใช้ระบบคลาวด์ที่มีความปลอดภัยสูง ข้อมูลทั้งหมดถูกเข้ารหัสและสำรองข้อมูลอัตโนมัติ ป้องกันการสูญหายหรือเข้าถึงโดยไม่ได้รับอนุญาต</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-storehub-dark-gray mb-2 flex items-start">
                <span className="text-storehub-orange mr-2">?</span>
                <span>มีค่าใช้จ่ายซ่อนเร้นหรือไม่?</span>
              </h3>
              <p className="text-gray-600 ml-6">ไม่มี! StoreHub มีรูปแบบการจ่ายเงินที่ชัดเจน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง ฟีเจอร์ใหม่ๆ จะถูกอัปเดตให้โดยอัตโนมัติโดยไม่มีค่าใช้จ่ายเพิ่มเติม</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="px-8 py-6 bg-storehub-blue hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 btn-hover-effect">
              ติดต่อเจ้าหน้าที่
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-storehub-orange">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">พร้อมเริ่มต้นใช้งาน StoreHub POS?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">ติดต่อเราเพื่อรับคำปรึกษาฟรี และทดลองใช้งานฟรี 14 วัน</p>
          
          <Button className="px-8 py-6 bg-white hover:bg-gray-100 text-storehub-orange font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 btn-hover-effect">
            ทดลองใช้ฟรี
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
