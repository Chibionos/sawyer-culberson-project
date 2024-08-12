import React from 'react';
import { getEvents } from '../actions/getEvents';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
}

const Events: React.FC = async () => {
  const { success, events, error } = await getEvents();

  if (!success) {
    console.error("Failed to fetch events:", error);
    return <div>Failed to load events. Please try again later.</div>;
  }

  const validEvents = events?.filter((event): event is Event => 
    typeof event.id === 'string' &&
    typeof event.name === 'string' &&
    typeof event.location === 'string' &&
    typeof event.description === 'string'
  ) || [];

  return (
    <section id="events" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-800">Upcoming Events</h2>
        {validEvents.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {validEvents.map((event) => (
              <li key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-600 mb-2">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No upcoming events at the moment. Check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default Events;

