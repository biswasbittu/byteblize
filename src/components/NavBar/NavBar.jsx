

const NavBar = () => {

    const navItems = <>
        <li className="font-bold text-primary"><a>Home</a></li>
        <li className="font-bold"><a>Blogs</a></li>
        <li className="font-bold"><a>BookMarks</a></li>
        <label className="toggle text-base-content">
<input type="checkbox" value="synthwave" className="theme-controller" />
<svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
<svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
    </>
    return (

        <div className="navbar bg-base-300 shadow-lg md:px-8 stiky top-0 z-50 h-10">
            <div className="navbar ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {navItems}
                       
                    </ul>

                </div>
                <a className="btn btn-ghost  gap-0 text-secondary normal-case text-2xl">Byte<span className="text-primary">Blaze</span></a>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navItems}

                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;