import { Link } from 'react-router-dom'
import { FolderMinusIcon, HomeIcon, DocumentChartBarIcon, CalendarDaysIcon, UserIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from 'react';
export default function DashboardHome() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDate(new Date());
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    let timeOfDay;
    if (currentTime.getHours() < 12) {
      timeOfDay = 'Pagi';
    } else if (currentTime.getHours() < 15) {
      timeOfDay = 'Siang';
    } else if (currentTime.getHours() < 18) {
      timeOfDay = 'Sore';
    } else {
      timeOfDay = 'Malam';
    }
    return(
        <>
            <div className="flex">
                <div className="relative w-1/5">
          <div className="fixed border-r-2 border-gray-50 text-gray-100 bg-gray-800 h-screen w-1/5  p-2">
                <header className="flex items-center justify-center gap-2 mb-4">
                    <Link to={'/'}>
                    <img src="images/logo-lambar.png" alt="" width={'30px'} />
                    </Link>
                    <h1 className="hidden lg:block font-bold sm:text-2xl text-gray-100">TMJ - BNS</h1>
                </header>
                
                <div className="flex flex-col justify-center mt-10  lg:mx-5">
                    <span className="text-sm lg:text-xl font-sans font-semibold mb-3">PAGES</span>
                    <div className="flex flex-col gap-3">
                    <Link to={'/dashboard'} className="flex text-xs lg:text-1xl items-center gap-2 bg-gray-900 p-2 rounded-sm font-semibold">
                        <HomeIcon className="hidden lg:block w-6" />
                        Dashboard
                    </Link>
                    <Link to={'/dashboard/form'} className="flex text-xs lg:text-1xl items-center gap-2 p-2 rounded-sm font-semibold">
                        <FolderMinusIcon className="hidden lg:block w-6" />
                        Form 
                    </Link>
                    <Link to={'/dashboard/data'} className="flex text-xs lg:text-1xl items-center gap-2 p-2 rounded-sm font-semibold">
                        <DocumentChartBarIcon className="hidden lg:block w-6" />
                        Data Produk
                    </Link>
                    <button className="flex text-xs lg:text-1xl items-center gap-2 p-2 rounded-sm font-semibold">
                    <ArrowRightStartOnRectangleIcon className="hidden lg:block w-6"/>
                    Logout
                    </button>
                    </div>

                </div>

            </div>
                </div>
                <div className="bg-gray-100 h-screen w-4/5">
                <header className="flex bg-white justify-between px-10 py-5 ">
                <div className="flex gap-4 px-3 py-1 rounded-sm w-max items-center border bg-white">
                    <CalendarDaysIcon className="w-8 text-blue-700"/>
                    <p className="font-bold text-gray-800"> {currentDate.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p>{currentDate.toLocaleTimeString()}</p>
                </div>
                    <button className="text-gray-900 flex font-semibold">
                        Admin
                        <UserIcon className="ml-2 w-7"/>
                    </button>
                </header>
                <div className=" px-2 lg:px-10">
                <div className=" flex px-5 my-6 bg-[url('images/hider.png')] bg-cover h-24 md:h-32 rounded-sm items-center
                ">
                    <div className="flex flex-col">
                        <h1 className="text-xl lg:text-3xl font-bold">Selamat {timeOfDay} Irfan 👋</h1>
                        <p className=" text-sm lg:text-md text-gray-700">Jangan lupa untuk istirahat</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 lg:flex lg:justify-between my-10 lg:gap-5 lg:gap-x-10">
      
                    {/* <InteriorLength />
                    <EksteriorLength />
                    <LampuLength /> */}

                </div>
                </div>
            </div> 
              </div>
        </>
    )
}