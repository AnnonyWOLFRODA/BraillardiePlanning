import React from 'react';

type Activity = {
  id: string;
  name: string;
  author: string;
};

type ActivitySelectorProps = {
  activities: Activity[];
  onSelect: (activity: Activity | null) => void;
};

export function ActivitySelector({ activities, onSelect }: ActivitySelectorProps) {
  return (
    <select 
      onChange={e => {
        const activityId = e.target.value;
        const selected = activities.find(a => a.id === activityId) || null;
        onSelect(selected);
      }} 
      className="p-2 rounded border"
    >
      <option value="">Sélectionner une activité</option>
      {activities.length > 0 ? (
        activities.map(a => (
          <option key={a.id} value={a.id}>{a.name}</option>
        ))
      ) : (
        <option disabled>Aucune activité disponible</option>
      )}
    </select>
  );
}
