import Link from 'next/link';
import { DocumentIcon, HomeIcon, ToolIcon } from './icons';

interface NavItemProps extends React.PropsWithChildren {
  url: string;
  icon: React.ReactElement;
  active?: boolean;
}

const NavItem = ({ url, children, icon }: NavItemProps) => (
  <Link
    href={url}
    className="flex items-center justify-center text-center font-robotomono rounded-xl p-2 px-4 bg-sky-900 mr-2 hover:bg-sky-700 hover:underline"
  >
    <figure className="mr-2">{icon}</figure>
    {children}
  </Link>
);

const Navigation = () => {
  return (
    <nav className="flex my-10">
      <NavItem url="/" icon={<HomeIcon />}>
        Home
      </NavItem>
      <NavItem url="/projects" icon={<ToolIcon />}>
        Projects
      </NavItem>
      <NavItem url="/cv" icon={<DocumentIcon />}>
        CV
      </NavItem>
    </nav>
  );
};

export default Navigation;
