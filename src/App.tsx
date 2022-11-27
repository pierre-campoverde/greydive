import { Routes, Route } from 'react-router-dom';
import ClientPage from './components/pages/ClientPage';
import Home from './components/pages/Home';
import Layout from './components/Templates/Layout';
import data from './data/data.json';
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {data.map((page) => {
          return (
            <Route
              path={page.cliente}
              key={page.id}
              element={<ClientPage clientData={page} />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
