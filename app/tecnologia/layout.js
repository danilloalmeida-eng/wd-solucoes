import NavbarTech from '@/components/NavbarTech';
import Footer from '@/components/Footer';

export default function TechLayout({ children }) {
  return (
    <>
      <NavbarTech />
      <main>{children}</main>
      <Footer />
    </>
  );
}
