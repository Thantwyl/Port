import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';
import CustomCursor from '../ui/CustomCursor.jsx';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-400">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
