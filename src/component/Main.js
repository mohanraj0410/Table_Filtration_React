import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TablePage from './Table';
import LoginPage from './LoginPage';
import "./table.css"

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}></Route>
        <Route path='table' element={<TablePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
