// SponsorForm.tsx
'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SponsorFormProps {
//   onSubmit(newSponsor: Sponsor): void; // onSubmit function written as a function
  initialSponsor?: Sponsor;
}



interface Sponsor {
  id?: number;
  name: string;
  email: string;
}

const SponsorForm: React.FC<SponsorFormProps> = ({  initialSponsor }) => {
  const [sponsor, setSponsor] = useState<Sponsor>(initialSponsor || { name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSponsor(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(sponsor);
    setSponsor({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={sponsor.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={sponsor.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
          placeholder="Enter email"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">
          {initialSponsor ? 'Update Sponsor' : 'Add Sponsor'}
        </Button>
      </div>
    </form>
  );
};

export default SponsorForm;
