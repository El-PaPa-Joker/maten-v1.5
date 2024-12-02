import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-dark-300 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="سياسة الخصوصية"
          subtitle="نلتزم بحماية خصوصية مستخدمينا"
        />

        <div className="mt-12 space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">جمع المعلومات</h2>
            <p className="mb-4">
              نحن نجمع المعلومات التي تقدمها لنا عند:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>إنشاء حساب في موقعنا</li>
              <li>التسجيل في برامجنا التدريبية</li>
              <li>الاشتراك في نشرتنا الإخبارية</li>
              <li>التواصل معنا عبر نموذج الاتصال</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">استخدام المعلومات</h2>
            <p className="mb-4">
              نستخدم المعلومات التي نجمعها لـ:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>تقديم خدماتنا وتحسينها</li>
              <li>التواصل معك بخصوص برامجنا</li>
              <li>إرسال تحديثات عن خدماتنا</li>
              <li>تحسين تجربة المستخدم</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">حماية المعلومات</h2>
            <p>
              نحن نتخذ إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">الإفصاح عن المعلومات</h2>
            <p>
              لا نبيع أو نؤجر أو نتاجر بمعلوماتك الشخصية مع أطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>بموافقتك الصريحة</li>
              <li>عندما يكون ذلك مطلوباً بموجب القانون</li>
              <li>لحماية حقوقنا القانونية</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;