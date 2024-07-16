import Image from 'next/image';

const Teams = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our teams</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600"></p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/phucanh.jpg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Do Phuc Anh</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Managing Director</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/vy.jpg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Nguyen Thao Vy</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">COO / Head of Delivery</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/qa.jpg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Anh Dinh</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Account Manager</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/minh.jpg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Minh Dinh</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Account Manager</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/quang.jpeg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Quang Mau</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Solution Architect</p>
                                </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <Image className="h-16 w-16 scale-150 rounded-full" height={100} width={100} src="/images/khang.jpg" alt=""/>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Khang Nguyen</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">Solution Architect</p>
                                </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Teams;