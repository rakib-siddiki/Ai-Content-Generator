import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getData } from '@/app/action/aiOutput';
import { HistoryTableRows } from '.';
const HistoryContainer = async () => {
    const data = await getData();
    return (
        <section className='p-4 shadow-md'>
            <div className='rounded backdrop-blur-sm'>
                <Table className='w-full'>
                    <TableHeader>
                        <TableRow>
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
