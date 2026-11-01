import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from '../components/theme-toggle';
import { projects } from '../data/projects';

export function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  return {
    props: {
      project: projects[index],
      next: projects[(index + 1) % projects.length],
    },
  };
}

export default function Project({ project, next }) {
  return (
    <div className="Page">
      <Head>
        <title>{`${project.title} · Kevin Simon`}</title>
      </Head>
      <ThemeToggle />

      <div className="Column Project">
        <nav className="Breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">›</span> {project.title}
        </nav>

        <h1>{project.title}</h1>
        <p className="ProjectTag">{project.tag}</p>

        <div className="Label">Goal</div>
        <p>{project.goal}</p>
        <div className="Label">Value</div>
        <p>{project.value}</p>
        <div className="Label">My role</div>
        <p>{project.role}</p>

        {project.impact.length > 0 && (
          <>
            <div className="Label">Impact</div>
            {project.impact.map((m) => (
              <div className="Metric" key={m.label}>
                <span>{m.label}</span>
                <span>{m.value}</span>
              </div>
            ))}
          </>
        )}

        <div className="Images Images--project">
          {project.images.map((image, i) => (
            <div className="Frame" key={i}>
              {image.src ? <img src={image.src} alt={image.alt} loading="lazy" /> : <span>[Screenshot]</span>}
            </div>
          ))}
        </div>

        <p className="Next">
          <span className="Muted">Next</span>
          <Link href={`/${next.slug}`}>{next.title}</Link>
        </p>
      </div>
    </div>
  );
}
