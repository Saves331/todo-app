import { FaHome, FaSearch } from "react-icons/fa";
import NavbarBtn from "./NavbarBtn";

function Navbar() {
  return (
    <section className="py-2 px-5 flex justify-between border-b-orange border-b-2">
        <div className="flex items-center">
            <FaHome className="text-2xl text-brown" ></FaHome>
        </div>
        
        <div className="flex items-center gap-6">
            <FaSearch className="text-black" ></FaSearch>
            <NavbarBtn />
        </div>
    </section>
  )
}

export default Navbar