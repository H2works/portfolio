import EducationHeader from './EducationHeader';
import EducationFooter from './EducationFooter';

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="education-portal-body">
      <EducationHeader />
      <main className="flex-grow-1">{children}</main>
      <EducationFooter />
    </div>
  );
}
