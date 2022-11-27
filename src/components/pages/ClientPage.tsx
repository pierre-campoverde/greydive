import React from 'react';
import { TClient } from '../../types/types';
import PropCard from '../molecules/PropCard';
import Pregunta from '../organisms/Pregunta';
import TestResults from '../Templates/TestResults';
const ClientPage = (props: Props) => {
  const {
    cliente,
    escenario,
    linkVideo,
    plataforma,
    preguntas,
    timeTest,
    transcripcion,
  } = props.clientData;
  return (
    <section className="lg:w-11/12 mx-auto py-10">
      <div className="p-5 font-bold font-title">
        <h1 className="text-3xl">{cliente.toUpperCase()}</h1>
      </div>
      <div className="flex flex-col mb-20 lg:mb-0 lg:flex-row gap-10">
        <div className="lg:w-8/12">
          <video controls className="rounded-xl">
            <source src={linkVideo} />
          </video>
          <div className="bg-indigo-50 mt-5 rounded-xl p-3">
            <span className="text-xl text-blue-600 font-title">Escenario</span>
            <p className="font-poppins">{escenario}</p>
          </div>
          <div className="flex mt-5 gap-5">
            <PropCard type="Primary" title="Plataforma" value={plataforma} />
            <PropCard type="Primary" title="Tiempo del test" value={timeTest} />
          </div>
        </div>
        <aside className="bg-indigo-50 text-lg  rounded-xl mx-auto w-10/12 lg:w-4/12 text-black">
          <div className="p-5 borber-b-2">
            <h3 className="text-xl text-blue-600 font-semibold font-title">
              Transcripcion
            </h3>
          </div>
          <div
            className="overflow-auto font-poppins text-[2vh] h-[84vh] p-2"
            dangerouslySetInnerHTML={{ __html: transcripcion }}
          ></div>
        </aside>
      </div>
      <div>
        <TestResults preguntas={preguntas} />
      </div>
    </section>
  );
};
type Props = {
  clientData: TClient;
};
export default ClientPage;
