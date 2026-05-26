import NavbarPortal from '@/components/NavbarPortal';
import Footer from '@/components/Footer';

export default function ContatoLayout({ children }) {
  return (
    <>
      <NavbarPortal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
