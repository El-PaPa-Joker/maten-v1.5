import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Card from '../ui/Card';
import IconBox from '../ui/IconBox';

const ContactInfo = () => {
  const contactDetails = [
    {
      Icon: Phone,
      title: 'رقم الهاتف',
      value: '+20 123 456 7890'
    },
    {
      Icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@mateen-academy.com'
    },
    {
      Icon: MapPin,
      title: 'العنوان',
      value: 'القاهرة، مصر'
    },
    {
      Icon: Clock,
      title: 'ساعات العمل',
      value: '9:00 ص - 10:00 م'
    }
  ];

  return (
    <Card hover={false}>
      <h3 className="text-2xl font-bold text-accent mb-8">معلومات التواصل</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <IconBox Icon={detail.Icon} />
            <div>
              <p className="font-semibold text-white">{detail.title}</p>
              <p className="text-gray-300">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <p className="text-gray-300 text-sm">
          نحن متاحون للرد على استفساراتكم خلال ساعات العمل. يمكنكم أيضاً التواصل معنا عبر الواتساب للحصول على رد سريع.
        </p>
      </div>
    </Card>
  );
};

export default ContactInfo;