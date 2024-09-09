import Footer from "../../component/layouts/Footer";
import Navbar from "../../component/layouts/Navbar";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Pemerintahan() {
    return (
        <>
            <Navbar />
            
            <div className="flex gap-1 mx-16 items-center bg-gray-100 my-8 py-3 px-3 rounded-sm">
                <IoHomeSharp />
                <span className="text-gray-600">
                    / Pemerintahan Desa
                </span>
            </div>

            
            <div className="flex flex-col mx-16">
                <h1 className="text-2xl mb-5 font-semibold text-blue-600">PERANGKAT DESA</h1>
                <div className="flex flex-wrap gap-10 border-b border-gray-200 mb-16 pb-10">
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                    <div className="flex flex-col w-fit bg-blue-700 py-1 shadow-xl rounded-sm">
                        <img src="images/aparat.jpg" alt="" width={'200px'} />
                        <h2 className="text-lg  text-white text-center">Irfan Nurbain </h2>
                        <h2 className="text-sm  text-white text-center">Kepala Desa </h2>
                    </div>     
                </div>
            </div>

            <div className="flex flex-col mx-16">
                <h1 className="text-2xl mb-5 font-semibold text-blue-600">LEMBAGA DESA</h1>
                <div className="flex flex-wrap gap-10  mb-16 pb-10">
                    <div className="relative w-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
                            <thead className="text-xs text-gray-700 uppercase border-b-2 border-gray-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        nama Lembaga
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Alamat Lembaga
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Logo Lembaga
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-1xl uppercase text-gray-700 whitespace-nowrap ">
                                        <Link 
                                        to={''}
                                        className="flex flex-col"
                                        >
                                        Karang taruna
                                        <span className="font-normal text-xs bg-blue-500 w-fit p-1 rounded-sm text-white">
                                            KATAR
                                        </span>
                                        </Link>
                                    </th>
                                    <td className="px-6 py-4">
                                        Pekon Tri Mekar Jaya
                                    </td>
                                    <td className="px-6 py-4">
                                       <img src="images/katar.png" alt="" width={'50px'} />
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th scope="row" className="px-6 py-4 font-medium text-1xl uppercase text-gray-700 whitespace-nowrap ">
                                        <Link 
                                        to={''}
                                        className="flex flex-col"
                                        >
                                        Karang taruna
                                        <span className="font-normal text-xs bg-blue-500 w-fit p-1 rounded-sm text-white">
                                            KATAR
                                        </span>
                                        </Link>
                                    </th>
                                    <td className="px-6 py-4">
                                        Pekon Tri Mekar Jaya
                                    </td>
                                    <td className="px-6 py-4">
                                       <img src="images/katar.png" alt="" width={'50px'} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}