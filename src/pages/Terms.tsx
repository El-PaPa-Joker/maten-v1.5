import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Terms = () => {
  return (
    <div className="min-h-screen bg-dark-300 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="الشروط والأحكام"
          subtitle="يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا"
        />

        <div className="mt-12 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">قبول الشروط</h2>
            <p>
              باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">الخدمات</h2>
            <p className="mb-4">
              نقدم خدمات التدريب الشخصي والتغذية والتأهيل البدني. نحتفظ بالحق في:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>تعديل أو إيقاف خدماتنا في أي وقت</li>
              <li>رفض الخدمة لأي شخص لأي سبب</li>
              <li>تغيير أسعار الخدمات</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">الحسابات والعضوية</h2>
            <p className="mb-4">
              عند إنشاء حساب لدينا:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>يجب تقديم معلومات دقيقة وكاملة</li>
              <li>أنت مسؤول عن الحفاظ على سرية حسابك</li>
              <li>يجب إخطارنا فوراً بأي استخدام غير مصرح به</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">الدفع والاشتراكات</h2>
            <p className="mb-4">
              شروط الدفع والاشتراكات:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>جميع المدفوعات نهائية وغير قابلة للاسترداد</li>
              <li>يتم تجديد الاشتراكات تلقائياً ما لم يتم إلغاؤها</li>
              <li>يجب إخطارنا قبل 30 يوماً لإلغاء الاشتراك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">المسؤولية القانونية</h2>
            <p>
              نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام خدماتنا. يجب استشارة الطبيب قبل البدء في أي برنامج تدريبي أو غذائي.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;