import React from 'react';
'use client'
import { useEffect, useState } from 'react';
import { Calendar } from '@/components/Calendar';
import { ActivitySelector } from '@/components/ActivitySelector';
import { AddActivityModal } from '@/components/AddActivityModal';

type Activity = {
    id: string;
    name: string;
    author: string;
};

export default function Home() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('/api/activities')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch activities');
                return res.json();
            })
            .then(setActivities)
            .catch(console.error);
    }, []);

    // Reset selectedActivity if it is no longer in the activities list
    useEffect(() => {
        if (
            selectedActivity &&
            !activities.find(a => a.id === selectedActivity.id)
        ) {
            setSelectedActivity(null);
        }
    }, [activities, selectedActivity]);

    const handleNewActivity = async (name: string, author: string) => {
        try {
            const res = await fetch('/api/activities', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, author })
            });
            if (!res.ok) throw new Error('Failed to create activity');
            const data: Activity = await res.json();
            setActivities(prev => [...prev, data]);
            setSelectedActivity(data);
            setShowModal(false);
        } catch (err) {
            console.error(err);
            // Optionally show an error message to the user
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <ActivitySelector
                    activities={activities}
                    onSelect={setSelectedActivity}
                />
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    + Nouvelle activité
                </button>
            </div>
            {selectedActivity && <Calendar activity={selectedActivity} />}
            <AddActivityModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onCreate={handleNewActivity}
            />
        </div>
    );
}
