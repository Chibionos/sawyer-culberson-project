import React from 'react';
import Image from 'next/image';

interface EffortCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const EffortCard: React.FC<EffortCardProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48 w-full">
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 font-heading text-primary-600">{title}</h3>
      <p className="text-accent-600">{description}</p>
    </div>
  </div>
);

const Efforts: React.FC = () => {
  const efforts = [
    {
      title: "Sawyer Culberson Project",
      description: "Focused on making changes in the community by connecting those in need with support and advocacy in order to gain stability. Working directly to fulfill the vision of Save the Kids basic to prevent youth marginalization and incarceration. Donations go directly back into the community providing food, supplies, and toiletries for the homeless, temporary housing for asylum seekers and much more!",
      imageSrc: "/Logo.png"
    },
    {
      title: "Save the Kids",
      description: "Save the Kids is a grassroots nonprofit organization that focuses on marginalized BIYOC (Black, Indigenous, and Youth of Color), including BIYOC asylum seekers. Educating the public on more dignified and cost effective ways to connect those in need to necessary resources. We are not a charity that pays or promises to pay for anything. We are a community that connects people to the services they need.",
      imageSrc: "/save.webp"
    },
    {
      title: "Pay-it-Forward Program",
      description: "Every instructor has experience and they guide a team to do excellent work. We are based out of Woodinville, WA and serve the surrounding area. Donate based on the work you need done. 100% of the proceeds go toward making the program self-sustaining. Services include pressure washing, window washing, gutter cleaning, gravel spreading, and basic plumbing repairs.",
      imageSrc: "/forward.webp"
    }
  ];

  return (
    <section className="py-12 bg-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary-800">Our Efforts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {efforts.map((effort, index) => (
            <EffortCard key={index} {...effort} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Efforts;
