function Navbar(){
    //state
    //return
    return(
        <div className="p-4 flex justify-between bg-gray-800 text-white px-10 py-5 ring-3 ring-amber-100 m-2">
            <h4>LOGO</h4>
            <ul className="flex gap-10">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Signup</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </div> 
    )
}

export default Navbar;