"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import "../static/styles.css"

const Header = () => {

    //Module Responsive or NavBar

    const [showMenu, setShowMenu] = useState(false); //Menu desktop
    const [isMobile, setIsMobile] = useState(false); //Menu mobile

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    // Logic to change menu according to status
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 789);
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div className="w-full flex mr-auto ml-[100px] relative  items-center bg-transparent">
            <div className={` "bg-transparent"${isMobile ? 'ml-4' : 'ml-20'}`}>
                <Image src={"/logo.webp"} alt="Logo da JMF Advogados" width={160} height={60} />
            </div>

            {isMobile ? (
                <div>CELULAR</div> // TODO: Construir menu responsivo
            ) : (
                <nav className=" ml-[800px] mr-20 nav-items ">
                    <ul className="flex">
                        <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-red-600">Home</a></li>
                        <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-red-600">Área de Atuação</a></li>
                        <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-red-600">Profissionais</a></li>
                        <li className="ml-4"><a href="#" className="text-white transition-colors duration-300 hover:text-red-600">Contato</a></li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default Header;