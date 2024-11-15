//src/app/layout.tsx

'use client';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Admin Dashboard</title>
      
      </head>
      <body>
        <div className="min-h-screen bg-gray-100">
         
          <header className="bg-blue-600 text-white py-4">
            <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
          </header>

          <main>{children}</main>

          <footer className="bg-blue-600 text-white py-4 text-center">
            <p>&copy; 2024 Admin Dashboard</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
