import BackgroundShape from '@/components/core/Background';
import { ThemeSwitcher } from '@/components/core/ThemeSwitcher';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Home',
};
const Home = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <BackgroundShape />
            <div className='mb-2 flex gap-4'>
                Change theme: <ThemeSwitcher />
            </div>
            <h1 className='text-primary-900 font-merriweather mb-2 text-3xl font-bold'>
                Wellcome
            </h1>
        </div>
    );
};

export default Home;
