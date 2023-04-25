import Link from 'next/link';

interface Props extends React.PropsWithChildren {
  href: string;
}

const TextLink = ({ children, href }: Props) => (
  <Link className="font-bold text-sky-100" href={href}>
    {children}
  </Link>
);

export default TextLink;
