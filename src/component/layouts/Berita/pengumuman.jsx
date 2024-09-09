import { Link } from 'react-router-dom'
import { TfiAnnouncement } from "react-icons/tfi"
export default function Pengumuman() {
    return (
        <>
            <div className="flex flex-col  my-5 w-1/4 ">
                <div className="p-2 border-b border-blue-600 w-full h-fit">
                        <Link className="flex gap-2 items-center text-xl font-semibold text-blue-600">Pengumuman <TfiAnnouncement /></Link>
                </div>
                <div className='flex flex-col py-5 gap-y-5'>
                    <Link to={'#'}
                    className="flex bg-blue-500 rounded-sm px-3 py-2 font-bold text-white cursor-pointer">
                        Vaksin Booster
                    </Link>
                    <Link to={'#'}
                    className="flex bg-blue-500 rounded-sm px-3 py-2 font-bold text-white cursor-pointer">
                        Vaksin Booster
                    </Link>
                    <Link to={'#'}
                    className="flex bg-blue-500 rounded-sm px-3 py-2 font-bold text-white cursor-pointer">
                        Vaksin Booster
                    </Link>
                </div>
            </div>
        </>
    )
}