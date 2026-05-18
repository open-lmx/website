import { Sidebar } from '@/components/Sidebar';
import { stats } from '@/lib/sample-data';

export default function DashboardPage() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main">
        <div className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p className="muted">Track learning operations and outcomes.</p>
          </div>
        </div>
        <section className="grid">
          {stats.map((stat) => (
            <div key={stat.label} className="card">
              <p className="muted">{stat.label}</p>
              <h2>{stat.value}</h2>
              <p className="muted">{stat.note}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
