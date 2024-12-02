import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitToGoogleForms } from '../utils/googleForms';
import type { FormData } from '../types/form';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await submitToGoogleForms(formData);
    
    setIsSubmitting(false);
    setSubmitStatus(success ? 'success' : 'error');
    
    if (success) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors"
          placeholder="أدخل اسمك"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors"
          placeholder="أدخل بريدك الإلكتروني"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors"
          placeholder="أدخل رقم هاتفك"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="اكتب رسالتك هنا"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2
          transition-all duration-300
          ${isSubmitting 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-accent hover:bg-accent/90'
          }
        `}
      >
        {isSubmitting ? (
          <span>جاري الإرسال...</span>
        ) : (
          <>
            <Send className="w-5 h-5" />
            إرسال الرسالة
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
          تم إرسال رسالتك بنجاح! سنتواصل معك قريباً
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
          حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى
        </div>
      )}
    </form>
  );
};

export default ContactForm;