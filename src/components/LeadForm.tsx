import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    businessType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('ขอบคุณสำหรับข้อมูล! เราจะติดต่อกลับโดยเร็วที่สุด', {
        duration: 5000,
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        businessType: '',
      });
    }, 1500);
  };

  return (
    <div className={cn(
      "bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl",
      "border border-gray-100 max-w-sm w-full",
      "transform transition-all duration-300 hover:shadow-2xl"
    )}>
      <h3 className="text-gserve-dark-gray text-lg font-semibold mb-4 border-b pb-2">รับข้อเสนอราคาพิเศษ</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ชื่อ-นามสกุล"
            className="border-gray-200 h-10 text-sm focus:border-gserve-brown focus:ring-gserve-brown/20"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="อีเมล"
            className="border-gray-200 h-10 text-sm focus:border-gserve-brown focus:ring-gserve-brown/20"
            required
          />
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="เบอร์โทรศัพท์"
            className="border-gray-200 h-10 text-sm focus:border-gserve-brown focus:ring-gserve-brown/20"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="ชื่อร้านค้า"
              className="border-gray-200 h-10 text-sm focus:border-gserve-brown focus:ring-gserve-brown/20"
              required
            />
            <Input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              placeholder="ประเภทร้านค้า"
              className="border-gray-200 h-10 text-sm focus:border-gserve-brown focus:ring-gserve-brown/20"
              required
            />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-gserve-brown to-amber-500 hover:from-amber-600 hover:to-amber-700 text-white py-2 h-10 rounded-md font-medium transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'กำลังส่งข้อมูล...' : 'รับใบเสนอราคาฟรี'}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
