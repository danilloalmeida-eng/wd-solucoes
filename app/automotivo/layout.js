import NavbarAuto from '@/components/NavbarAuto';
import Footer from '@/components/Footer';

export default function AutoLayout({ children }) {
  return (
    <>
      <NavbarAuto />
      <main>{children}</main>
      <Footer />
    </>
  );
}
