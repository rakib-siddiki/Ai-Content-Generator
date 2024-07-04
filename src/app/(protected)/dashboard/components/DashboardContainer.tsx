import { MobileSidebar, Sidebar, Templates } from '.';

export const DashboardContainer = () => {
    return (
        <section className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
            <Sidebar />
            <div className='flex w-full flex-col'>
                <MobileSidebar />
                <Templates />
            </div>
        </section>
    );
};
