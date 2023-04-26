import PageSection from '@/components/PageSection';
import { Tag, TagList } from '@/components/Tag';
import TextLink from '@/components/TextLink';
import Image from 'next/image';

const Home = () => (
  <div className="flex flex-col items-center">
    <PageSection>
      <h2>Hello!</h2>
      <div className="flex  flex-col items-center sm:flex-row">
        <Image
          src="/img/joel_grayscale.png"
          alt="Joel portrait"
          width={164}
          height={164}
          className="mr-0 mb-6 rounded-xl border border-gray-900 sm:mr-6 sm:mb-0"
        />

        <div className="text-left justify-self-center">
          <p>
            I am Joel, a 30-year-old software developer from Rovaniemi, Finland. I specialize in
            building modern web applications, although I&apos;ve dabbled with many programming
            languages and fields over the years. Lately I&apos;ve been working as a freelancer,
            mostly via <TextLink href="https://www.rare.fi/">RARE Agency</TextLink>.
          </p>

          <p className="mt-4">
            Other than programming, I mostly spend my time either playing computer games, playing
            the guitar, singing, reading, taking walks or resistance training.
          </p>
        </div>
      </div>
    </PageSection>

    <PageSection>
      <h2>Skillset</h2>
      <p>
        Here&apos;s a quick list of technologies I have experience working with. <br />
        Lighter background represents more proficiency. For more information, check out my{' '}
        <TextLink href="/cv">CV</TextLink>!
      </p>

      <section className="flex flex-col mt-6 max-w-[48rem]">
        <TagList>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>JavaScript</Tag>
          <Tag>TypeScript</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>Node.js</Tag>
          <Tag>Express</Tag>
          <Tag>Vue</Tag>
          <Tag>SQL</Tag>
          <Tag>Tailwind</Tag>
          <Tag>Shopify</Tag>
          <Tag>Contentful</Tag>
          <Tag>Git</Tag>
          <Tag>PHP</Tag>
        </TagList>

        <TagList>
          <Tag bg="medium">Python</Tag>
          <Tag bg="medium">Django</Tag>
          <Tag bg="medium">Laravel</Tag>
          <Tag bg="medium">AngularJS</Tag>
        </TagList>

        <TagList>
          <Tag bg="dark">Docker</Tag>
          <Tag bg="dark">Linux</Tag>
          <Tag bg="dark">C#</Tag>
          <Tag bg="dark">Java</Tag>
        </TagList>
      </section>
    </PageSection>

    <PageSection>
      <h2>Contact</h2>
      <p>
        I am currently open for both remote job positions and freelance projects. The fastest and
        most reliable way to reach me is via email, you can find the address below in the footer.
      </p>
    </PageSection>
  </div>
);

export default Home;
