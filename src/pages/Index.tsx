import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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
      quote: "Gserve ช่วยให้ร้านของเราจัดการสต๊อกสินค้าและยอดขายได้อย่างมีประสิทธิภาพมากขึ้น ประหยัดเวลาและลดข้อผิดพลาด",
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
      quote: "ขยายสาขาจาก 1 เป็น 3 สาขาในเวลาไม่ถึงปี ด้วยความช่วยเหลือจากระบบจัดการของ Gserve ที่ควบคุมทุกอย่างจากที่เดียว",
      author: "คุณนิติพล",
      position: "CEO",
      companyName: "ฟิตเนสอินไซด์",
      imageSrc: "https://images.unsplash.com/photo-1589378835398-3b8636515e2a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  // Mock partner logos
  const partnerLogos = [
    "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=150&h=70&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=150&h=70&fit=crop&q=80",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:py-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 text-center lg:text-left z-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dineflow-dark-gray">
                  <span className="text-dineflow-brown block mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>DineFlow POS</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.4s' }}>ระบบ POS จัดการร้านค้า</span>
                  <span className="block animate-fade-up" style={{ animationDelay: '0.6s' }}>ครบวงจรในที่เดียว</span>
                </h1>
                
                <p className="text-lg text-gray-600 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                  ยกระดับธุรกิจของคุณด้วยระบบ POS ที่ใช้งานง่าย รวดเร็ว และเชื่อถือได้
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <Button className="px-6 py-6 bg-dineflow-brown hover:bg-dineflow-light-brown text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: '1s' }}>
                    ทดลองใช้ฟรี 14 วัน <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="px-6 py-6 bg-white hover:bg-gray-50 text-dineflow-dark-gray font-semibold text-lg rounded-lg shadow-sm transition-all duration-300 animate-fade-up" style={{ animationDelay: '1.2s' }}>
                    ดูวิธีการใช้งาน
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-2 lg:relative">
              <div 
                ref={heroImageRef} 
                className="mt-8 img-reveal shine-effect relative z-10 rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="DineFlow POS System Interface" 
                  className="w-full h-auto transition-scale" 
                />
              </div>
              
              {/* Floating Form */}
              <div className="lg:absolute lg:-bottom-12 lg:-right-8 mt-8 lg:mt-0 z-20 transform transition-transform hover:-translate-y-2 duration-300">
                <LeadForm />
              </div>
              
              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-dineflow-brown/10 rounded-full blur-2xl"></div>
              <div className="hidden lg:block absolute -bottom-10 -right-10 w-60 h-60 bg-dineflow-purple/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block bg-gradient-to-r from-dineflow-brown to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Feature ที่โดดเด่น</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">เมื่อใช้งาน DineFlow POS</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ระบบ POS ที่ออกแบบมาเพื่อธุรกิจของคุณ ช่วยให้การทำงานง่ายขึ้น</p>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 img-reveal max-w-6xl mx-auto"
          >
            <FeatureCard
              title="ระบบ POS ใช้งานง่าย"
              description="ออกแบบให้ใช้งานง่าย ไม่ซับซ้อน พร้อมคู่มือและวิดีโอสอนการใช้งาน"
              orangeBackground={true}
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            />
            
            <FeatureCard
              title="จัดการสต๊อกเรียลไทม์"
              description="ตรวจสอบและจัดการสต๊อกสินค้าแบบเรียลไทม์ ป้องกันของหมด"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              }
            />
            
            <FeatureCard
              title="รองรับการขยายสาขา"
              description="รองรับการขยายธุรกิจไปยังหลายสาขา พร้อมระบบจัดการแบบรวมศูนย์"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              }
            />
            
            <FeatureCard
              title="รายงานยอดขายละเอียด"
              description="วิเคราะห์ยอดขาย สินค้าขายดี และพฤติกรรมลูกค้าด้วยรายงานแบบละเอียด"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              }
            />
            
            <FeatureCard
              title="รองรับมือถือและแท็บเล็ต"
              description="ใช้งานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ทำงานได้ทุกที่"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              }
            />
            
            <FeatureCard
              title="การชำระเงินหลากหลาย"
              description="รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด บัตรเครดิต และ QR Payment"
              icon={
                <svg className="w-6 h-6 text-dineflow-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              }
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="px-8 py-6 bg-gradient-to-r from-dineflow-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300">
              ดูฟีเจอร์ทั้งหมด
            </Button>
          </div>
        </div>
      </section>
      
      {/* Product Demo Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">ชมการทำงาน</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">หน้าตา DineFlow POS เป็นอย่างไร?</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">ระบบ POS ที่ออกแบบเพื่อความง่ายในการใช้งาน ครบครันด้วยฟีเจอร์ที่ตอบโจทย์ธุรกิจทุกประเภท</p>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl img-reveal revealed group">
                <img 
                  src="https://images.unsplash.com/photo-1609604440809-851c6bf958a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="DineFlow POS UI Demo" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-20 h-20 bg-gradient-to-r from-dineflow-brown to-amber-500 rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-2">รองรับหน้าจอทุกขนาด</h3>
              <p className="text-gray-600 text-sm">ทำงานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ไม่ว่าจะอยู่ที่ไหนก็ใช้งานได้</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-2">ระบบความปลอดภัยสูง</h3>
              <p className="text-gray-600 text-sm">ปกป้องข้อมูลของคุณด้วยระบบความปลอดภัยระดับสูง รองรับการกำหนดสิทธิ์ผู้ใช้หลายระดับ</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dineflow-dark-gray mb-2">ทำงานได้แม้เน็ตล่ม</h3>
              <p className="text-gray-600 text-sm">แม้อินเทอร์เน็ตล่ม ก็ยังสามารถขายสินค้าและซิงค์ข้อมูลเมื่อกลับมาออนไลน์</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mt-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-dineflow-dark-gray mb-6 text-center">ทำไมต้องเลือก DineFlow POS?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-dineflow-brown flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">เริ่มต้นใช้งานง่าย ไม่ยุ่งยาก</h4>
                  <p className="text-gray-600 text-sm">ติดตั้งและเริ่มใช้งานได้ภายใน 24 ชั่วโมง ไม่ต้องมีความรู้ด้านเทคนิค</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-dineflow-brown flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ทีมซัพพอร์ตตลอด 24 ชั่วโมง</h4>
                  <p className="text-gray-600 text-sm">ทีมงานพร้อมให้ความช่วยเหลือตลอดเวลา ผ่านช่องทางที่หลากหลาย</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-dineflow-brown flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">ระบบคลาวด์ปลอดภัย 100%</h4>
                  <p className="text-gray-600 text-sm">ข้อมูลถูกเก็บบนคลาวด์ที่ปลอดภัย ไม่ต้องกังวลเรื่องข้อมูลสูญหาย</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-dineflow-brown flex-shrink-0 mt-1" />
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
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">รีวิวจากลูกค้า</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">ลูกค้าพูดถึงเราอย่างไร</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ประสบการณ์จริงจากผู้ประกอบการที่ใช้ DineFlow POS</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div className="flex flex-nowrap testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      companyName={testimonial.companyName}
                      imageSrc={testimonial.imageSrc}
                      className="h-full transform transition-all duration-300 hover:-translate-y-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 rounded-full bg-dineflow-brown"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm mb-8">ธุรกิจชั้นนำที่ไว้วางใจเรา</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <img 
                    src={`https://images.unsplash.com/photo-${[
                      "1560179707-f14e90ef3623",
                      "1541746972996-4e0b0f43e02a",
                      "1542744173-8e7e53415bb0",
                      "1516387938699-a93567ec168e",
                      "1606857521015-7f9fcf423740"
                    ][i-1]}?w=120&h=60&fit=crop&q=80`} 
                    alt={`Client Logo ${i}`}
                    className="h-12 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">สำหรับทุกธุรกิจ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">ระบบ POS DineFlow</h2>
            <h3 className="text-2xl font-semibold text-dineflow-orange mb-4">รองรับธุรกิจทุกประเภท</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">ร้านอาหาร</h4>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">ร้านค้าปลีก</h4>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">คาเฟ่</h4>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">บาร์</h4>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">สปา</h4>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V12a2 2 0 10-4 0v2.5M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"></path>
                </svg>
              </div>
              <h4 className="font-semibold text-dineflow-dark-gray">ฟิตเนส</h4>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium rounded-lg shadow-md transition-all duration-300">
              ดูธุรกิจทั้งหมดที่รองรับ
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-dineflow-dark-gray mb-4">แบรนด์ชั้นนำที่ไว้วางใจเลือกใช้บริการ DineFlow POS</h2>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-dineflow-brown to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">คำถามที่พบบ่อย</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dineflow-dark-gray mb-4">คำถามที่พบบ่อย</h2>
          </div>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-1');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>ทำไมต้องใช้ DineFlow POS?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-1" className="px-6 pb-6 hidden">
                <p className="text-gray-600">DineFlow POS ช่วยให้คุณจัดการร้านค้าได้อย่างมีประสิทธิภาพ ลดเวลาในการทำงาน เพิ่มยอดขาย ด้วยระบบที่ใช้งานง่ายและมีฟีเจอร์ครบครัน</p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-2');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>ต้องมีความรู้ด้านเทคนิคหรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-2" className="px-6 pb-6 hidden">
                <p className="text-gray-600">ไม่จำเป็น! DineFlow ออกแบบมาให้ใช้งานง่าย มีทีมงานช่วยติดตั้งและสอนการใช้งาน พร้อมคู่มือและวิดีโอสอนที่เข้าใจง่าย</p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-3');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>ข้อมูลของฉันปลอดภัยหรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-3" className="px-6 pb-6 hidden">
                <p className="text-gray-600">DineFlow ใช้ระบบคลาวด์ที่มีความปลอดภัยสูง ข้อมูลทั้งหมดถูกเข้ารหัสและสำรองข้อมูลอัตโนมัติ ป้องกันการสูญหายหรือเข้าถึงโดยไม่ได้รับอนุญาต</p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => {
                  const el = document.getElementById('faq-4');
                  if (el) {
                    el.classList.toggle('hidden');
                  }
                }}
              >
                <h3 className="text-lg font-semibold text-dineflow-dark-gray flex items-center">
                  <span className="text-dineflow-brown mr-3">Q:</span>
                  <span>มีค่าใช้จ่ายซ่อนเร้นหรือไม่?</span>
                </h3>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div id="faq-4" className="px-6 pb-6 hidden">
                <p className="text-gray-600">ไม่มี! DineFlow มีรูปแบบการจ่ายเงินที่ชัดเจน โปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง ฟีเจอร์ใหม่ๆ จะถูกอัปเดตให้โดยอัตโนมัติโดยไม่มีค่าใช้จ่ายเพิ่มเติม</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-md transition-all duration-300">
              ติดต่อเจ้าหน้าที่
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-dineflow-brown to-amber-500">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">พร้อมเริ่มต้นใช้งาน DineFlow POS หรือยัง?</h2>
            <p className="text-white text-lg mb-8 opacity-90">ติดต่อเราเพื่อรับคำปรึกษาฟรี และทดลองใช้งานฟรี 14 วัน</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 bg-white hover:bg-gray-100 text-dineflow-brown font-semibold text-lg rounded-lg shadow-lg transition-all duration-300">
                ทดลองใช้ฟรี 14 วัน
              </Button>
              <Button variant="outline" className="px-8 py-6 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-300">
                ดูราคาแพ็คเกจ
              </Button>
            </div>
            
            <div className="text-center mt-8 text-white/80">
              <p>Powered by Gracer Company Limited</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sticky CTA Button - visible on scroll */}
      <div className="fixed bottom-6 right-6 z-50 transition-transform duration-300 transform translate-y-32 sticky-cta">
        <Button className="px-6 py-4 bg-gradient-to-r from-dineflow-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-full shadow-lg flex items-center gap-2">
          <span>ทดลองใช้ฟรี</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Button>
      </div>
      
      <Footer />
      
      {/* Add Javascript to handle the sticky button scroll behavior */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const stickyCta = document.querySelector('.sticky-cta');
            let scrolled = false;
            
            window.addEventListener('scroll', function() {
              if (window.scrollY > 600 && !scrolled) {
                stickyCta.classList.remove('translate-y-32');
                stickyCta.classList.add('translate-y-0');
                scrolled = true;
              } else if (window.scrollY <= 600 && scrolled) {
                stickyCta.classList.remove('translate-y-0');
                stickyCta.classList.add('translate-y-32');
                scrolled = false;
              }
            });
          });
        `
      }} />
    </div>
  );
};

export default Index;
