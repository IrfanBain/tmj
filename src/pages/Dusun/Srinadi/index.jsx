import Navbar from "../../../component/layouts/Navbar";
import Footer from "../../../component/layouts/Footer";
import { IoHomeSharp } from "react-icons/io5"

export default function DusunSrinadi() {
    return (
        <>
            <Navbar />

                <div className="flex gap-1 mx-16 items-center bg-gray-100 my-8 py-3 px-3 rounded-sm">
                    <IoHomeSharp />
                    <span className="text-gray-600">
                        / Dusun / Srinadi
                    </span>
                </div>

                <div className="flex">
                    
                </div>

            <Footer />
        </>
    )
}