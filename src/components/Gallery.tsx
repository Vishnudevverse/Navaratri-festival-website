import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Masonry from 'react-responsive-masonry';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1605029271330-95970e826af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYXJiYSUyMGRhbmNlcnMlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NjA1MzU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Garba dancers performing',
  },
  {
    url: 'https://images.unsplash.com/photo-1698161827951-1dff7e1140fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2RkZXNzJTIwZHVyZ2ElMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzYwNTM1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Goddess Durga statue',
  },
  {
    url: 'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmZXN0aXZhbCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MDUzNTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Festival celebration',
  },
  {
    url: 'https://images.unsplash.com/photo-1755946684049-03e1ebc67ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRhbmNlJTIwSW5kaWF8ZW58MXx8fHwxNzYwNTM1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Traditional Indian dance',
  },
  {
    url: 'https://images.unsplash.com/photo-1589463896320-dcb6b7a19854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYXZyYXRyaSUyMGRhbmRpeWElMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjA1MzU0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Navratri dandiya celebration',
  },
  {
    url: 'https://images.unsplash.com/photo-1631556373338-52e31188effc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZW1wbGUlMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NjA1MzU0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Temple decorations',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-white border-0" style={{ backgroundColor: 'var(--festive-pink)' }}>
            Memories
          </Badge>
          <h2 style={{ color: 'var(--maroon)' }}>
            Festival Gallery
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Glimpses of devotion, dance, and celebration from previous Navaratri festivals
          </p>
        </div>

        <Masonry columnsCount={3} gutter="1rem" className="masonry-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 2 !important;
          }
        }
        @media (max-width: 480px) {
          .masonry-grid {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
