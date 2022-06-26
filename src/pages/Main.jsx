import image from '../../public/fachada.jpeg'
import ModalDetalhes from "../components/ModalDetalhes";
import { useState } from "react";

import ModalFotos from '../components/ModalFotos';
import ModalContato from '../components/ModalContato';


export function Main() {
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false);
    const [openModalFotos, setOpenModalFotos] = useState(false);
    const [openModalContato, setOpenModalContato] = useState(false);

    return(
        <div className="flex flex-col">

            <header className="w-full py-5 flex flex-row items-center justify-center bg-gray-700 border-b border-gray-600">
                <ul className="flex">
                    <li className="flex">
                        <button className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl" onClick={() => setOpenModalFotos(true)}>Fotos</button>
                    </li>
                    <li className="flex">
                        <button className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl"  onClick={() => setOpenModalDetalhes(true)}>Detalhes</button>
                    </li>
                    <li className="flex">
                        <button className="flex mr-[120px] font-bold hover:opacity-70 transition-opacity text-2xl" onClick={() => setOpenModalContato(true)}>Contato</button>
                    </li>
                </ul>
            </header>
            <main className="flex min-h-screen">
                {openModalDetalhes && <ModalDetalhes closeModalDetalhes={setOpenModalDetalhes}/>}
                {openModalFotos && <ModalFotos closeModalFotos={setOpenModalFotos}/>}
                {openModalContato && <ModalContato closeModalContato={setOpenModalContato}/>}
                
                <img className="flex w-screen opacity-50" src={image} alt="" />
            </main>
        </div>
    )
}