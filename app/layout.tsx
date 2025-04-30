import React from 'react';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'BraillardiePlanning - Planifiez vos activités',
  description: 'Application de planification pour les activités collectives',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <header className="bg-white shadow-sm py-4">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-xl font-bold text-gray-800">BraillardiePlanning</h1>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4 my-4">{children}</main>
        <footer className="mt-auto py-4 text-center text-sm text-gray-500">
          <div className="max-w-6xl mx-auto px-4">
            BraillardiePlanning &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  );
}

