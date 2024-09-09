import { Link } from "react-router-dom";

export default function Dusun() {
    return(
        <>
            <div className="flex bg-gray-50 justify-around px-10 py-8">
                <Link 
                to={'/dusun/srinadi'}
                className="flex flex-col">
                    <div className="flex justify-center">
                    <img src="images/world.png" alt="" width={'70px'} />
                    </div>
                    <span className="text-gray-600">Dusun Srinadi</span>
                </Link>
                <Link className="flex flex-col">
                    <div className="flex justify-center">
                    <img src="images/world.png" alt="" width={'70px'} />
                    </div>
                    <span className="text-gray-600">Dusun Srinadi</span>
                </Link>
                <Link className="flex flex-col">
                    <div className="flex justify-center">
                    <img src="images/world.png" alt="" width={'70px'} />
                    </div>
                    <span className="text-gray-600">Dusun Srinadi</span>
                </Link>
                <Link className="flex flex-col">
                    <div className="flex justify-center">
                    <img src="images/world.png" alt="" width={'70px'} />
                    </div>
                    <span className="text-gray-600">Dusun Srinadi</span>
                </Link>
                <Link className="flex flex-col">
                    <div className="flex justify-center">
                    <img src="images/world.png" alt="" width={'70px'} />
                    </div>
                    <span className="text-gray-600">Dusun Srinadi</span>
                </Link>
            </div>  
        </>
    )
}