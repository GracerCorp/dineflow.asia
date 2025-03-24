
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    business: '',
    businessType: '',
    location: ''
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
        lastname: '',
        email: '',
        phone: '',
        business: '',
        businessType: '',
        location: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-storehub-orange p-6 md:p-8 rounded-xl shadow-lg max-w-md w-full">
      <h3 className="text-white text-lg font-semibold mb-4">กรอกฟอร์มลงทะเบียน</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ชื่อ"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="นามสกุล"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="อีเมล"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="เบอร์โทรศัพท์"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="text"
          name="business"
          value={formData.business}
          onChange={handleChange}
          placeholder="ชื่อร้านค้า"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="text"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          placeholder="ประเภทร้านค้า"
          className="bg-white border-none h-12"
          required
        />
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="สถานที่ตั้งร้านค้า"
          className="bg-white border-none h-12"
          required
        />
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 h-12 rounded-md font-medium transition-all duration-300 btn-hover-effect"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'กำลังส่งข้อมูล...' : 'ขอรับใบเสนอราคา'}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;
