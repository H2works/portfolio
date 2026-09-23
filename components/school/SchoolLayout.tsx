import SchoolHeader from './SchoolHeader';
import SchoolFooter from './SchoolFooter';
import CompareBar from './CompareBar';

export default function SchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="school-portal-body">
      <SchoolHeader />
      <main className="flex-grow-1">{children}</main>
      <CompareBar />
      <SchoolFooter />
    </div>
  );
}
