import { IoMdArrowDroprightCircle } from "react-icons/io"
import { Link } from "react-router-dom"

export default function Berita() {
    return(
        <>
            <div className="my-5 w-3/4">
                <div className="p-2 border-b border-blue-600 w-full">
                    <Link 
                    to={'/berita'}
                    className="flex gap-2 items-center text-xl font-semibold text-blue-600">Berita Terkini <IoMdArrowDroprightCircle /></Link>
                </div>
                <div className="flex justify-between gap-8 my-8">
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
                </div>
                <div className="flex justify-between gap-8 my-8">
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
                </div>
                <div className="flex justify-between gap-8 my-8">
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
                </div>
            </div>
        </>
    )
}