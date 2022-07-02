import { Phone, Envelope } from 'phosphor-react';

export default function ModalContato({ closeModalContato }) {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900  text-gray-100 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Contato
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModalContato(false)}
              >
                <span className="bg-transparent text-gray-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto grid grid-cols-1 items-center justify-center text-gray-100">
                <p className="flex flex-row  my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    Fabio Trai
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <Envelope className="mr-5"/> ftrai@hotmail.com
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <Phone className="mr-5"/> (49) 9 9109-9233
                </p>
                                
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModalContato(false)}
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