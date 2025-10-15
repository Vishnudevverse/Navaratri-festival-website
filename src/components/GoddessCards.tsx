import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Flower2, Crown, Sparkles, Heart, Flame, Moon, Sun, Star, Zap } from 'lucide-react';

const goddessData = [
  {
    name: 'Shailaputri',
    day: 'Day 1',
    color: '#FF9933',
    bgGradient: 'linear-gradient(135deg, #FF9933, #FFB366)',
    description: 'Daughter of the mountains',
    icon: Flower2,
  },
  {
    name: 'Brahmacharini',
    day: 'Day 2',
    color: '#4169E1',
    bgGradient: 'linear-gradient(135deg, #4169E1, #6A8EF5)',
    description: 'Embodiment of penance',
    icon: Crown,
  },
  {
    name: 'Chandraghanta',
    day: 'Day 3',
    color: '#FFD700',
    bgGradient: 'linear-gradient(135deg, #FFD700, #FFE44D)',
    description: 'Bearer of the moon',
    icon: Moon,
  },
  {
    name: 'Kushmanda',
    day: 'Day 4',
    color: '#FF1493',
    bgGradient: 'linear-gradient(135deg, #FF1493, #FF47B3)',
    description: 'Creator of the universe',
    icon: Sun,
  },
  {
    name: 'Skandamata',
    day: 'Day 5',
    color: '#800020',
    bgGradient: 'linear-gradient(135deg, #800020, #A6334F)',
    description: 'Mother of Skanda',
    icon: Heart,
  },
  {
    name: 'Katyayani',
    day: 'Day 6',
    color: '#DC143C',
    bgGradient: 'linear-gradient(135deg, #DC143C, #E84A66)',
    description: 'Warrior goddess',
    icon: Flame,
  },
  {
    name: 'Kalaratri',
    day: 'Day 7',
    color: '#4B0082',
    bgGradient: 'linear-gradient(135deg, #4B0082, #6A33A8)',
    description: 'Destroyer of darkness',
    icon: Star,
  },
  {
    name: 'Mahagauri',
    day: 'Day 8',
    color: '#FFBF00',
    bgGradient: 'linear-gradient(135deg, #FFBF00, #FFCF33)',
    description: 'Radiant and pure',
    icon: Sparkles,
  },
  {
    name: 'Siddhidatri',
    day: 'Day 9',
    color: '#9370DB',
    bgGradient: 'linear-gradient(135deg, #9370DB, #A98FE5)',
    description: 'Granter of perfection',
    icon: Zap,
  },
];

export function GoddessCards() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-white border-0" style={{ backgroundColor: 'var(--maroon)' }}>
            Nine Divine Forms
          </Badge>
          <h2 style={{ color: 'var(--maroon)' }}>
            Navadurga - The Nine Goddesses
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Each night of Navaratri is dedicated to one of the nine forms of Goddess Durga, 
            representing different aspects of divine feminine energy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goddessData.map((goddess, index) => {
            const IconComponent = goddess.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ borderColor: goddess.color }}
              >
                <div 
                  className="h-32 relative"
                  style={{ background: goddess.bgGradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent size={64} className="text-white opacity-90" />
                  </div>
                  <Badge 
                    className="absolute top-4 right-4 border-white text-white"
                    variant="outline"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    {goddess.day}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 style={{ color: goddess.color }}>
                    {goddess.name}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {goddess.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
