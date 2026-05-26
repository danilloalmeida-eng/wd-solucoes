import NavbarFrotas from '@/components/NavbarFrotas';
import Footer from '@/components/Footer';

export default function FrotasLayout({ children }) {
  return (
    <>
      <NavbarFrotas />
      <main>{children}</main>
      <Footer />
    </>
  );
}
