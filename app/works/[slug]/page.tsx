import projects from '@/public/assets/data/works/projects.json'

export async function generateStaticParams() {
    return projects.map((post) => ({
        slug: post.slug,
    }))
}

export default async function Page({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.description}</p>
            <img
                src={project.images.thumbnail}
                alt={project.title}
                className="w-full max-w-xl mb-6 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">Detailed Description</h2>
            <p className="mb-4">{project.detailedDescription}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside mb-4">
                {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
            <ul className="list-disc list-inside mb-4">
                {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Challenges</h3>
            <ul className="list-disc list-inside mb-4">
                {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Team</h3>
            <ul className="list-disc list-inside mb-4">
                {project.team.map((member, index) => (
                    <li key={index}>
                        {member.name} – {member.role} ({member.responsibilities})
                    </li>
                ))}
            </ul>

            <div className="mt-8">
                <a
                    href={project.links.live}
                    className="text-blue-600 hover:underline mr-4"
                    target="_blank"
                >
                    Live Site
                </a>
                <a
                    href={project.links.source}
                    className="text-blue-600 hover:underline mr-4"
                    target="_blank"
                >
                    Source Code
                </a>
                <a
                    href={project.links.demoVideo}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                >
                    Demo Video
                </a>
            </div>
        </div>
    )
}
