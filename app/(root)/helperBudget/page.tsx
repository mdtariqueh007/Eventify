// 'use client'
// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// // import { auth } from '@clerk/nextjs';

// import { IEvent } from '@/lib/database/models/event.model';

// type BudgetPageProps =  {
//   event: IEvent[]; // Define the prop type for events
// }

// export default function BudgetPage({event} : BudgetPageProps){

//   // State to store existing events
//   const [events, setEvents] = useState<IEvent[]>(event);

//   // State to store increase amounts for each event
//   const [increaseAmounts, setIncreaseAmounts] = useState<{ [key: number]: string }>({});

//   // Function to handle increasing budget
//   const handleIncreaseBudget = (id: number) => {
//     const increaseValue = parseInt(increaseAmounts[id]);
//     // if (!isNaN(increaseValue)) {
//     //   setEvents(prevEvents => prevEvents.map(event =>
//     //     event.id === id ? { ...event, budget: event.budget + increaseValue } : event
//     //   ));
//     //   // Clear input field after increasing budget
//     //   setIncreaseAmounts(prevAmounts => ({
//     //     ...prevAmounts,
//     //     [id]: '',
//     //   }));
//     // }
//   };

//   return (
//     <>
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Budget Management</h1>

//       {/* List of Existing Events in Table Format */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold mb-2">List of Events</h2>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Name</th>
//               <th className="border border-gray-300 p-2">Budget in ₹</th>
//               <th className="border border-gray-300 p-2">Increase Budget</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.length>0 && events.map((event: IEvent) => (
//               <tr key={event.id}>
//                 <td className="border border-gray-300 p-2">{event.id}</td>
//                 <td className="border border-gray-300 p-2">{event.title}</td>
//                 <td className="border border-gray-300 p-2">{event.budget}</td>
//                 <td className="border border-gray-300 p-2">
//                   <input
//                     type="text"
//                     value={increaseAmounts[event.id] || ''}
//                     onChange={(e) => {
//                       const value = parseInt(e.target.value);
//                       setIncreaseAmounts(prevAmounts => ({
//                         ...prevAmounts,
//                         [event.id]: isNaN(value) ? '' : value.toString(), // Convert value to string to remove leading zeros
//                       }));
//                     }}
//                     className="w-20 border border-gray-300 rounded p-2 mr-2"
//                   />
//                   <Button onClick={() => handleIncreaseBudget(event.id)} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full">
//                     Increase
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//             {
//               events.length==0 && <p>No Events Create By You</p>
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

