import { CheckCircle } from 'phosphor-react';

export default function ModalDetalhes({ closeModalDetalhes }) {

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
                Detalhes
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-100 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModalDetalhes(false)}
              >
                <span className="bg-transparent text-gray-100 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto grid grid-cols-2 items-center justify-center text-gray-100">
                <p className="flex flex-row  my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Dormitório: 2
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Sala: 1
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Cozinha: 1
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Banheiros: 2
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Área Gourmet: 1
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Churrasqueira: Sim
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Área de Serviço: Sim
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Garagem: Sim
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Móveis embutidos: (Cozinha, quarto, sala, banheiro)
                </p>
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Área Construída: 113m²
                </p> 
                <p className="flex flex-row my-4 text-gray-100 font-bold text-lg leading-relaxed">
                    <CheckCircle className="mr-3"/> Área do Terreno: 360m²
                </p>                
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModalDetalhes(false)}
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