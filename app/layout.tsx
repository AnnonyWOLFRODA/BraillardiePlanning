export default function RootLayout({ children }) {
    return (
      <html lang="fr">
        <body className="bg-gray-100 text-gray-900">
          <div className="max-w-6xl mx-auto p-4">{children}</div>
        </body>
      </html>
    );
  }
  
  