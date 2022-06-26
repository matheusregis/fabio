
export function Header() {
    return(
        <header className="w-full py-5 flex flex-row items-center justify-center bg-gray-700 border-b border-gray-600">
            <ul className="flex">
                <li className="flex">
                    <a className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl" href="#">Fotos</a>
                </li>
                <li className="flex">
                    <a className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl" href="#">Detalhes</a>
                </li>
                <li className="flex">
                    <a className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl" href="#">Contato</a>
                </li>
            </ul>
        </header>
    )
}