import { projects } from "@/data/home";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  return <ProjectDetailContent slug={slug} />;
}
