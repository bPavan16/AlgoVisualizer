"use client"
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';

const socialLinks = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/mrPavanB69',
        icon: null, // Optionally add icon JSX here
    },
    {
        name: 'Github',
        url: 'https://github.com/bPavan16',
        icon: null,
    },
    {
        name:"Medium",
        url: 'https://medium.com/@bPavan16',
        icon: null,
    }
    // Add more socials here
];

const docsLinks = [
    {
        name: 'Docs',
        url: '/',
        external: true,
    },
    {
        name: 'Methodology',
        url: '/',
        external: false,
    },
    // Add more docs/helpful links here
];

export default function SiteFooter() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = async (data: any) => {


    };
    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div
                        className="border-b   py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
                    >
                        <div className="mt-8 space-y-4 lg:mt-0">

                            <div>
                                <h3 className="text-2xl font-medium">Contact Me</h3>
                                <p className="mt-4 max-w-lg">
                                    Have a question, suggestion, or want to collaborate? Send me a message below!
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex w-full flex-col gap-3 rounded-xl border p-4">
                                <Input
                                    {...register('email', { required: true })}
                                    placeholder="Your email address"
                                    type="email"
                                />
                                <Input
                                    {...register('message', { required: true })}
                                    placeholder="Your message"
                                    type="text"
                                />
                                <Button type="submit">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className="py-8 lg:py-16 lg:pe-16">


                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">

                            <div>
                                <p className="font-medium ">Socials</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    {socialLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.url} target="_blank" className="transition hover:opacity-75">
                                                {link.icon ? link.icon : link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium ">Helpful Links</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    {docsLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.url}
                                                target={link.external ? "_blank" : undefined}
                                                rel={link.external ? "noopener noreferrer" : undefined}
                                                className="transition hover:opacity-75"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 border-t   pt-8">
                        

                            <p className="mt-8 text-xs  ">&copy; 2024. <a href="https://github.com/bPavan16" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75">bPavan16</a>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}