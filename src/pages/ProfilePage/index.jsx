import Navbar from "../../component/layouts/Navbar";
import Footer from "../../component/layouts/Footer";
import { IoHomeSharp } from "react-icons/io5"

export default function ProfilePage() {
    return (
        <>
           <Navbar />
           
           <div className="flex gap-1 mx-16 items-center bg-gray-100 my-8 py-3 px-3 rounded-sm">
                <IoHomeSharp />
                <span className="text-gray-600">
                    / Profile Desa Tri Mekar Jaya
                </span>
            </div>

            <div className="flex flex-col mx-16">
                <div className="flex flex-col border-b border-gray-200 mb-16 pb-10">
                    <h1 className="text-2xl mb-5 font-semibold text-blue-600">PROFILE PEKON TRI MEKAR JAYA</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit facere placeat officiis incidunt quis enim quae aliquam ipsum error quasi voluptatibus nobis soluta perferendis sint, fugiat sequi odit molestiae ab vero vel provident consectetur minima cumque? Autem iure quae, ad unde ipsum accusantium eveniet placeat debitis expedita suscipit? Laborum, soluta rem assumenda commodi quasi similique voluptatum sit magnam saepe. Aut, atque ipsam quisquam laborum provident quos eaque culpa sapiente, corrupti aperiam explicabo, quasi pariatur reprehenderit doloremque non possimus vel quam sed quod enim officiis odit? Mollitia debitis, praesentium exercitationem recusandae placeat dolor consequuntur tempora, distinctio ex voluptate facere cupiditate itaque ratione similique sit dolores enim modi rerum eveniet culpa? Ab eum ipsum magnam architecto ipsa? Eligendi porro quia hic in numquam dicta necessitatibus asperiores, distinctio harum ea quidem autem esse sequi nisi vel fugiat itaque dolorum ex blanditiis velit cupiditate. Iste porro aliquam blanditiis, quasi mollitia facilis eveniet, voluptate perferendis nisi quidem sed incidunt dignissimos quas ducimus atque! Eaque quo quia itaque eos dignissimos nihil odio numquam eius ex sint nulla quae facilis provident, illo excepturi deleniti quam iure optio modi aperiam culpa a ipsam dolorum! Praesentium, soluta. Dolores et, consequuntur doloremque soluta deserunt nostrum animi nam quibusdam asperiores.</p>
                </div>
                <div className="flex flex-col border-b border-gray-200 mb-18 pb-10">
                    <h1 className="text-2xl text-blue-700 font-semibold my-2">KANTOR</h1>
                    <div className="flex flex-col border-l-4 border-gray-300 px-5 py-4">
                        <h1 className="text-gray-600 font-semibold">Desa Tri Mekar Jaya - Kec. Bandar Negeri Suoh - Kab. Lampung Barat</h1>
                        <div className="flex my-2 gap-x-32">
                            <div className="flex flex-col gap-y-3 text-gray-500"> 
                                <span>Alamat</span>
                                <span>Kode Pos</span>
                                <span>No. Telp</span>
                                <span>Fax</span>
                                <span>Email</span>
                                <span>Website</span>
                            </div>
                            <div className="flex flex-col gap-y-3 text-gray-500"> 
                                <span>-+---</span>
                                <span>-----</span>
                                <span>-----</span>
                                <span>-----</span>
                                <span>-----</span>
                                <span>-----</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <Footer />
        </>
    )
}