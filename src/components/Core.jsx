// import Footer from './Footer';
import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router';

export default function Core() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
