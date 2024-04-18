import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  image: string; // Add image property
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
      <img src={testimonial.image} alt="Company Logo" className="mb-4 w-28 h-28 mx-auto" /> {/* Display company image logo */}
      <p className="text-gray-600 mb-4">{testimonial.content}</p>
      <p className="text-gray-800 font-semibold">{testimonial.name}</p>
      <p className="text-gray-500">{testimonial.position}</p>
    </div>
  );
};

export default TestimonialCard;
