import { useState } from 'react';

export function AddActivityModal({ isOpen, onClose, onCreate }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-xl space-y-4">
        <h2 className="text-lg font-bold">Nouvelle activité</h2>
        <input className="w-full border p-2" placeholder="Nom de l'activité" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full border p-2" placeholder="Pseudo de l'auteur" value={author} onChange={e => setAuthor(e.target.value)} />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Annuler</button>
          <button onClick={() => onCreate(name, author)} className="bg-green-500 text-white px-3 py-1 rounded">Créer</button>
        </div>
      </div>
    </div>
  );
}

