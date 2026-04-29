import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundImage from './BackgroundImage';

interface MainLayoutProps {
  children: React.ReactNode;
  bgimg?: string;
  darkMode?: boolean;
  colorModifier?: string;
}

export default function MainLayout({
  children,
  bgimg,
  darkMode = false,
  colorModifier = 'black',
}: MainLayoutProps) {
  return (
    <div className="h-100 container-fluid position-relative">
      <BackgroundImage imgName={bgimg || ''} />
      <div className="h-100 row d-flex align-items-stretch position-relative z-1">
        <div className={`p-0 ${bgimg ? 'col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-5' : 'col-12'} d-flex align-items-start flex-column shadow position-relative`}>
          <header className="mb-auto py-vh-2 col-12 px-vw-5">
            <Navbar darkMode={darkMode} />
          </header>
          <main className="mb-auto col-12 px-vw-5">
            {children}
          </main>
          <footer className="mb-auto col-12 py-vh-3 px-vw-5">
            <Footer darkMode={darkMode} />
          </footer>
        </div>
        {bgimg && (
          <div
            className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-5 col-xxl-7 bg-cover py-vh-max py-lg-0 bg-black ba-local position-fixed top-0 end-0 z-0 h-100 bg-img"
            data-aos="fade"
          ></div>
        )}
      </div>
    </div>
  );
}
