import React, { useState } from 'react';

type AddActivityModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, author: string) => void;
};

export function AddActivityModal({ isOpen, onClose, onCreate }: AddActivityModalProps) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // Reset previous errors
    setError(null);
    
    // Validate inputs
    if (!name.trim()) {
      setError("Le nom de l'activité est requis");
      return;
    }
    
    if (!author.trim()) {
      setError("Le nom de l'auteur est requis");
      return;
    }
    
    // Create activity and reset form
    onCreate(name, author);
    setName('');
    setAuthor('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-xl space-y-4">
        <h2 className="text-lg font-bold">Nouvelle activité</h2>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-2 text-red-700 text-sm">
            {error}
          </div>
        )}
        
        <input 
          className="w-full border p-2" 
          placeholder="Nom de l'activité" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        
        <input 
          className="w-full border p-2" 
          placeholder="Pseudo de l'auteur" 
          value={author} 
          onChange={e => setAuthor(e.target.value)} 
        />
        
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Annuler</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-3 py-1 rounded">Créer</button>
        </div>
      </div>
    </div>
  );
}

