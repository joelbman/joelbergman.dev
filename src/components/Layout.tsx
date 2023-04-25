import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col flex-1 items-center h-full w-3/4">
      <Header />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
