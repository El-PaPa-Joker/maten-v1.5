import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FormData } from '../../types/form';
import { submitToGoogleForms } from '../../utils/googleForms';

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

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <Card hover={false}>
      <h3 className="text-2xl font-bold text-accent mb-8">أرسل رسالة</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClasses}>الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="أدخل اسمك"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>رقم الهاتف</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="أدخل رقم هاتفك"
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>الرسالة</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClasses} resize-none`}
            placeholder="اكتب رسالتك هنا"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          fullWidth
          className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
        >
          {isSubmitting ? (
            <span>جاري الإرسال...</span>
          ) : (
            <>
              <Send className="w-5 h-5 inline-block ml-2" />
              إرسال الرسالة
            </>
          )}
        </Button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center animate-fadeIn">
            تم إرسال رسالتك بنجاح! سنتواصل معك قريباً
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center animate-fadeIn">
            حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى
          </div>
        )}
      </form>
    </Card>
  );
};

export default ContactForm;