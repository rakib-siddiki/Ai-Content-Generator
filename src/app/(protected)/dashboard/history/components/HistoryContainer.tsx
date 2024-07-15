import { SelectAIOutput } from '@/db/schema';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Error } from '@/components/core/Error';
import { getData } from '@/app/action/aiOutput';
import { HistoryTableRows } from '.';

type IData = SelectAIOutput[] | { error: string };
const HistoryContainer = async () => {
    const data = (await getData()) as IData;
    if ('error' in data) {
        return (
            <h1 className='grid place-items-center text-3xl font-bold text-red-500'>
                {data.error}
            </h1>
        );
    } else if (!data.length) {
        return <Error error='There is no data to show' className='text-violet-500' />;
    }
    return (
        <section className='p-4 shadow-md'>
            <div className='rounded backdrop-blur-sm'>
                <Table className='w-full'>
                    <TableHeader>
                        <TableRow className='*:min-w-32'>
                            <TableHead className='hidden w-[100px] sm:table-cell'>
                                <span className='sr-only'>Image</span>
                            </TableHead>
                            <TableHead>Template Name</TableHead>
                            <TableHead>Your Form input</TableHead>
                            <TableHead className='table-cell'>Total Words</TableHead>
                            <TableHead className='table-cell'>Created at</TableHead>
                            <TableHead>
                                <span className='sr-only'>Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='w-full overflow-x-scroll'>
                        <HistoryTableRows data={data} />
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};
export default HistoryContainer;
