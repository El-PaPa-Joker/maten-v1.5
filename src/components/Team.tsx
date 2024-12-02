import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const Team = () => {
  const team: TeamMember[] = [
    {
      name: "د. محمد كمال",
      role: "مؤسس الأكاديمية",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "خبير في التغذية والتدريب الرياضي مع خبرة 15 عاماً",
      social: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      name: "أ. سارة حسن",
      role: "أخصائية تغذية",
      image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "متخصصة في التغذية العلاجية والرياضية",
      social: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      name: "كابتن أحمد رامي",
      role: "مدرب محترف",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "مدرب معتمد مع خبرة في التدريب الشخصي",
      social: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-dark-200 to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="فريقنا"
          subtitle="تعرف على خبراءنا المحترفين"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-dark-100 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent" />
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                
                <div className="flex space-x-4 space-x-reverse">
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-gray-400 hover:text-accent transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-gray-400 hover:text-accent transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-accent transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;