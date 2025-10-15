import { Badge } from './ui/badge';
import { Clock, MapPin, Music, Sparkles } from 'lucide-react';

const events = [
  {
    day: 'Day 1',
    date: 'October 15, 2025',
    goddess: 'Shailaputri',
    color: '#FF9933',
    events: [
      { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles },
      { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles },
      { time: '08:00 PM', title: 'Garba Night', location: 'Community Ground', icon: Music },
    ],
  },
  {
    day: 'Day 2',
    date: 'October 16, 2025',
    goddess: 'Brahmacharini',
    color: '#4169E1',
    events: [
      { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles },
      { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles },
      { time: '08:00 PM', title: 'Traditional Dance Performance', location: 'Main Stage', icon: Music },
    ],
  },
  {
    day: 'Day 3',
    date: 'October 17, 2025',
    goddess: 'Chandraghanta',
    color: '#FFD700',
    events: [
      { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles },
      { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles },
      { time: '08:00 PM', title: 'Dandiya Raas', location: 'Community Ground', icon: Music },
    ],
  },
  {
    day: 'Day 4',
    date: 'October 18, 2025',
    goddess: 'Kushmanda',
    color: '#FF1493',
    events: [
      { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles },
      { time: '12:00 PM', title: 'Special Bhog Distribution', location: 'Main Temple', icon: Sparkles },
      { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles },
      { time: '08:00 PM', title: 'Folk Music Night', location: 'Main Stage', icon: Music },
    ],
  },
  {
    day: 'Day 5',
    date: 'October 19, 2025',
    goddess: 'Skandamata',
    color: '#800020',
    events: [
      { time: '06:00 AM', title: 'Morning Aarti', location: 'Main Temple', icon: Sparkles },
      { time: '07:00 PM', title: 'Evening Puja', location: 'Main Temple', icon: Sparkles },
      { time: '08:00 PM', title: 'Grand Garba Celebration', location: 'Community Ground', icon: Music },
    ],
  },
];

export function EventTimeline() {
  return (
    <section id="schedule" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-white border-0" style={{ backgroundColor: 'var(--royal-blue)' }}>
            Schedule
          </Badge>
          <h2 style={{ color: 'var(--maroon)' }}>
            Event Timeline
          </h2>
          <p className="mt-4 text-muted-foreground">
            Daily schedule of pujas, performances, and celebrations
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-1"
            style={{ backgroundColor: 'var(--saffron)', opacity: 0.3 }}
          />

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((dayEvent, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg"
                    style={{ backgroundColor: dayEvent.color }}
                  >
                    <span className="text-white">
                      {dayEvent.day.replace('Day ', '')}
                    </span>
                  </div>
                  <div className="ml-6">
                    <h3 style={{ color: dayEvent.color }}>
                      {dayEvent.goddess}
                    </h3>
                    <p className="text-muted-foreground">
                      {dayEvent.date}
                    </p>
                  </div>
                </div>

                {/* Events List */}
                <div className="ml-24 space-y-4">
                  {dayEvent.events.map((event, eventIndex) => {
                    const IconComponent = event.icon;
                    return (
                      <div 
                        key={eventIndex}
                        className="bg-white border-2 rounded-lg p-4 hover:shadow-md transition-shadow"
                        style={{ borderColor: dayEvent.color, borderLeftWidth: '4px' }}
                      >
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${dayEvent.color}20` }}
                          >
                            <IconComponent size={20} style={{ color: dayEvent.color }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4>{event.title}</h4>
                              <div className="flex items-center text-muted-foreground gap-1">
                                <Clock size={16} />
                                <span>{event.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-muted-foreground gap-1">
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Schedule for Days 6-9 coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
