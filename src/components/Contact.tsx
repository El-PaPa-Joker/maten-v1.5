import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SectionTitle from './ui/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-200 to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="تواصل معنا"
          subtitle="نحن هنا لمساعدتك في رحلة تحول جسمك وصحتك"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          <div className="order-1 lg:order-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;