import { Routes, Route } from 'react-router-dom';
import ClientPage from './components/pages/ClientPage';
import Layout from './components/Templates/Layout';
import data from './data/data.json';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {data.map((page) => {
          return (
            <Route path={page.id} key={page.id} element={<ClientPage />} />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
