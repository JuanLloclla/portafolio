export function Navbar(){
    return(
        <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-300 shadow-sm">
            <nav className="">
                <div className="mx-auto max-w-7xl h-16">
                    {/* Links navegación */}
                    <ul className="h-full flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                        {NavbarItem("Sobre mí", "#sobre-mi")}
                        {NavbarItem("Proyectos", "#proyectos")}
                        {NavbarItem("Tecnologías", "#tecnologias")}
                        {NavbarItem("Estudios", "#estudios")}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export function NavbarItem(text: string, href: string){
    return(
        <li>
            <a 
                href={href}
                className="
                    font-kumbh font-bold text-gray-700 hover:text-sky-700 cursor-pointer transition-colors
                    text-[15px] sm:text-base md:text-lg
                "
            >
                {text}
            </a>
        </li>
    );
}