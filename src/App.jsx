import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import { MainRouter } from './Router'
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <Routes>
          {MainRouter.map((route,index) => {
            const Component = route.component;
            return (
              <Route
               key={index}
               path={route.path}
               element={<MainLayout><Component/></MainLayout>}
              >

              </Route>
            )
          })}
    </Routes>
  )
}

export default App
