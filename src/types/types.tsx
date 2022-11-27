export type TPregunta = {
  respuesta: string;
  texto: string;
  tiempo: string;
  tipoTarea: string;
};
export type TClient = {
  cliente: string;
  escenario: string;
  horarioEnvio: {
    seconds: number;
    nanoseconds: number;
  };
  id: string;
  idVideo: string;
  link: string;
  linkVideo: string;
  plataforma: string;
  preguntas: Array<TPregunta>;
  response: {};
  timeTest: string;
  transcripcion: string;
};
