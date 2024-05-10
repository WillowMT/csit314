import { PropertyInterface } from '@/utils/demo'
import { Button, Chip } from '@nextui-org/react'

export default function PropertyCard({ property }: { property: PropertyInterface }) {
    return (
        <div className="flex border m-4 rounded-lg w-fit md:w-full overflow-hidden md:h-[300px] flex-col md:flex-row mx-auto">
            <img className=' max-w-[400px] object-contain' src={property.imageUrl} alt="Property Image" />
            <div className=' w-full'>
                <div className=" p-8 flex flex-col min-h-[300px]">
                    <div className='flex-grow space-y-4 mb-4'>
                        <div className=' flex flex-col md:flex-row space-y-4 md:space-y-0'>
                            <span className=' mr-auto text-xl md:text-3xl'>{property.name}</span>
                            <Chip color="primary">{property.propertyType}</Chip>
                        </div>
                        <p>Address: {property.address}</p>
                        <p className=' max-w-[400px]'>Details: {property.squareFt} sq.ft</p>
                        <div className="property-details space-x-4 text-slate-800/60">
                            <div className='flex space-x-2'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M11.025 21v-2.15q-1.325-.3-2.287-1.15t-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825t1.937.625q1.025 0 1.738-.462t.712-1.438q0-.875-.55-1.387t-2.55-1.163q-2.15-.675-2.95-1.612t-.8-2.288q0-1.625 1.05-2.525t2.15-1.025V3h2v2.1q1.25.2 2.063.913t1.187 1.737l-1.85.8q-.3-.8-.85-1.2t-1.5-.4q-1.1 0-1.675.488T9.825 8.65q0 .825.75 1.3t2.6 1q1.725.5 2.613 1.588t.887 2.512q0 1.775-1.05 2.7t-2.6 1.15V21z" /></svg>
                                </span>
                                <span className=' inline-flex place-items-center'>
                                    {property.price} USD
                                </span>
                            </div>
                            <div className='flex space-x-2'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 18v-5q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v5q0 .425-.288.713T21 19t-.712-.288T20 18v-1H4v1q0 .425-.288.713T3 19t-.712-.288T2 18m11-8h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z" /></svg>
                                </span>
                                <span className=' inline-flex place-items-center'>
                                    {property.bedroom}
                                </span>
                            </div>
                            <div className='flex space-x-2'>
                                <span className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M7 9q-.825 0-1.412-.587T5 7t.588-1.412T7 5t1.413.588T9 7t-.587 1.413T7 9M5 22q-.425 0-.712-.288T4 21q-.825 0-1.412-.587T2 19v-5q0-.425.288-.712T3 13h2v-.75q0-.95.65-1.6t1.6-.65q.5 0 .925.2t.775.55l1.4 1.55q.2.2.388.375t.412.325H18V4.85q0-.35-.25-.6t-.6-.25q-.15 0-.288.063t-.262.187L15.35 5.5q.125.425.05.838t-.3.762l-2.75-2.8q.35-.225.75-.288t.8.088l1.25-1.25q.4-.4.913-.625T17.15 2q1.2 0 2.025.825T20 4.85V13h1q.425 0 .713.288T22 14v5q0 .825-.587 1.413T20 21q0 .425-.288.713T19 22zm-1-3h16v-4H4zm0 0h16z" /></svg>
                                </span>
                                <span className=' inline-flex place-items-center'>
                                    {property.bathroom}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <Button color='secondary'>Edit</Button>
                        <Button color="danger">Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}