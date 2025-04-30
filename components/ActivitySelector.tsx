export function ActivitySelector({ activities, onSelect }) {
    return (
      <select onChange={e => onSelect(activities.find(a => a.id === e.target.value))} className="p-2 rounded">
        <option value="">Sélectionner une activité</option>
        {activities.map(a => (
          <option key={a.id} value={a.id}>{a.name}</option>
        ))}
      </select>
    );
  }
  