
import ApplicationLogo from '../Components/mark/ApplicationLogo';
import Dropdown from '..//Components/mark/Dropdown';

import Layout from '../Pages/Layout'



export default function Authenticated({ auth, header, children, footer}) {
    console.log(auth);
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                    <div className="flex justify-between h-16">

                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex">
                                            <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium  text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >{auth.user.name}
                                                <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href='/profile/edit'>Профиль</Dropdown.Link>
                                        <Dropdown.Link href='/logout' method="post" as="button">Выйти</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                    </div>


            </nav>

            <Layout>   <header>{header}</header>


                <main >{children}</main>

                {footer}</Layout>
        </div>
    );
}
