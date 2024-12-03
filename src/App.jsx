import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MainRouter } from './Router';
import MainLayout from './layout/MainLayout';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {MainRouter.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<MainLayout><Component /></MainLayout>}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
