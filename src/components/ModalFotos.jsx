import { Gallery } from "./Gallery";
import '../styles/modal-fotos.css';

export default function ModalFotos({ closeModalFotos }) {
  return (
    <>
      <div
        className="flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="modal-fotos relative my-16 ">
          {/*content*/}
          <div className="border-0 rounded-lg w-screen h-screen shadow-lg relative flex flex-col bg-gray-900  text-gray-100 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Fotos
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModalFotos(false)}
              >
                <span className="bg-transparent text-gray-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6  text-gray-100 ">
              <Gallery />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModalFotos(false)}
              >
                Fechar
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}