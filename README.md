# persist-web-assignment
Admin Dashboard with User Management, Content Moderation, and Analytics

Overview
This project is an Admin Dashboard built with Next.js, Tailwind CSS, and Chart.js. It allows the admin to:
Manage Users: View and select users to manage their activity and posts.
Moderate Content: Review and moderate posts for each user.
View Analytics: Visualize user engagement over time using interactive charts.
The dashboard is designed to be fully responsive, adapting to various screen sizes, and includes sections for user management, content moderation, and data visualization.

Features
User Management:
Select users (e.g., John Doe, Jane Smith, Michael Johnson) to manage their activity and posts.
Displays detailed information on each user's activity and posts.
Content Moderation:
View and moderate content such as posts, views, shares, and comments.
Analytics Visualization:
Visualize user engagement trends with interactive Line charts using Chart.js.
Responsive Design:
Optimized for desktop and mobile devices using Tailwind CSS.

Technologies Used
Next.js: A React framework for building fast and scalable web applications.
Tailwind CSS: A utility-first CSS framework for creating responsive and customizable designs.
Chart.js: A JavaScript library for creating interactive charts.
React: JavaScript library for building user interfaces.

Prerequisites
Before you begin, ensure that you have the following installed on your system:
Node.js (LTS version recommended)
npm (or yarn)

Project Structure
Here’s an overview of the main project files:
pages/index.tsx: The main page of the dashboard, displaying the user management, content moderation, and analytics sections.
styles/globals.css: Global styles including Tailwind CSS utilities and custom styles for the dashboard.
public/: Contains static assets like images, fonts, etc.
components/ (Optional): You can add reusable UI components like buttons, modals, etc.

Customizing
User Data: You can customize the user data in index.tsx by adding more users and adjusting their activity and posts.
Analytics: Update the data in chartData to reflect the analytics data relevant to your application.

