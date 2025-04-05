import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link';
import { GithubIcon, InstaIcon, LinkedinIcon, XIcon } from "@/components/custom/icon";
import { Eye, Mail, MapPin, Phone } from 'lucide-react';
import { ContactInformation, PersonalInfo, ProfessionalSummary, SocialMediaAndNetworks } from '@/types/about';

const Info = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
    <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
        <Icon className="w-5 h-5 text-black dark:text-white" />
        <span className="font-medium">{text}</span>
    </div>
);

const LinkIcon = ({ href, Icon }: { href: string; Icon: React.ElementType }) => (
    <Link
        href={href}
        target="_blank"
        className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-black dark:hover:bg-black hover:text-white transition-colors duration-300 shadow-md border border-zinc-200 dark:border-zinc-800"
        aria-label={`Link to ${href}`}
    >
        <Icon className="w-6 h-6" />
    </Link>
);
interface Left {
    personal_info: PersonalInfo;
    professional_summary: ProfessionalSummary;
    social_media_and_networks: SocialMediaAndNetworks;
    contact_information:ContactInformation;
}

export default function Left({ personal_info, social_media_and_networks,professional_summary,contact_information }: Left) {
    return (
        <div className="profile-section lg:col-span-4 lg:sticky lg:top-16">
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
                <Image
                    width={400}
                    height={400}
                    src="/assets/images/avatar.jpeg"
                    alt={personal_info.full_name}
                    className="object-cover w-full transition-transform duration-300 hover:scale-105 zincscale"
                    priority
                />
            </div>
            <div className="space-y-6">
                <div>
                    <Badge
                        variant="outline"
                        className="mb-3 bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800"
                    >
                        {personal_info.title}
                    </Badge>
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-2">{personal_info.full_name}</h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">{professional_summary.current_position}</p>
                </div>
                <div className="space-y-4">
                    <Info icon={MapPin} text={personal_info.location} />
                    <Info icon={Mail} text={contact_information.email} />
                    <Info icon={Phone} text={contact_information.phone} />
                    <Link className="flex items-center gap-3 underline underline-offset-4 hover:text-foreground dark:hover:text-foreground text-sm text-zinc-600 dark:text-zinc-400 mb-3" href={'/assets/resume.pdf'} target="_blank">  <Eye className="size-5" />
                        <span className="font-medium">View Resume</span></Link>
                </div>
                <div className="flex gap-4">
                    {social_media_and_networks.github && (
                        <LinkIcon href={social_media_and_networks.github} Icon={GithubIcon} />
                    )}
                    {social_media_and_networks.twitter_x && (
                        <LinkIcon href={social_media_and_networks.twitter_x} Icon={InstaIcon} />
                    )}
                    {social_media_and_networks.linkedin && (
                        <LinkIcon href={social_media_and_networks.linkedin} Icon={LinkedinIcon} />
                    )}
                    {social_media_and_networks.twitter_x && (
                        <LinkIcon href={social_media_and_networks.twitter_x} Icon={XIcon} />
                    )}
                </div>
            </div>
        </div>
    )
}
