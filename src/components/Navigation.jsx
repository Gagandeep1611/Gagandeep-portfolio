import React from 'react'


const Navigation = ({onSelect}) => {

    const menuItems = [
        { id: "resume", label: "Resume" },
        { id: "portfolio", label: "Portfolio" },
        { id: "linkedin", label: "Linkedin" },
        { id: "github", label: "Github" },
        { id: "contact", label: "Contact" },
    ];

    const handleOnClickEvent = (id) => {
        switch (id) {
            case "resume":
                window.open("https://drive.google.com/file/d/1ucfNZgkMfIWhlwGktIBFC-jUp2l1y6_u/view?usp=sharing", "_blank");
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
    }

    return (
        <>
            <nav className='fixed top-0 z-50 transition duration-300 bg-transparent w-full px-[7vw] md:px-[7vw] lg:px-[20vw]'>
                <div className='flex justify-between'>
                    {/* Logo */}
                    <div className="text-lg font-semibold cursor-pointer p-7"
                    onClick={() => handleOnClickEvent("home")}>
                        <span className="text-[#FFA500]">&lt;</span>
                        <span className="text-[#D3D3D3]">Gagandeep</span>
                        <span className="text-[#FFFFFF]">/</span>
                        <span className="text-[#D3D3D3]">Singh</span>
                        <span className="text-[#00FF00]">&gt;</span>
                    </div>
                    {/* navigation */}
                    <div className='p-7'>
                        <ul className='md:flex space-x-8 text-[#D3D3D3]'>
                            {menuItems.map((item) => (
                                <li key={item.id}
                                className='cursor-pointer hover:text-[#818589]'>
                                    <button onClick={() => handleOnClickEvent(item.id)}> {item.label} </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
