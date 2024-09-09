import Navbar from "../../component/layouts/Navbar"
import Footer from "../../component/layouts/Footer"
import { IoHomeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
export default function BeritaPage() {
    return (
        <>
        
        <Navbar />
        <div className="flex gap-1 mx-16 items-center bg-gray-100 my-8 py-3 px-3 rounded-sm">
                <IoHomeSharp />
                <span className="text-gray-600">
                    / Berita
                </span>
        </div>

        <div className="my-5 w-3/4 mx-16">
                <div className="p-2 border-b border-blue-600 w-full">
                    <Link className="flex gap-2 items-center text-xl font-semibold text-blue-600">Berita Terkini</Link>
                </div>
                <Link 
                to={'/beritaView'}
                className="flex justify-between gap-8 my-8">
                    <div className="w-full relative">
                        <span className="
                        absolute bottom-0 left-0 px-2 py-1 bg-blue-500  text-sm text-white
                        ">
                            07 agustus 2024
                        </span>
                    <img src="images/tes-brt.jpg"  alt="" />
                    </div>
                    <div className="flex flex-col text-justify">
                        <h2 className="font-bold text-blue-500 mb-3 ">Judul Konten</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem possimus sunt ratione tempora iusto corporis neque dicta facere nemo! Quisquam quaerat quas laudantium voluptate voluptatem? In esse excepturi labore nisi distinctio modi id a, nam omnis perspiciatis iste ducimus assumenda voluptas ut iusto? Temporibus praesentium natus cumque voluptatum vitae.</p>
                    </div>
                </Link>
                <Link 
                to={'/beritaView'}
                className="flex justify-between gap-8 my-8">
                    <div className="w-full relative">
                        <span className="
                        absolute bottom-0 left-0 px-2 py-1 bg-blue-500  text-sm text-white
                        ">
                            07 agustus 2024
                        </span>
                    <img src="images/tes-brt.jpg"  alt="" />
                    </div>
                    <div className="flex flex-col text-justify">
                        <h2 className="font-bold text-blue-500 mb-3 ">Judul Konten</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem possimus sunt ratione tempora iusto corporis neque dicta facere nemo! Quisquam quaerat quas laudantium voluptate voluptatem? In esse excepturi labore nisi distinctio modi id a, nam omnis perspiciatis iste ducimus assumenda voluptas ut iusto? Temporibus praesentium natus cumque voluptatum vitae.</p>
                    </div>
                </Link>
                <Link 
                to={'/beritaView'}
                className="flex justify-between gap-8 my-8">
                    <div className="w-full relative">
                        <span className="
                        absolute bottom-0 left-0 px-2 py-1 bg-blue-500  text-sm text-white
                        ">
                            07 agustus 2024
                        </span>
                    <img src="images/tes-brt.jpg"  alt="" />
                    </div>
                    <div className="flex flex-col text-justify">
                        <h2 className="font-bold text-blue-500 mb-3 ">Judul Konten</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem possimus sunt ratione tempora iusto corporis neque dicta facere nemo! Quisquam quaerat quas laudantium voluptate voluptatem? In esse excepturi labore nisi distinctio modi id a, nam omnis perspiciatis iste ducimus assumenda voluptas ut iusto? Temporibus praesentium natus cumque voluptatum vitae.</p>
                    </div>
                </Link>
                
            </div>

        <Footer />
        
        </>
    )
}