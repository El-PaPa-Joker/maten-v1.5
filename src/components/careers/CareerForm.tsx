import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import Card from '../ui/Card';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card hover={false}>
      <h3 className="text-2xl font-bold text-accent mb-6">تقدم للوظيفة</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">الاسم</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">المؤهل العلمي</label>
          <input
            type="text"
            name="education"
            required
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">الوظيفة المطلوبة</label>
          <select
            name="position"
            required
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          >
            <option value="">اختر الوظيفة</option>
            <option value="trainer">مدرب شخصي</option>
            <option value="nutritionist">أخصائي تغذية</option>
            <option value="physiotherapist">أخصائي علاج طبيعي</option>
            <option value="receptionist">موظف استقبال</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">سنوات الخبرة</label>
          <input
            type="number"
            name="experience"
            required
            min="0"
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">رسالة تعريفية</label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent resize-none"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-dark-200 hover:bg-dark-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-400">
                <span className="font-semibold">اضغط لرفع السيرة الذاتية</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">PDF أو DOC (حجم الملف الأقصى: 5MB)</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-accent to-blue-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send className="w-5 h-5" />
          إرسال الطلب
        </button>
      </form>
    </Card>
  );
};

export default CareerForm;