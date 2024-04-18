'use client'

import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TestimonialPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: '1',
      name: 'John Doe',
      position: 'CEO, Company A',
      content: 'Working with this platform has been an incredible experience. Their team provided top-notch service and helped us achieve our goals efficiently.',
      image: '/assets/images/c1.jpg', // Add image URL
    },
    {
      id: '2',
      name: 'Jane Smith',
      position: 'Marketing Director, Company B',
      content: 'I highly recommend this platform to anyone looking for reliable solutions. Their dedication to customer satisfaction is unmatched.',
      image: '/assets/images/c2.jpg', // Add image URL
    },
  ]);

  const [formValues, setFormValues] = useState({
    name: '',
    position: '',
    content: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTestimonial = {
      id: (testimonials.length + 1).toString(),
      ...formValues,
      image: '/assets/images/c_def.jpg', // Add default image URL or leave it empty
    };
    setTestimonials([...testimonials, newTestimonial]);
    setFormValues({
      name: '',
      position: '',
      content: '',
    });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="mt-12">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block text-gray-700">Position:</label>
            <input type="text" id="position" name="position" value={formValues.position} onChange={handleChange} className="w-full border border-gray-300 rounded p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700">Testimonial:</label>
            <textarea id="content" name="content" value={formValues.content} onChange={handleChange} className="w-full h-20 border border-gray-300 rounded p-2" />
          </div>
          <Button type="submit" className="image-transition bg-gradient-to-r from-cyan-500 to-blue-500 button mb-5">Submit Testimonial</Button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialPage;
