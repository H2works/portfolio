import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <MainLayout darkMode={false} colorModifier="dark">
      <h1 className="display-1 fw-bold">Uuuups, something is broken...</h1>
      <p className="lead">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn btn-dark btn-xl shadow me-1 mb-5">
        Go home!
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </Link>
    </MainLayout>
  );
}
