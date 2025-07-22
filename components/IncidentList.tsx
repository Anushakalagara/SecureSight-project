'use client';
import useSWR from 'swr';
import IncidentPlayer from './IncidentPlayer';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function IncidentList() {
  const { data, mutate } = useSWR('/api/incidents', fetcher);

  const handleResolve = async (id: number) => {
    await fetch('/api/resolve', {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
    mutate();
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid gap-4">
      {data.map((incident: any) => (
        <div key={incident.id} className="p-4 border rounded">
          <p><strong>Camera:</strong> {incident.cameraId}</p>
          <p><strong>Time:</strong> {new Date(incident.timestamp).toLocaleString()}</p>
          <IncidentPlayer url={incident.videoUrl} />
          <button
            className="mt-2 px-4 py-1 bg-green-600 text-white rounded"
            onClick={() => handleResolve(incident.id)}
            disabled={incident.resolved}
          >
            {incident.resolved ? 'Resolved' : 'Mark as Resolved'}
          </button>
        </div>
      ))}
    </div>
  );
}