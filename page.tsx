// src/app/page.tsx

'use client';  
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './styles/globals.css';
// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState<string>('John Doe');

  // User Data as was unable to fetch the api due to technical reasons 
  const users = {
    'John Doe': {
      activity: 'Active (Last Login: 1 hour ago)',
      posts: [
        { title: 'Post 1', views: 120, shares: 30, comments: 15 },
        { title: 'Post 2', views: 80, shares: 20, comments: 5 },
      ],
      analytics: [65, 59, 80, 81, 56, 55],
    },
    'Jane Smith': {
      activity: 'Active (Last Login: 3 hours ago)',
      posts: [
        { title: 'Post 3', views: 200, shares: 50, comments: 25 },
        { title: 'Post 4', views: 150, shares: 40, comments: 10 },
      ],
      analytics: [60, 65, 70, 75, 80, 90],
    },
    'Michael Johnson': {
      activity: 'Inactive (Last Login: 5 days ago)',
      posts: [
        { title: 'Post 5', views: 50, shares: 10, comments: 2 },
        { title: 'Post 6', views: 90, shares: 15, comments: 6 },
      ],
      analytics: [45, 40, 50, 55, 60, 65],
    },
  };

  // Chart Data for the selected user
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: `${selectedUser}'s Engagement`,
        data: users[selectedUser]?.analytics || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `${selectedUser} - User Engagement`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-600">Admin Dashboard</h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {/* User Management Section */}
        <section id="user-management" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">👤 User Management</h2>
          <div className="flex gap-4 mt-4">
            {Object.keys(users).map((user) => (
              <button
                key={user}
                onClick={() => setSelectedUser(user)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {user}
              </button>
            ))}
          </div>
          <p className="mt-4 text-gray-600">{users[selectedUser]?.activity}</p>
        </section>

        {/* Content Moderation Section */}
        <section id="content-moderation" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">📝 Content Moderation</h2>
          <div className="space-y-4 mt-4">
            {users[selectedUser]?.posts.map((post, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600">Views: {post.views}</p>
                <p className="text-gray-600">Shares: {post.shares}</p>
                <p className="text-gray-600">Comments: {post.comments}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">📊 Analytics</h2>
          <div className="w-full h-64 mt-4">
            <Line data={data} options={options} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
