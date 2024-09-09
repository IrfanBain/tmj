import Berita from "./berita";
import Pengumuman from "./pengumuman";


export default function BeritaBar() {
    return(
        <>
        <div className="flex justify-between px-10 gap-14">
            <Berita />
            <Pengumuman />
        </div>
        </>
    )
}