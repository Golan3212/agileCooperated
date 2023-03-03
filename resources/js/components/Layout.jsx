import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <nav>
                <ul className='navigation'>
                    {/*<li >*/}
                    {/*    <Link className="navigation-link" to="/">Home</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link className="navigation-link" to="/Recipes">Recipes</Link>
                    </li>
                    <li>
                        <Link className="navigation-link" to="/RecipeItem">RecipeItem</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;