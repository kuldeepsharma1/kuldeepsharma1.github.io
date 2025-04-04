
export async function generateStaticParams() {
    const posts = await fetch('/api/projects').then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params;
    return <div>My Work: {slug}</div>;
}