import IncidentList from '@/components/IncidentList';

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Camera Incident Dashboard</h1>
      <IncidentList />
    </main>
  );
}