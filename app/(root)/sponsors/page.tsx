'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Sponsor {
  id: number;
  name: string;
  email: string;
  status: string;
  selected: boolean;
}

const SponsorManagementPage: React.FC = () => {
  // State to store existing sponsors
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    { id: 1, name: 'Google', email: 'google@example.com', status: '', selected: false },
    { id: 2, name: 'Microsoft', email: 'microsoft@example.com', status: '', selected: false },
    // Add more sponsors as needed
  ]);

  // State to store form input values
  const [advertisement, setAdvertisement] = useState('');
  const [eventDetails, setEventDetails] = useState({
    name: '',
    location: '',
    description: '',
    date: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddSponsor = () => {
    const newSponsor: Sponsor = {
      id: sponsors.length + 1,
      name,
      email,
      status: '',
      selected: false,
    };
    setSponsors([...sponsors, newSponsor]);
    setIsModalOpen(false);
    setName('');
    setEmail('');
  };


  // Function to handle sending advertisement with event details
  const sendAdvertisement = () => {
    // Simulate sending advertisement to selected sponsors
    const updatedSponsors = sponsors.map(sponsor => ({
      ...sponsor,
      status: sponsor.selected ? (Math.random() < 0.5 ? 'Accepted' : 'Rejected') : '',
    }));
    setSponsors(updatedSponsors);
    // Clear form fields after sending advertisement
    setAdvertisement('');
    setEventDetails({
      name: '',
      location: '',
      description: '',
      date: '',
    });
  };

  // Function to handle checkbox toggle
  const handleCheckboxChange = (id: number) => {
    const updatedSponsors = sponsors.map(sponsor =>
      sponsor.id === id ? { ...sponsor, selected: !sponsor.selected } : sponsor
    );
    setSponsors(updatedSponsors);
  };

  // Function to handle event details input change
  const handleEventDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Manage Sponsors</h1>

      {/* List of Existing Sponsors in Table Format */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Sponsors</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Select</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map(sponsor => (
              <tr key={sponsor.id}>
                <td className="border border-gray-300 p-2">{sponsor.name}</td>
                <td className="border border-gray-300 p-2">{sponsor.email}</td>
                <td className="border border-gray-300 p-2">{sponsor.status}</td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="checkbox"
                    checked={sponsor.selected}
                    onChange={() => handleCheckboxChange(sponsor.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Button onClick={() => setIsModalOpen(true)} className="image-transition bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 mb-5 rounded-full">
        Add Sponsors
      </Button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Add Sponsor</h2>
            <div className="mb-4">
              <label htmlFor="sponsorName" className="block mb-1">Name:</label>
              <input
                type="text"
                id="sponsorName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sponsorEmail" className="block mb-1">Email:</label>
              <input
                type="email"
                id="sponsorEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <button onClick={handleAddSponsor} className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Sponsor
            </button>
            <button onClick={() => setIsModalOpen(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2">
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* Send Advertisement Form with Event Details */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Send Advertisement with Event Details</h2>
        {/* Add event details input fields here */}
        <div className="mb-4">
          <label htmlFor="eventName" className="block mb-1">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="name"
            value={eventDetails.name}
            onChange={handleEventDetailsChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventLocation" className="block mb-1">Event Location:</label>
          <input
            type="text"
            id="eventLocation"
            name="location"
            value={eventDetails.location}
            onChange={handleEventDetailsChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDescription" className="block mb-1">Event Description:</label>
          <textarea
            id="eventDescription"
            name="description"
            value={eventDetails.description}
            onChange={handleEventDetailsChange}
            className="w-full h-20 border border-gray-300 rounded p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="eventDate" className="block mb-1">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="date"
            value={eventDetails.date}
            onChange={handleEventDetailsChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="advertisement" className="block mb-1">Advertisement Content:</label>
          <textarea
            id="advertisement"
            value={advertisement}
            onChange={(e) => setAdvertisement(e.target.value)}
            className="w-full h-40 border border-gray-300 rounded p-2"
            placeholder="Enter advertisement content"
          ></textarea>
        </div>
        <Button onClick={sendAdvertisement} className="image-transition bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 mb-5 rounded-full">
          Send Advertisement
        </Button>
      </div>
    </div>
  );
};

export default SponsorManagementPage;