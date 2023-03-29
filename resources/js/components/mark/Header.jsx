// import {Link, usePage} from "@inertiajs/react";
// import ApplicationLogo from "@/Components/mark/ApplicationLogo";
// import NavLink from "@/Components/mark/NavLink";
// import Dropdown from "@/Components/mark/Dropdown";
//
//
//
// export default function Header(auth, header, children, footer){
//
//     return(
//
//         <div className="flex justify-between h-16">
//
//             <div className="flex">
//
//                 <div className="shrink-0 flex items-center">
//                     <Link href="/">
//                         <ApplicationLogo className="block h-9 w-auto fill-current text-blue-800" />
//                     </Link>
//                 </div>
//
//
//                 <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
//                     <NavLink href={route('dashboard')} active={route().current('dashboard')}>
//                         Конструктор питания
//                     </NavLink>
//
//                     <NavLink href={route('recipes')} active={route().current('recipes')}>
//                         Recipes
//                     </NavLink>
//                     <NavLink href={route('posts.index')} active={route().current('posts.index')}>
//                         Test
//                     </NavLink>
//
//                 </div>
//             </div>
//
//
//
//
//             {/*<div className="hidden sm:flex sm:items-center sm:ml-6">*/}
//             {/*    <div className="ml-3 relative">*/}
//             {/*        <Dropdown>*/}
//             {/*            <Dropdown.Trigger>*/}
//             {/*                            <span className="inline-flex rounded-md">*/}
//             {/*                                <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium  text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"*/}
//             {/*                                >*/}
//             {/*                                    /!*{auth.user.name}*!/*/}
//             {/*                                    <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>*/}
//             {/*                                    </svg>*/}
//             {/*                                </button>*/}
//             {/*                            </span>*/}
//             {/*            </Dropdown.Trigger>*/}
//             {/*            <Dropdown.Content>*/}
//             {/*                <Dropdown.Link href={route('profile.edit')}>Профиль</Dropdown.Link>*/}
//             {/*                <Dropdown.Link href={route('logout')} method="post" as="button">Выйти</Dropdown.Link>*/}
//             {/*            </Dropdown.Content>*/}
//             {/*        </Dropdown>*/}
//             {/*    </div>*/}
//             {/*</div>*/}
//
//
//
//
//             {/*<div className="-mr-2 flex items-center sm:hidden">*/}
//             {/*    <button onClick={() => setShowingNavigationDropdown((previousState) => !previousState)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">*/}
//             {/*        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">*/}
//             {/*            <path*/}
//             {/*                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}*/}
//             {/*                strokeLinecap="round"*/}
//             {/*                strokeLinejoin="round"*/}
//             {/*                strokeWidth="2"*/}
//             {/*                d="M4 6h16M4 12h16M4 18h16"*/}
//             {/*            />*/}
//             {/*            <path*/}
//             {/*                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}*/}
//             {/*                strokeLinecap="round"*/}
//             {/*                strokeLinejoin="round"*/}
//             {/*                strokeWidth="2"*/}
//             {/*                d="M6 18L18 6M6 6l12 12"*/}
//             {/*            />*/}
//             {/*        </svg>*/}
//             {/*    </button>*/}
//             {/*</div>*/}
//
//         </div>
//     );
// }
//
