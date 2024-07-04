import { Icons } from '@/components/core';
import BackgroundShape from '@/components/core/Background';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { HOME_CARD } from '../static';

export default function Home() {
    return (
        <div className='relative min-h-dvh'>
            <section className='container'>
                <BackgroundShape />
                <div className='pb-10 pt-16 md:pt-24'>
                    <div className='flex justify-center'>
                        <Link
                            href='https://github.com/rakib-siddiki?tab=repositories'
                            className='mb-7 inline-flex items-center justify-between rounded-full bg-zinc-100 px-1 py-1 pr-4 text-sm text-gray-700 shadow transition duration-300 hover:bg-zinc-200'
                            role='alert'
                        >
                            <span className='mr-3 rounded-full bg-gray-800 px-4 py-1.5 text-xs text-white'>
                                New
                            </span>
                            <span className='text-sm font-medium'>
                                Rakib {"Siddiki's"} All new Apps
                            </span>
                            <Icons.ChevronRight />
                        </Link>
                    </div>
                    <div className='mx-auto mt-5 max-w-2xl text-center'>
                        <h1 className='block text-4xl font-bold text-gray-800 dark:text-neutral-200 md:text-5xl lg:text-6xl'>
                            AI Content
                            <span className='bg-gradient-to-tl from-violet-600 to-indigo-500 bg-clip-text text-transparent'>
                                Generator
                            </span>
                        </h1>
                    </div>

                    <div className='mx-auto mt-5 max-w-3xl text-center'>
                        <p className='text-lg font-medium text-gray-600 dark:text-neutral-400'>
                            Revolutionize your content creation with our AI-powered app, delivering
                            engaging and high-quality text in seconds.
                        </p>
                    </div>

                    <div className='mt-8 flex justify-center gap-3'>
                        <Link
                            className='inline-flex items-center justify-center gap-x-1 rounded-md border border-transparent bg-gradient-to-tl from-violet-600 to-indigo-500 px-4 py-3 text-center text-sm font-medium text-white hover:from-indigo-500 hover:to-violet-600 focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-offset-gray-800'
                            href='/dashboard'
                        >
                            Get started
                            <Icons.ChevronRight className='size-4' />
                        </Link>
                    </div>
                </div>
                <div className='grid h-full place-items-center gap-5 pb-10 lg:grid-cols-4'>
                    {HOME_CARD.map(({ id, icon, title, description, href }) => (
                        <Card
                            key={id}
                            className='h-full max-w-md transition duration-300 hover:scale-105'
                        >
                            <Link href={href}>
                                <CardHeader className='pb-0'>
                                    <div className='flex size-12 items-center justify-center rounded-xl bg-violet-600'>
                                        {Icons[icon as keyof typeof Icons]({
                                            className: 'text-white',
                                        })}
                                    </div>
                                    <CardTitle className='text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-400'>
                                        {title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='mt-1 text-gray-600 dark:text-neutral-400'>
                                        {description}
                                    </CardDescription>
                                    <CardFooter className='p-0'>
                                        <span className='mt-2 inline-flex items-center gap-x-1.5 text-sm font-medium text-violet-600 decoration-2 group-hover:underline'>
                                            Learn more
                                            <Icons.ChevronRight className='size-4' />
                                        </span>
                                    </CardFooter>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
