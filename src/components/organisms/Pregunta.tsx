import { TPregunta } from '../../types/types';
import PropCard from '../molecules/PropCard';

const Pregunta = (props: Props) => {
  const { texto, respuesta, tiempo, tipoTarea, numero } = props;
  return (
    <div className="p-4 bg-indigo-50 w-full mb-5 rounded-xl">
      <span className="text-xl text-blue-600 font-title">
        Pregunta {numero}
      </span>
      <p
        className="font-poppins"
        dangerouslySetInnerHTML={{ __html: texto }}
      ></p>
      <div className="flex mt-3 gap-2">
        <PropCard type="Secondary" title="Tiempo" value={tiempo} />
        <PropCard type="Secondary" title="Respuesta" value={respuesta} />
      </div>
    </div>
  );
};
interface Props extends TPregunta {
  numero: number;
}
export default Pregunta;
