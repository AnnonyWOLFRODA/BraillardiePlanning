'use client'
import { useEffect, useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { ActivitySelector } from '@/components/ActivitySelector';
import { AddActivityModal } from '@/components/AddActivityModal';

export default function Home() {
    const [activities, setActivities] = useState<any[]>([]);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('/api/activities').then(res => res.json()).then(setActivities);
    }, []);

    const handleNewActivity = async (name, author) => {
        const res = await fetch('/api/activities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, author })
        });
        const data = await res.json();
        setActivities([...activities, data]);
        setSelectedActivity(data);
        setShowModal(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <ActivitySelector activities={activities} onSelect={setSelectedActivity} />
                <button onClick={() => setShowModal(true)} className="bg-green-500 text-white px-4 py-2 rounded">+ Nouvelle activité</button>
            </div>
            {selectedActivity && <Calendar activity={selectedActivity} />}
            <AddActivityModal isOpen={showModal} onClose={() => setShowModal(false)} onCreate={handleNewActivity} />
        </div>
    );
}
