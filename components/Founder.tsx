import React from 'react';
import Image from 'next/image';

const FounderHighlight = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-primary-600 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Founder: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary-800">Our Founder</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/mom.jpg"
              alt="Leila Culberson"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-700">President Leila Culberson</h3>
            <p className="text-gray-600 mb-6">
              Leila Culberson's life has been a testament to strength, compassion, and unwavering determination. As a survivor of multiple forms of childhood trauma, she faced adversity head-on, emerging from the darkness with a fierce resolve to make a difference.
            </p>
            <FounderHighlight
              title="A Warrior for Change"
              description="Leila organized marches, rallied communities, and raised awareness about the dangers of fentanyl. She adapted her grassroots program to help vulnerable asylum seekers, connecting them to vital assistance."
            />
            <FounderHighlight
              title="A Journey of Healing and Advocacy"
              description="After overcoming personal trauma and losing her son Sawyer to fentanyl, Leila became a tireless advocate for raising awareness about drug dangers and creating safe spaces for marginalized youth and families."
            />
            <FounderHighlight
              title="Empowering Lives"
              description="Leila's grassroots organization has helped over 40 women and children find refuge from the streets. Despite lack of government funding, she remains committed to being a beacon of hope and a force for change."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
