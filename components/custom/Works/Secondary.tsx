
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Featured from './Featured'

export default function Secondary() {
    return (
        <div>
            <Featured title='k;jhasdkh;dfbksdbfsdbfdbb dsfbsd sdf sdfob'desc='he;;sakdjfsdad sad;fnds'category='tech'linkurl='https://hytek.org.in'img='/assets/images/avatar.jpeg'imgdesc='sdsadsad' tags={['hello','a']} />
            {Array.from({ length: 10 }, (_, index) => (
                <div key={index}><div className="w-full py-20 lg:py-40">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
                            <div className="flex gap-4 flex-col">
                                <div>
                                    <Badge variant="outline">We&apos;re live!</Badge>
                                </div>
                                <div className="flex gap-4 flex-col">
                                    <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                                        This is the start of something!
                                    </h1>
                                    <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                        Managing a small business today is already tough. Avoid further
                                        complications by ditching outdated, tedious trade methods. Our
                                        goal is to streamline SMB trade, making it easier and faster than
                                        ever.
                                    </p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <Button size="lg" className="gap-4" variant="outline">
                                        Jump on a call
                                    </Button>
                                    <Button size="lg" className="gap-4">
                                        Sign up here
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="bg-muted rounded-md aspect-square"></div>
                                <div className="bg-muted rounded-md row-span-2"></div>
                                <div className="bg-muted rounded-md aspect-square"></div>
                            </div>
                        </div>
                    </div>
                </div></div>
            ))}
        </div>
    )
}
