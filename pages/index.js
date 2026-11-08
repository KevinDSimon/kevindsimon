import Head from 'next/head';
import Link from 'next/link';
import Collage from '../components/collage';
import Contributions from '../components/contributions';
import ExternalArrow from '../components/external-arrow';
import ThemeToggle from '../components/theme-toggle';
import { projects } from '../data/projects';

const playground = [
  { title: 'Dialed Grounds', href: 'https://apps.apple.com/us/app/dialed-grounds/id6760966486', meta: 'App Store' },
  { title: 'Loaded Lie' },
  { title: 'Milk Run' },
  { title: 'Proof' },
];
const featured = [
  { slug: 'tock-manager', label: 'Tock Manager case study' },
  { slug: 'tock-consumer', label: 'Tock Consumer case study' },
  { slug: 'basis-global-search', label: 'Global Search case study', image: 1 },
];

export default function Home() {
  return (
    <div className="Page">
      <Head>
        <title>Kevin Simon</title>
      </Head>
      <ThemeToggle />

      <div className="Column">
        <header className="Header">
          <div>
            <h1>Kevin Simon</h1>
            <p className="Muted">Product Designer</p>
          </div>
          <img src="/images/letter-mark.svg" alt="Kevin Simon letter mark" />
        </header>

        <div className="Intro">
          <p>I turn complex problems into intuitive, beautiful products. Over a decade in, I currently work at American Express.</p>
          <p>My work starts with getting close to the people I'm designing for, exploring widely, and validating ideas early, so teams can build with confidence. Lately I've been using AI to get there sooner, turning early concepts into working products.</p>
        </div>

        <nav className="Links" aria-label="Primary">
          <a className="Link" href="mailto:kevindsimon@gmail.com"><span className="LinkLabel">Email</span></a>
          <a className="Link" href="https://www.linkedin.com/in/kevindsimon/"><span className="LinkLabel">LinkedIn<ExternalArrow /></span></a>
          <a className="Link" href="https://github.com/KevinDSimon"><span className="LinkLabel">GitHub<ExternalArrow /></span></a>
          <a className="Link" href="/static/kevin-simon-resume.pdf"><span className="LinkLabel">Resume</span></a>
        </nav>

        <section className="Group Group--first">
          <h2>Projects</h2>
          {projects.map((p) => (
            <Link className="Row" href={`/${p.slug}`} key={p.slug}>
              <span className="RowTitle"><span className="LinkLabel">{p.title}</span></span>
              <span className="RowMeta">{p.org}</span>
            </Link>
          ))}
        </section>

        <main className="Images Images--home">
          {featured.map(({ slug, label, image = 0 }) => (
            <Link className="Frame" href={`/${slug}`} aria-label={label} key={slug}>
              <img src={projects.find((p) => p.slug === slug).images[image].src} alt="" />
            </Link>
          ))}
        </main>

        <section className="Group">
          <h2>Playground</h2>
          {playground.map(({ title, href, meta }) =>
            href ? (
              <a className="Row" href={href} key={title}>
                <span className="RowTitle">
                  <span className="LinkLabel">{title}</span>
                  <ExternalArrow />
                </span>
                <span className="RowMeta">{meta}</span>
              </a>
            ) : (
              <div className="Row Row--off" key={title}>
                <span className="RowTitle"><span className="LinkLabel">{title}</span></span>
                <span className="RowMeta">Coming soon</span>
              </div>
            )
          )}
          <Contributions />
        </section>
      </div>

      <Collage />

      <div className="Fade Fade--top" aria-hidden="true" />
      <div className="Fade Fade--bottom" aria-hidden="true" />
    </div>
  );
}
