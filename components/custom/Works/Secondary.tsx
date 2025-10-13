
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Featured from './Featured'
import { DeveloperProject } from '@/types/works'
import NonFeatured from './NonFeatured'


export default function Secondary({ items }: { items: DeveloperProject[] }) {
    if (!items || items.length === 0) return null

    const featuredItem = items.find(item => item.featured)
    const nonFeaturedItems = items.filter(item => !item.featured)
    return (
        <div>
            {featuredItem && (
                <Featured
                    title={featuredItem.title}
                    desc={featuredItem.description}
                    category={featuredItem.category}
                    linkurl={`/works/${featuredItem.slug}`}
                    img={featuredItem.images.thumbnail || '/assets/images/avatar.jpeg'}
                    tags={featuredItem.technologies}
                />
            )}
            <section>
                {nonFeaturedItems.map((item, index) => (
                    <NonFeatured key={index} item={item} />
                ))}
            </section>
        </div>
    )
}
