export function Calendar({ activity }) {
    // Composant simplifié : tu pourras y ajouter l'affichage des plages horaires et clics
    return (
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Disponibilités pour : {activity.name}</h2>
        <p>⚠️ Composant calendrier à intégrer ici (ex: grille de jours/heures avec clics)</p>
      </div>
    );
  }
  