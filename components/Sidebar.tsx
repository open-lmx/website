import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/programs', label: 'Programs' },
  { href: '/cohorts', label: 'Cohorts' },
  { href: '/learners', label: 'Learners' },
  { href: '/assessments', label: 'Assessments' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/settings', label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Open LMX</h2>
      <nav aria-label="Application navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </nav>
    </aside>
  );
}
