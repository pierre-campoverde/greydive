import data from '../../data/data.json';
import PageCard from '../molecules/PageCard';
const Home = () => {
  return (
    <section className="min-h-[84vh]">
      <div className=" w-9/12 py-10 mx-auto">
        <h1 className="m-5 text-3xl font-bold font-title">Clientes</h1>
        <div className="flex">
          {data.map((page) => {
            return (
              <PageCard client={page.cliente} plataforma={page.plataforma} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
