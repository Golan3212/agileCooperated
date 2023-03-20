 import { Link, Outlet } from "react-router-dom";

 function Layout() {
    return (
        <div>
            <nav>
                <ul className='navigation'>
                    <li >
                        <Link className="navigation-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/form"> Form   </Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/advice"> Advice </Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

 export default Layout;