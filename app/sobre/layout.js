import NavbarPortal from '@/components/NavbarPortal';
import Footer from '@/components/Footer';

export default function SobreLayout({ children }) {
  return (
    <>
      <NavbarPortal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
