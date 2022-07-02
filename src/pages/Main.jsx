import image from '../../public/fachada.jpeg'
import ModalDetalhes from "../components/ModalDetalhes";
import { useState } from "react";

import ModalFotos from '../components/ModalFotos';
import ModalContato from '../components/ModalContato';
import ModalEndereço from '../components/ModalEndereço';

import '../styles/main.css';


export function Main() {
    const [openModalDetalhes, setOpenModalDetalhes] = useState(false);
    const [openModalFotos, setOpenModalFotos] = useState(false);
    const [openModalContato, setOpenModalContato] = useState(false);
    const [openModalEndereço, setOpenModalEndereço] = useState(false);

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
                    <li className="flex">
                        <button className="flex font-bold hover:opacity-70 transition-opacity" onClick={() => setOpenModalContato(true)}>Contato</button>
                    </li>
                    <li className="flex ultimo">
                        <button className="flex font-bold hover:opacity-70 transition-opacity" onClick={() => setOpenModalEndereço(true)}>Endereço</button>
                    </li>
                </ul>
            </header>
            <main className="flex h-screen">
                {openModalDetalhes && <ModalDetalhes closeModalDetalhes={setOpenModalDetalhes}/>}
                {openModalFotos && <ModalFotos closeModalFotos={setOpenModalFotos}/>}
                {openModalContato && <ModalContato closeModalContato={setOpenModalContato}/>}
                {openModalEndereço && <ModalEndereço closeModalEndereço={setOpenModalEndereço}/>}
                
                <img className="flex w-screen opacity-90 relative" src={image} alt="" />
                <span className="flex w-screen absolute items-center justify-center font-bold top-[200px] text-5xl opacity-70">VENDE-SE</span>
            </main>
        </div>
    )
}