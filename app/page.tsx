import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="hero">
      <div>
        <p className="muted">Open Learning Infrastructure</p>
        <h1>Build and manage world-class learning experiences.</h1>
        <p>
          Open LMX helps teams design programs, run cohorts, assess learners,
          and measure outcomes.
        </p>
        <br />
        <Link href="/dashboard" className="button">Open Dashboard</Link>
      </div>
    </main>
  );
}
