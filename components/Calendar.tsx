type Activity = {
  id: string;
  name: string;
  author: string;
};

type CalendarProps = {
  activity: Activity;
};

export function Calendar({ activity }: CalendarProps) {
  if (!activity) return <div>Aucune activité sélectionnée</div>;
  
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Disponibilités pour : {activity.name}</h2>
      <p className="text-gray-600">Créé par : {activity.author}</p>
      <p className="mt-4">⚠️ Composant calendrier à intégrer ici (ex: grille de jours/heures avec clics)</p>
    </div>
  );
}
