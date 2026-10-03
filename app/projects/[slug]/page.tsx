import { allProjectsData } from "../../data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return allProjectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectSinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
