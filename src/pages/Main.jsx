import image from '../../public/fachada.jpeg'
import ModalDetalhes from "../components/ModalDetalhes";
import { useState } from "react";

import ModalFotos from '../components/ModalFotos';
import ModalContato from '../components/ModalContato';

import '../styles/main.css';


export function Main() {
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false);
    const [openModalFotos, setOpenModalFotos] = useState(false);
    const [openModalContato, setOpenModalContato] = useState(false);

    return(
        <div className="flex flex-col min-h-screen w-screen">

            <header className="w-full py-5 flex flex-row items-center justify-center bg-gray-700 border-b border-gray-600">
                <ul className="flex">
                    <li className="flex">
                        <button className="flex font-bold hover:opacity-70 transition-opacity" onClick={() => setOpenModalFotos(true)}>Fotos</button>
                    </li>
                    <li className="flex">
                        <button className="flex font-bold hover:opacity-70 transition-opacity"  onClick={() => setOpenModalDetalhes(true)}>Detalhes</button>
                    </li>
                    <li className="flex ultimo">
                        <button className="flex font-bold hover:opacity-70 transition-opacity" onClick={() => setOpenModalContato(true)}>Contato</button>
                    </li>
                </ul>
            </header>
            <main className="flex h-screen">
                {openModalDetalhes && <ModalDetalhes closeModalDetalhes={setOpenModalDetalhes}/>}
                {openModalFotos && <ModalFotos closeModalFotos={setOpenModalFotos}/>}
                {openModalContato && <ModalContato closeModalContato={setOpenModalContato}/>}
                
                <img className="flex w-screen h-screen opacity-90" src={image} alt="" />
            </main>
        </div>
    )
}