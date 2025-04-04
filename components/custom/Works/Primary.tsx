import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Featured from './Featured'
import { DeveloperProject } from '@/types/works'
import Link from 'next/link'
import { ArrowRight, Tag } from 'lucide-react'
import FallbackImage from '../FallbackImg'
import Image from 'next/image'


export default function Primary({ items }: { items: DeveloperProject[] }) {

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

            {nonFeaturedItems.map((item, index) => (
                <div key={index}><div className="w-full px-4 py-20 lg:py-40">
                    <div className="container mx-auto border rounded-lg py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between ">
                            <div className="flex gap-4 flex-col max-w-xl">
                                <div>
                                    <Badge variant="outline" className="py-1.5 text-base font-semibold px-4 badge ">
                                        <Tag className="size-3 mr-1 " />{item.category}
                                    </Badge>
                                </div>
                                <div className="flex gap-4 flex-col">
                                    <h2 className="text-3xl md:text-5xl  font-semibold tracking-tighter leading-none hover:opacity-70 ">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg text-black/85 dark:text-white/85 leading-relaxed font-medium">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1  pt-10">
                                        {item.technologies && item.technologies.map((tag, index) =>
                                            <Badge key={index}
                                                variant={'outline'}
                                                className="badge border-2 border-black/40 dark:border-white/40 px-4 py-1.5 rounded-full text-sm bg-transparent transition-transform cursor-pointer hover:bg-foreground hover:text-primary-foreground"
                                            >
                                                {tag}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <Link
                                        href={`/works/${item.slug}`}
                                        className="inline-flex justify-end lg:justify-start items-center gap-2 text-black dark:text-white font-semibold text-lg mt-8 transition-all duration-300 group hover:underline underline-offset-4"
                                    >
                                        Explore Project
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                {item.images.thumbnail ? <Image
                                    src={item.images.thumbnail}
                                    alt={item.title}
                                    className="object-cover rounded-lg transition-transform  h-full group-hover:scale-105"
                                    width={500}
                                    height={400}
                                    priority
                                /> : <FallbackImage alt={item.title} className="object-cover rounded-lg transition-transform w-96 h-full group-hover:scale-105" />}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
