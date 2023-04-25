import { Tag, TagList } from '@/components/Tag';
import TextLink from '@/components/TextLink';
import Image from 'next/image';

const PageSection = ({ children }: React.PropsWithChildren) => (
  <section className="mb-10">{children}</section>
);

const Home = () => (
  <div className="flex flex-col items-center">
    <PageSection>
      <h2>Hello!</h2>
      <div className="flex mb-12">
        <Image
          src="/joel_grayscale.png"
          alt="Joel portrait"
          width={164}
          height={164}
          className="mr-6 rounded-xl border border-gray-900"
        />

        <div className="text-left justify-self-center">
          <p>
            I am Joel, a 30-year-old software developer from Rovaniemi, Finland. I started my
            developer journey as a hobbyist at around age 12, coding websites and IRC bots. Since
            then I&apos;ve dabbled with many programming languages and development fields such as
            game development, ultimately specializing on both front- and backend web development.
          </p>

          <p className="mt-4">
            Other than programming, I mostly spend my time either playing computer games, playing
            the guitar, singing, reading, walking or lifting weights.
          </p>
        </div>
      </div>
    </PageSection>

    <PageSection>
      <h2>Skillset</h2>
      <p>
        Here&apos;s a miscellaneous list of technologies I have experience with. <br />
        Lighter background represents more proficiency. For more information, check out my{' '}
        <TextLink href="/cv">CV</TextLink>!
      </p>

      <section className="flex flex-col mt-6 max-w-[48rem]">
        <TagList>
          <Tag>HTML</Tag> <Tag>CSS</Tag> <Tag>TypeScript</Tag> <Tag>React</Tag> <Tag>NextJS</Tag>{' '}
          <Tag>NodeJS</Tag> <Tag>Express</Tag> <Tag>Vue</Tag> <Tag>Tailwind</Tag> <Tag>Shopify</Tag>{' '}
          <Tag>Contentful</Tag> <Tag>Git</Tag> <Tag>PHP</Tag>
        </TagList>

        <TagList>
          <Tag bg="medium">Python</Tag> <Tag bg="medium">Django</Tag> <Tag bg="medium">Laravel</Tag>{' '}
          <Tag bg="medium">AngularJS</Tag>
        </TagList>

        <TagList>
          <Tag bg="dark">Docker</Tag> <Tag bg="dark">Linux</Tag> <Tag bg="dark">C#</Tag>{' '}
          <Tag bg="dark">Java</Tag>
        </TagList>
      </section>
    </PageSection>

    <PageSection>
      <h2>Contact</h2>I am currently available for both remote positions and freelance projects. The
      fastest and most reliable way to reach me is via email, you can find the address below in the
      footer.
    </PageSection>
  </div>
);

export default Home;
