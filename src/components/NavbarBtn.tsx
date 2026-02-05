import { useState } from "react";

function NavbarBtn() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <button className="bg-orange px-2.5 py-1 rounded font-semibold text-brown">Create</button>
  )
}

export default NavbarBtn