
import ApplicationLogo from '@/Components/mark/ApplicationLogo';
import { Link } from '@inertiajs/react';
import NavLink from "@/Components/mark/NavLink";
import Dropdown from "@/Components/mark/Dropdown";
import ResponsiveNavLink from "@/Components/mark/ResponsiveNavLink";
import FooterList from "@/Components/FooterList";

export default function Layout({ children,footer,header }) {


    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="flex justify-between h-16">

                        <div className="flex">

                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-blue-800" />
                                </Link>
                            </div>


                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                    Конструктор питания
                                </NavLink>

                                <NavLink href={route('recipes')} active={route().current('recipes')}>
                                    Recipes
                                </NavLink>
                                <NavLink href={route('category')} active={route().current('category')}>
                                   Category
                                </NavLink>

                                <NavLink href={route('form.index')} active={route().current('form.index')}>
                                    Form
                                </NavLink>

                                <NavLink href={route('advice')} active={route().current('advice')}>
                                    Advice
                                </NavLink>

                            </div>
                        </div>




                    </div>




                </div>


            </nav>




            {header && (
                <header className="bg-grey-100 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}



            <main>{children}</main>
            <footer><FooterList>{footer}</FooterList></footer>



        </div>
    );
}
