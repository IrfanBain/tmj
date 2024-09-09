import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { SiGooglemaps } from "react-icons/si"
import { Link } from "react-router-dom"
 

const navigation = [
  { name: 'Profil Desa', href: '/profil', current: false },
  { name: 'Pemerintahan', href: '/pemerintahan', current: false },
  { name: 'Informasi Publik', href: '/berita', current: false },
  { name: 'Login', href: '/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link 
                to={'/'}
                className="flex-shrink-0">
                  <img
                    alt=""
                    src="images/logo-lambar.png"
                    className="w-8"
                  />
                </Link>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-50 hover:bg-blue-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6 text-white">
                 

                 <SiGooglemaps />
                 <span className='font-semibold mx-1'>
                  Lampung Barat
                 </span>
                  
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            
          </DisclosurePanel>
        </Disclosure>

        
        {/* <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          </div>
        </main> */}
      </div>
    </>
  )
}
