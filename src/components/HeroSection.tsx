import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744891470331-c660191721b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXZyYXRyaSUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYwNTM1NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Navaratri Celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r opacity-80" 
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(128, 0, 32, 0.9), rgba(255, 20, 147, 0.7), rgba(255, 153, 51, 0.8))' 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="mr-2" style={{ color: 'var(--gold)' }} size={32} />
          <Sparkles style={{ color: 'var(--gold)' }} size={32} />
        </div>
        
        <h1 
          className="mb-6 text-white drop-shadow-lg"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          9 Nights of Devotion & Dance
        </h1>
        
        <p className="mb-8 text-white opacity-95 max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
          Join us in celebrating the divine feminine power with traditional Garba, Dandiya, and spiritual ceremonies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="text-white border-2 px-8 py-6 shadow-lg hover:scale-105 transition-transform"
            style={{ 
              backgroundColor: 'var(--gold)',
              borderColor: 'white',
              color: 'var(--maroon)'
            }}
          >
            View Schedule
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 px-8 py-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white shadow-lg"
            style={{ borderColor: 'white' }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
