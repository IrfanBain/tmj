import Navbar from "../../component/layouts/Navbar"
import Footer from "../../component/layouts/Footer"
import { IoHomeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
export default function BeritaPage() {
    return (
        <>
        
        <Navbar />
        <div className="flex gap-1 mx-16 items-center bg-gray-100 my-8 py-3 px-3 rounded-sm">
                <IoHomeSharp />
                <span className="text-gray-600">
                    / Berita / Judul bertita
                </span>
        </div>
        
        <div className="flex justify-between px-16 gap-14">
            <div className="my-5 w-3/4">
                    <div className="p-2 w-full">
                        <span className="flex gap-2 items-center text-xl font-semibold text-gray-700">Berita Lokal <FaRegPenToSquare /></span>
                    </div>
                    
                    <div className="flex flex-col p-2">
                        <div className="flex flex-col">
                            <h1 className="uppercase font-semibold text-2xl">judul berita Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,</h1>
                            <div className="flex py-2 text-gray-700 gap-10">
                                <span className="flex gap-2 items-center"><FaCalendarAlt /> 17 Agustus 2024</span>
                                <span className="flex gap-2 items-center"><FaUser /> Administrator</span>
                            </div>
                            <div className="flex w-full overflow-hidden rounded-sm">
                                <img src="images/imgbrt.jpg" alt="" />
                            </div>
                            <div className="flex flex-col my-4">
                                <span className="font-semibold">Pekon Tri Mekar Jaya, 10 Agustus 2024 |</span>
                                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem eius, architecto nihil dolorum sit a quos aliquam ut non fuga voluptas. Nam sequi, ratione dolor molestias, recusandae illo quisquam rem ipsum excepturi aliquid libero omnis debitis possimus minima numquam reprehenderit incidunt. Quia, nemo a est itaque adipisci facere porro vero quaerat minima tempora velit doloremque, dicta consequatur illum ab nobis? Quae assumenda, neque totam voluptatem exercitationem quo eum, dolores quia id modi nulla porro fugit laboriosam consequuntur, hic voluptatibus provident ipsum iste quisquam vitae omnis iure magni labore. Velit distinctio voluptatem, numquam, maxime accusamus eius ad incidunt reiciendis alias adipisci itaque facilis ea iste inventore natus! Amet aut, quae, atque quo facilis cumque dolores veritatis, unde omnis fuga alias. Consequatur quasi atque illum aliquid, cum aliquam assumenda perspiciatis saepe modi laborum iste illo corporis hic nobis dicta nisi consequuntur enim cumque similique blanditiis sed doloribus at rem! Culpa amet nulla, accusantium, magni magnam in maxime quae corrupti excepturi porro, nihil vel. Suscipit nisi consectetur qui eveniet assumenda hic cum accusantium ratione quaerat exercitationem, illum quis, consequatur ullam repudiandae. Asperiores temporibus minus repellendus, eos quis animi molestiae! Reiciendis itaque minus repellendus commodi? Animi enim, eos beatae inventore nam libero nulla?</p>
                                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem eius, architecto nihil dolorum sit a quos aliquam ut non fuga voluptas. Nam sequi, ratione dolor molestias, recusandae illo quisquam rem ipsum excepturi aliquid libero omnis debitis possimus minima numquam reprehenderit incidunt. Quia, nemo a est itaque adipisci facere porro vero quaerat minima tempora velit doloremque, dicta consequatur illum ab nobis? Quae assumenda, neque totam voluptatem exercitationem quo eum, dolores quia id modi nulla porro fugit laboriosam consequuntur, hic voluptatibus provident ipsum iste quisquam vitae omnis iure magni labore. Velit distinctio voluptatem, numquam, maxime accusamus eius ad incidunt reiciendis alias adipisci itaque facilis ea iste inventore natus! Amet aut, quae, atque quo facilis cumque dolores veritatis, unde omnis fuga alias. Consequatur quasi atque illum aliquid, cum aliquam assumenda perspiciatis saepe modi laborum iste illo corporis hic nobis dicta nisi consequuntur enim cumque similique blanditiis sed doloribus at rem! Culpa amet nulla, accusantium, magni magnam in maxime quae corrupti excepturi porro, nihil vel. Suscipit nisi consectetur qui eveniet assumenda hic cum accusantium ratione quaerat exercitationem, illum quis, consequatur ullam repudiandae. Asperiores temporibus minus repellendus, eos quis animi molestiae! Reiciendis itaque minus repellendus commodi? Animi enim, eos beatae inventore nam libero nulla?</p>
                                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorem eius, architecto nihil dolorum sit a quos aliquam ut non fuga voluptas. Nam sequi, ratione dolor molestias, recusandae illo quisquam rem ipsum excepturi aliquid libero omnis debitis possimus minima numquam reprehenderit incidunt. Quia, nemo a est itaque adipisci facere porro vero quaerat minima tempora velit doloremque, dicta consequatur illum ab nobis? Quae assumenda, neque totam voluptatem exercitationem quo eum, dolores quia id modi nulla porro fugit laboriosam consequuntur, hic voluptatibus provident ipsum iste quisquam vitae omnis iure magni labore. Velit distinctio voluptatem, numquam, maxime accusamus eius ad incidunt reiciendis alias adipisci itaque facilis ea iste inventore natus! Amet aut, quae, atque quo facilis cumque dolores veritatis, unde omnis fuga alias. Consequatur quasi atque illum aliquid, cum aliquam assumenda perspiciatis saepe modi laborum iste illo corporis hic nobis dicta nisi consequuntur enim cumque similique blanditiis sed doloribus at rem! Culpa amet nulla, accusantium, magni magnam in maxime quae corrupti excepturi porro, nihil vel. Suscipit nisi consectetur qui eveniet assumenda hic cum accusantium ratione quaerat exercitationem, illum quis, consequatur ullam repudiandae. Asperiores temporibus minus repellendus, eos quis animi molestiae! Reiciendis itaque minus repellendus commodi? Animi enim, eos beatae inventore nam libero nulla?</p>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className="flex flex-col  my-5 w-1/4 ">
                <div className="p-2 border-b border-blue-600 w-full h-fit">
                        <Link className="flex gap-2 items-center text-xl font-semibold text-blue-600">Artikel Lainnya </Link>
                </div>
                <div className='flex flex-col'>
                    <Link className="flex flex-col gap-2 mt-5 hover:text-blue-600">
                        <div className="w-full">
                        <img src="images/tes-brt.jpg"  alt="" width={'70%'} />
                        </div>
                        <div className="flex flex-col text-justify w-full">
                            <h2 className="font-bold text-blue-500 text-sm  ">Judul Konten</h2>
                            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem rem possimus sunt ratione tempora iusto corporis nequ</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
        
        </>
    )
}