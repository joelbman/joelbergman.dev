import PageSection from '@/components/PageSection';
import { Tag, TagList } from '@/components/Tag';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps extends React.PropsWithChildren {
  title: string;
  url: string;
  githubUrl?: string;
  imgSrc: string;
  tags: string[];
}

const Project = ({ title, url, githubUrl, children, imgSrc, tags }: ProjectProps) => (
  <div className="flex flex-col items-center mt-10 bg-gray-900 border border-gray-900">
    <figure className="w-full">
      <Link href={url} target="_blank">
        <Image
          src={'/img/projects/' + imgSrc}
          width={800}
          height={320}
          alt={'Screenshot of project ' + title}
        />
      </Link>
    </figure>
    <section className="text-left p-4 relative">
      {githubUrl && (
        <Link href={githubUrl} target="_blank">
          <Image
            src="/img/github-mark-white.svg"
            width={24}
            height={24}
            alt="GitHub logo"
            className="absolute right-5 top-5"
          />
        </Link>
      )}

      <Link href={url} target="_blank">
        <h3 className="font-robotomono text-xl text-center mb-4 sm:text-2xl">{title}</h3>
      </Link>
      {children}
    </section>
    <TagList className="border-t border-gray-800 pt-4 w-full">
      {tags.map((tag) => (
        <Tag bg="medium" key={tag}>
          {tag}
        </Tag>
      ))}
    </TagList>
  </div>
);

const Projects = () => (
  <div className="flex flex-col items-center">
    <PageSection>
      <h2>Projects</h2>
      Here you can find some personal and professional projects I&apos;ve worked on. Most of my
      professional work has involved non-public facing web applications so unfortunately I
      can&apos;t list them here.
      <Project
        title="instagrid.co"
        url="https://instagrid.co/"
        tags={['React', 'Next.js', 'TypeScript', 'Shopify', 'Contentful', 'Vercel']}
        imgSrc="instagrid.png"
      >
        <p className="mb-4">
          Originally this project started out as developing an online store for instagrid. Together
          with my co-workers at RARE we decided on a React + Tailwind + Shopify Storefront API
          technology stack.
        </p>

        <p>
          Later on we also reworked instagrid&apos;s whole website, where we moved on to use Next.js
          instead of a CRA wrap for server-sided rendering while the content is fetched from
          Contentful. We also decided to use styled-components with Material UI instead of Tailwind
          for styling.
        </p>
      </Project>
      <Project
        title="KZStats"
        url="https://kzstats.com/"
        tags={['React', 'TypeScript', 'Express', 'Tailwind', 'Discord.js', 'socket.io']}
        imgSrc="kzstats.png"
        githubUrl="https://github.com/joelbman/kzstats/"
      >
        <p className="mb-4">
          A very long lasting hobby project that has gone through many iterations and served as a
          playground for me to learn new technologies as well as create something useful for other
          people. The purpose of this website was originally to provide a way for Counter-Strike KZ
          mod players to view rankings outside of the game itself.
        </p>
        <p>
          The website started out as PHP & AngularJS based and later on I wanted to learn React,
          TypeScript, Express & Tailwind so I rewrote the site using those technologies. The
          codebase is not very clean or elegant for that reason. With the rework I also added a
          bunch of new features, did a layout revamp and switched the site to use the now-available
          public API (which unfortunately slowed down the site) instead of a straight database
          connection.
        </p>
      </Project>
      <Project
        title="FFXIV Eco"
        url="https://ffxiveco.vercel.app/"
        tags={['React', 'TypeScript', 'Tailwind', 'Vercel']}
        imgSrc="ffxiveco.png"
        githubUrl="https://github.com/joelbman/ffxiveco/"
      >
        <p>
          The purpose of this project was to create a way to calculate crafting costs and profits
          for Final Fantasy XIV Online. It uses the Universalis API to fetch item prices based on
          the selected realm. I chose this tech stack because it allowed me to spin up the project
          as quickly as possible.
        </p>
      </Project>
      <Project
        title="joelbergman.dev"
        url="/"
        tags={['React', 'TypeScript', 'Tailwind', 'Vercel']}
        imgSrc="joelbergmandev.png"
        githubUrl="https://github.com/joelbman/joelbergman.dev/"
      >
        <p>
          This looks oddly familiar. Similar to the FFXIV Eco tech stack above, I chose this stack
          to be able to quickly create a portfolio site for myself. This site was created in less
          than two days.
        </p>
      </Project>
    </PageSection>
  </div>
);

export default Projects;
