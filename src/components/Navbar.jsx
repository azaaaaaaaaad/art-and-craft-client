import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import userImage from '../assets/userImage.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const links = <>
        <li> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to={'/artAndCraft'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>All Art & craft Items</NavLink></li>
        {/* <li><NavLink to={'/addCraft'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Add Craft Item</NavLink></li> */}
        <li><NavLink to={'/addCraftItems'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>Add Craft Item</NavLink></li>
        <li><NavLink to={'/myArtAndCraft'} className={({ isActive }) => isActive ? 'font-bold underline' : 'font-bold'}>My Art&Craft List</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Yousuf's A&C</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                </div>
                {
                    user ?
                        <div className="navbar-end gap-2">
                            {/* data-tip={user.displayName} */}
                            <div className="w-10 rounded-full tooltip tooltip-left" data-tip={user.displayName}>
                                <img alt="user image" src={user?.photoURL || userImage} />
                            </div>
                            <button
                                onClick={logOut}
                                className="btn ">Sign Out</button>
                        </div>
                        :
                        <div className="navbar-end gap-2">
                            <Link to={'/signin'}>
                                <button className="btn">Sign In</button>
                            </Link>
                            <Link to={'/signup'}>
                                <button className="btn">Sign Up</button>
                            </Link>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;