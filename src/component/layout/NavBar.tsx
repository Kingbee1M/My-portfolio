"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";   

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex flex-row items-center justify-between w-full p-4 bg-gray-100 dark:bg-gray-800text-black dark:text-white">
            <p>{`<SS/>`}</p>
            <button onClick={toggleMenu}><RxHamburgerMenu /></button>

        </div>
    )
}