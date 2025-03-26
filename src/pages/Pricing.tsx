import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data
  const pricingPlans = [
    {
      name: 'Starter',
      price: isYearly ? '999' : '999',
      yearlyPrice: '11,988',
      description: 'เหมาะสำหรับร้านค้าที่เพิ่งเริ่มต้น',
      features: [
        'ระบบ Cashier',
        'จำกัดจำนวนเมนูอาหาร 100 รายการ',
        'จำกัดจำนวนบิลต่อเดือน 1,500 รายการ',
      ],
      cta: 'ทดลองใช้ฟรี',
      popular: false,
    },
    {
      name: 'Standard',
      price: isYearly ? '2,499' : '2,499',
      yearlyPrice: '29,988',
      description: 'เหมาะสำหรับร้านค้าขนาดกลาง',
      features: [
        'ระบบ Cashier',
        'ระบบครัว',
        'ระบบจัดการโต๊ะ',
        'ระบบพนักงานจัดการออเดอร์',
        'ระบบรายงานพื้นฐาน',
        'จำกัดจำนวนเมนูอาหาร 100 รายการ',
        'จำกัดจำนวนบิลต่อเดือน 2,500 รายการ',
      ],
      cta: 'เริ่มต้นใช้งาน',
      popular: true,
    },
    {
      name: 'Premium',
      price: isYearly ? '4,999' : '4,999',
      yearlyPrice: '59,988',
      description: 'เหมาะสำหรับร้านค้าที่ต้องการระบบเต็มรูปแบบ',
      features: [
        'ฟีเจอร์ทั้งหมดจากแพ็กเกจ Standard',
        'ระบบสต็อกร้านค้า',
        'ระบบรายงาน Custom พิเศษ',
        'ระบบ Support ร้านค้า 18/7',
        'ไม่จำกัดจำนวนเมนูอาหาร',
        'ไม่จำกัดจำนวนบิลต่อเดือน',
      ],
      cta: 'ติดต่อเรา',
      popular: false,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with USPs */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dineflow-dark-gray mb-6">
            แพ็กเกจที่ตอบโจทย์ทุกขนาดธุรกิจ
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ พร้อมฟีเจอร์ครบครันในราคาที่คุ้มค่า
          </p>

          {/* USPs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ไม่มีค่าธรรมเนียมแอบแฝง</h3>
              <p className="text-gray-600">จ่ายเท่าที่เห็น ไม่มีค่าใช้จ่ายซ่อนเร้น ไม่มีค่าธรรมเนียมเพิ่มเติม</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">รองรับทุกอุปกรณ์</h3>
              <p className="text-gray-600">ใช้งานได้ทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์ ทำงานได้ทุกที่</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">ฟรีอัปเดตตลอดอายุการใช้งาน</h3>
              <p className="text-gray-600">รับฟีเจอร์ใหม่ๆ อัตโนมัติ ไม่มีค่าใช้จ่ายเพิ่มเติม</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-lg ${!isYearly ? 'text-dineflow-dark-gray font-semibold' : 'text-gray-500'}`}>รายเดือน</span>
          <button
            className="relative w-16 h-8 bg-dineflow-brown rounded-full p-1 transition-colors duration-300"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isYearly ? 'translate-x-8' : ''}`} />
          </button>
          <span className={`text-lg ${isYearly ? 'text-dineflow-dark-gray font-semibold' : 'text-gray-500'}`}>รายปี</span>
          <span className="ml-2 inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">ประหยัด 20%</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border ${plan.popular ? 'border-dineflow-brown scale-105' : 'border-gray-100'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dineflow-brown text-white px-4 py-1 rounded-full text-sm font-medium">แนะนำ!</span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dineflow-dark-gray mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-dineflow-dark-gray">{plan.price}</span>
                    <span className="text-gray-600 mb-1">บาท/เดือน</span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-gray-500 mt-1">
                      หรือ {plan.yearlyPrice} บาท/ปี
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-dineflow-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white' 
                      : 'bg-white border-2 border-dineflow-brown text-dineflow-brown hover:bg-dineflow-brown hover:text-white'
                  } font-semibold rounded-lg transition-all duration-300`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-dineflow-dark-gray mb-12">เปรียบเทียบแพ็กเกจ</h2>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left text-gray-600">ฟีเจอร์</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center">Standard</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบ Cashier</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบครัว</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบจัดการโต๊ะ</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบพนักงานจัดการออเดอร์</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบรายงานพื้นฐาน</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบสต็อกร้านค้า</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบรายงาน Custom พิเศษ</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">ระบบ Support ร้านค้า 18/7</td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><XCircle className="w-5 h-5 text-gray-300 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">จำกัดจำนวนเมนูอาหาร</td>
                  <td className="py-4 px-6 text-center">100 รายการ</td>
                  <td className="py-4 px-6 text-center">100 รายการ</td>
                  <td className="py-4 px-6 text-center">ไม่จำกัด</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">จำกัดจำนวนบิลต่อเดือน</td>
                  <td className="py-4 px-6 text-center">1,500 รายการ</td>
                  <td className="py-4 px-6 text-center">2,500 รายการ</td>
                  <td className="py-4 px-6 text-center">ไม่จำกัด</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-white"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-dineflow-brown/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-dineflow-dark-gray mb-6 drop-shadow-sm">
              พร้อมยกระดับธุรกิจของคุณหรือยัง?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              เริ่มต้นใช้งานฟรี 14 วัน ไม่ต้องใช้บัตรเครดิต
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="group relative px-8 py-6 bg-gradient-to-r from-dineflow-brown to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  เริ่มต้นใช้งานฟรี
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              
              <Button 
                variant="outline" 
                className="group px-8 py-6 bg-white/80 backdrop-blur-sm border-2 border-dineflow-brown hover:bg-dineflow-brown/10 text-dineflow-brown font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center">
                  ติดต่อฝ่ายขาย
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
            
            <div className="mt-12 text-gray-600">
              <p className="text-sm">Powered by Gracer Company Limited</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing; 