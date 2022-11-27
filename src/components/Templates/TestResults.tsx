import React, { useState } from 'react';
import { TPregunta } from '../../types/types';
import Pregunta from '../organisms/Pregunta';

const TestResults = (props: Props) => {
  const { preguntas } = props;
  const [currenSelect, setCurrenSelect] = useState({ value: '' });
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrenSelect({ value: e.currentTarget.value });
    console.log(currenSelect);
  };
  return (
    <div className="w-11/12 lg:w-6/12 mx-auto md:m-0">
      <div className="flex-col ">
        <h3 className="text-3xl font-title">Tests</h3>
        <div className="flex-col my-5">
          <label className="block mb-2 font-title text-sm font-medium text-gray-900 dark:text-gray-400">
            Seleciona un tipo de tarea
          </label>
          <select
            onChange={handleChange}
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value={''}>Todos</option>
            <option value="verbalResponse">Respuesta Verbal</option>
            <option value="opinionScale5">Escala de opinion</option>
          </select>
        </div>
      </div>

      {preguntas.map((pregunta) => {
        if (currenSelect.value === pregunta.tipoTarea) {
          return (
            <Pregunta
              numero={preguntas.indexOf(pregunta) + 1}
              respuesta={pregunta.respuesta}
              texto={pregunta.texto}
              tiempo={pregunta.tiempo}
              tipoTarea={pregunta.tipoTarea}
              key={preguntas.indexOf(pregunta) + 1}
            />
          );
        } else if (currenSelect.value === '') {
          return (
            <Pregunta
              numero={preguntas.indexOf(pregunta) + 1}
              respuesta={pregunta.respuesta}
              texto={pregunta.texto}
              tiempo={pregunta.tiempo}
              tipoTarea={pregunta.tipoTarea}
              key={preguntas.indexOf(pregunta) + 1}
            />
          );
        }
      })}
    </div>
  );
};

type Props = {
  preguntas: Array<TPregunta>;
};

export default TestResults;
