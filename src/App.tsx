import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Sparkles, Clock, Music, Flower2, Crown, Moon, Sun, Heart, Flame, Star, Zap, Menu, X } from 'lucide-react';
import Masonry from 'react-responsive-masonry';

const ImageWithFallback = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, style, ...rest } = props;
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true);
    };

    if (error) {
        return <div style={{width: '100%', height: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Image not found</div>;
    }

    return <img src={src} alt={alt} style={style} onError={handleError} {...rest} />;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderBottom: '4px solid var(--saffron)' }}>
      <div style={{ maxWidth: '80rem', margin: 'auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          <div>
            <h2 style={{ backgroundImage: 'linear-gradient(to right, var(--saffron), var(--maroon))', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Navaratri 2025
            </h2>
          </div>
          <div style={{ display: 'none', md: { display: 'flex' }, alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={{ color: 'var(--maroon)', transition: 'opacity 0.2s' }}>
                {link.name}
              </a>
            ))}
          </div>
          <div style={{ md: { display: 'none' } }}>
            <button onClick={() => setIsOpen(!isOpen)} style={{ padding: '0.5rem', borderRadius: '0.375rem', color: 'var(--maroon)' }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div style={{ md: { display: 'none' }, backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ padding: '0.5rem 0.5rem 0.75rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={{ display: 'block', padding: '0.5rem 0.75rem', borderRadius: '0.375rem', color: 'var(--maroon)' }} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744891470331-c660191721b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXZyYXRyaSUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYwNTM1NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Navaratri Celebration"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(135deg, rgba(128, 0, 32, 0.9), rgba(255, 20, 147, 0.7), rgba(255, 153, 51, 0.8))', opacity: 0.8 }} />
      </div>
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1rem', maxWidth: '56rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <Sparkles style={{ marginRight: '0.5rem', color: 'var(--gold)' }} size={32} />
          <Sparkles style={{ color: 'var(--gold)' }} size={32} />
        </div>
        <h1 style={{ marginBottom: '1.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          9 Nights of Devotion & Dance
        </h1>
        <p style={{ marginBottom: '2rem', color: 'white', opacity: 0.95, maxWidth: '42rem', margin: 'auto', fontSize: '1.25rem' }}>
          Join us in celebrating the divine feminine power with traditional Garba, Dandiya, and spiritual ceremonies
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '5rem', background: 'linear-gradient(to top, white, transparent)' }} />
    </section>
  );
};

const goddessData = [
    { name: 'Shailaputri', day: 'Day 1', color: '#FF9933', bgGradient: 'linear-gradient(135deg, #FF9933, #FFB366)', description: 'Daughter of the mountains', icon: Flower2 },
    { name: 'Brahmacharini', day: 'Day 2', color: '#4169E1', bgGradient: 'linear-gradient(135deg, #4169E1, #6A8EF5)', description: 'Embodiment of penance', icon: Crown },
    { name: 'Chandraghanta', day: 'Day 3', color: '#FFD700', bgGradient: 'linear-gradient(135deg, #FFD700, #FFE44D)', description: 'Bearer of the moon', icon: Moon },
    { name: 'Kushmanda', day: 'Day 4', color: '#FF1493', bgGradient: 'linear-gradient(135deg, #FF1493, #FF47B3)', description: 'Creator of the universe', icon: Sun },
    { name: 'Skandamata', day: 'Day 5', color: '#800020', bgGradient: 'linear-gradient(135deg, #800020, #A6334F)', description: 'Mother of Skanda', icon: Heart },
    { name: 'Katyayani', day: 'Day 6', color: '#DC143C', bgGradient: 'linear-gradient(135deg, #DC143C, #E84A66)', description: 'Warrior goddess', icon: Flame },
    { name: 'Kalaratri', day: 'Day 7', color: '#4B0082', bgGradient: 'linear-gradient(135deg, #4B0082, #6A33A8)', description: 'Destroyer of darkness', icon: Star },
    { name: 'Mahagauri', day: 'Day 8', color: '#FFBF00', bgGradient: 'linear-gradient(135deg, #FFBF00, #FFCF33)', description: 'Radiant and pure', icon: Sparkles },
    { name: 'Siddhidatri', day: 'Day 9', color: '#9370DB', bgGradient: 'linear-gradient(135deg, #9370DB, #A98FE5)', description: 'Granter of perfection', icon: Zap },
];

const GoddessCards = () => {
  return (
    <section id="about" style={{ padding: '4rem 1rem', background: 'linear-gradient(to bottom, white, rgba(255, 218, 185, 0.3))' }}>
      <div style={{ maxWidth: '80rem', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ marginBottom: '1rem', color: 'white', border: '0px', backgroundColor: 'var(--maroon)', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>
            Nine Divine Forms
          </span>
          <h2 style={{ color: 'var(--maroon)', marginTop: '1rem' }}>
            Navadurga - The Nine Goddesses
          </h2>
          <p style={{ marginTop: '1rem', color: '#6b7280', maxWidth: '42rem', margin: 'auto' }}>
            Each night of Navaratri is dedicated to one of the nine forms of Goddess Durga, representing different aspects of divine feminine energy
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {goddessData.map((goddess, index) => {
            const IconComponent = goddess.icon;
            return (
              <div key={index} style={{ overflow: 'hidden', border: `2px solid ${goddess.color}`, borderRadius: '0.5rem', transition: 'all 0.3s', cursor: 'pointer' }}>
                <div style={{ height: '8rem', position: 'relative', background: goddess.bgGradient }}>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent size={64} style={{ color: 'white', opacity: 0.9 }} />
                  </div>
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', border: '1px solid white', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '0.25rem 0.5rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>
                    {goddess.day}
                  </span>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: goddess.color }}>
                    {goddess.name}
                  </h3>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                    {goddess.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const events = [
    { day: 'Day 1', date: 'October 15, 2025', goddess: 'Shailaputri', color: '#FF9933', events: [ { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles }, { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles }, { time: '08:00 PM', title: 'Garba Night', location: 'Community Ground', icon: Music }, ], },
    { day: 'Day 2', date: 'October 16, 2025', goddess: 'Brahmacharini', color: '#4169E1', events: [ { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles }, { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles }, { time: '08:00 PM', title: 'Traditional Dance Performance', location: 'Main Stage', icon: Music }, ], },
    { day: 'Day 3', date: 'October 17, 2025', goddess: 'Chandraghanta', color: '#FFD700', events: [ { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles }, { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles }, { time: '08:00 PM', title: 'Dandiya Raas', location: 'Community Ground', icon: Music }, ], },
    { day: 'Day 4', date: 'October 18, 2025', goddess: 'Kushmanda', color: '#FF1493', events: [ { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles }, { time: '12:00 PM', title: 'Special Bhog Distribution', location: 'Main Temple', icon: Sparkles }, { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles }, { time: '08:00 PM', title: 'Folk Music Night', location: 'Main Stage', icon: Music }, ], },
    { day: 'Day 5', date: 'October 19, 2025', goddess: 'Skandamata', color: '#800020', events: [ { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles }, { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles }, { time: '08:00 PM', title: 'Grand Garba Celebration', location: 'Community Ground', icon: Music }, ], },
];

const EventTimeline = () => {
  return (
    <section id="schedule" style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '56rem', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ marginBottom: '1rem', color: 'white', border: '0px', backgroundColor: 'var(--royal-blue)', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>
            Schedule
          </span>
          <h2 style={{ color: 'var(--maroon)', marginTop: '1rem' }}>
            Event Timeline
          </h2>
          <p style={{ marginTop: '1rem', color: '#6b7280' }}>
            Daily schedule of pujas, performances, and celebrations
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '2rem', top: 0, bottom: 0, width: '4px', backgroundColor: 'var(--saffron)', opacity: 0.3 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {events.map((dayEvent, dayIndex) => (
              <div key={dayIndex} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: dayEvent.color }}>
                    <span style={{ color: 'white' }}>
                      {dayEvent.day.replace('Day ', '')}
                    </span>
                  </div>
                  <div style={{ marginLeft: '1.5rem' }}>
                    <h3 style={{ color: dayEvent.color }}>
                      {dayEvent.goddess}
                    </h3>
                    <p style={{ color: '#6b7280' }}>
                      {dayEvent.date}
                    </p>
                  </div>
                </div>
                <div style={{ marginLeft: '6rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {dayEvent.events.map((event, eventIndex) => {
                    const IconComponent = event.icon;
                    return (
                      <div key={eventIndex} style={{ backgroundColor: 'white', border: `2px solid ${dayEvent.color}`, borderLeftWidth: '4px', borderRadius: '0.5rem', padding: '1rem', transition: 'box-shadow 0.2s' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backgroundColor: `${dayEvent.color}20` }}>
                            <IconComponent size={20} style={{ color: dayEvent.color }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                              <h4>{event.title}</h4>
                              <div style={{ display: 'flex', alignItems: 'center', color: '#6b7280', gap: '0.25rem' }}>
                                <Clock size={16} />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', color: '#6b7280', gap: '0.25rem' }}>
                              <MapPin size={16} />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
            Schedule for Days 6-9 coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1605029271330-95970e826af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYXJiYSUyMGRhbmNlcnMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjA1MzU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Garba dancers performing', },
    { url: 'https://images.unsplash.com/photo-1698161827951-1dff7e1140fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RkZXNzJTIwZHVyZ2ElMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzYwNTM1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Goddess Durga statue', },
    { url: 'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDUzNTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Festival celebration', },
    { url: 'https://images.unsplash.com/photo-1755946684049-03e1ebc67ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRhbmNlJTIwSW5kaWF8ZW58MXx8fHwxNzYwNTM1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Traditional Indian dance', },
    { url: 'https://images.unsplash.com/photo-1589463896320-dcb6b7a19854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXZyYXRyaSUyMGRhbmRpeWElMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjA1MzU0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Navratri dandiya celebration', },
    { url: 'https://images.unsplash.com/photo-1631556373338-52e31188effc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NjA1MzU0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Temple decorations', },
];

const Gallery = () => {
  return (
    <section id="gallery" style={{ padding: '4rem 1rem', background: 'linear-gradient(to bottom, white, rgba(255, 192, 203, 0.2))' }}>
      <div style={{ maxWidth: '80rem', margin: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ marginBottom: '1rem', color: 'white', border: '0px', backgroundColor: 'var(--festive-pink)', padding: '0.25rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.75rem' }}>
            Memories
          </span>
          <h2 style={{ color: 'var(--maroon)', marginTop: '1rem' }}>
            Festival Gallery
          </h2>
          <p style={{ marginTop: '1rem', color: '#6b7280', maxWidth: '42rem', margin: 'auto' }}>
            Glimpses of devotion, dance, and celebration from previous Navaratri festivals
          </p>
        </div>
        <Masonry columnsCount={3} gutter="1rem">
          {galleryImages.map((image, index) => (
            <div key={index} style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', transition: 'transform 0.3s' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="gallery-image-overlay">
                <p style={{ color: 'white', padding: '1rem', position: 'absolute', bottom: 0 }}>{image.alt}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <style>{`
        .gallery-image-overlay:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'info@navaratri2025.com' },
    { icon: MapPin, text: '123 Temple Street, City, State 12345' },
  ];

  return (
    <footer style={{ backgroundImage: 'linear-gradient(135deg, var(--maroon), #4B0082)', color: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: 'auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--gold)' }}>
              Navaratri 2025
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
              Join us in celebrating the divine feminine energy through nine nights of devotion, dance, and spiritual awakening.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.href} aria-label={social.label} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}>
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--gold)' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--gold)' }}>
              Contact Us
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                    <IconComponent size={20} style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    <span>{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', md: { textAlign: 'left' } }}>
              © {currentYear} Navaratri Festival. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
              <a href="#" style={{ transition: 'color 0.2s' }}>
                Privacy Policy
              </a>
              <a href="#" style={{ transition: 'color 0.2s' }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navigation />
      <main>
        <HeroSection />
        <GoddessCards />
        <EventTimeline />
        <Gallery />
      </main>
      <Footer />
      <style>{`
        :root {
          --saffron: #FF9933;
          --maroon: #800020;
          --gold: #FFD700;
          --royal-blue: #4169E1;
          --festive-pink: #FF1493;
        }
        body {
          margin: 0;
          font-family: sans-serif;
        }
        h1, h2, h3, h4 {
          margin: 0;
        }
      `}</style>
    </div>
  );
}