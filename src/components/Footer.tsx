import Image from 'next/image';
import { LinkedinIcon } from './icons';
import Link from 'next/link';
import { useEffect } from 'react';

const Footer = () => {
  // Email bot spam protection
  useEffect(() => {
    const mail = document.getElementById('mail');
    if (!mail) {
      return;
    }

    mail.setAttribute(
      'href',
      `mailto:${mail.dataset.add}@${mail.dataset.domain}.${mail.dataset.end}`
    );
    mail.textContent = `${mail.dataset.add}@${mail.dataset.domain}.${mail.dataset.end}`;
  }, []);

  return (
    <footer className="flex text-center text-sm items-center">
      <Link
        id="mail"
        className="mr-2"
        href=""
        data-add="joel.h.bergman"
        data-domain="gmail"
        data-end="com"
      />
      -
      <Link href="https://github.com/joelbman/">
        <Image
          src="/img/github-mark-white.svg"
          alt="GitHub logo"
          width={24}
          height={24}
          className="mx-2"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/joelbman/">
        <LinkedinIcon />
      </Link>
    </footer>
  );
};

export default Footer;
