import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col flex-1 items-center h-full w-full sm:w-3/4">
    <Header />
    <Navigation />
    <main className="flex-1 max-w-[48rem] text-center">{children}</main>
    <Footer />
  </div>
);

export default Layout;
