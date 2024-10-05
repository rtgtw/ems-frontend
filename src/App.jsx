import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import { FootComponent } from './components/FootComponent'
import { HeaderComponent } from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HelloWorld from './HelloWorld'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          {/* //routes for localhost:3000 and localhost:3000/employees */}
          <Route path='/' element={<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

          <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
        </Routes>
        
      <FootComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
