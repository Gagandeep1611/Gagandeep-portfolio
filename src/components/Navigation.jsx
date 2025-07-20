import React, { useState } from 'react';

const Navigation = ({ onSelect }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { id: "resume", label: "Resume" },
        { id: "portfolio", label: "Portfolio" },
        { id: "linkedin", label: "Linkedin" },
        { id: "github", label: "Github" },
        { id: "contact", label: "Contact" },
    ];

    const handleOnClickEvent = (id) => {
        setMenuOpen(false); // close menu on selection

        switch (id) {
            case "resume":
                window.open("https://drive.google.com/file/d/1cNdmQmSQgOaKcOzZtYNPfhltbsQ_rh_c/view?usp=drivesdk", "_blank");
                break;
            case "github":
                window.open("https://github.com/Gagandeep1611", "_blank");
                break;
            case "home":
            case "portfolio":
            case "contact":
                onSelect(id);
                break;
            case "linkedin":
                window.open("https://www.linkedin.com/in/gagandeepsingh1644/", "_blank");
                break;
            default:
                break;
        }
    };

    return (
        <nav className='fixed top-0 z-50 bg-transparent w-full px-[7vw] md:px-[7vw] lg:px-[20vw]'>
            <div className='flex justify-between items-center p-7'>
                {/* Logo */}
                <div
                    className="text-lg font-semibold cursor-pointer"
                    onClick={() => handleOnClickEvent("home")}
                >
                    <span className="text-[#FFA500]">&lt;</span>
                    <span className="text-[#D3D3D3]">Gagandeep</span>
                    <span className="text-white">/</span>
                    <span className="text-[#D3D3D3]">Singh</span>
                    <span className="text-[#00FF00]">&gt;</span>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="space-y-1">
                            <span className="block w-6 h-0.5 bg-gray-300"></span>
                            <span className="block w-6 h-0.5 bg-gray-300"></span>
                            <span className="block w-6 h-0.5 bg-gray-300"></span>
                        </div>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex space-x-8 text-[#D3D3D3]'>
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className='cursor-pointer hover:text-[#818589]'
                        >
                            <button onClick={() => handleOnClickEvent(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-7 pb-4">
                    <ul className="space-y-4 text-white bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className='cursor-pointer hover:text-gray-300'
                            >
                                <button onClick={() => handleOnClickEvent(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    );
};

export default Navigation;
