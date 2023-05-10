import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ListTours from "./component/list";
import createTour from "./component/create";
import CreateTour from "./component/create";
import EditTour from "./component/edit";
import DeleteTour from "./component/delete";
import View from "./component/view";

function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<ListTours/>}/>
      <Route path={"/Create"} element={<CreateTour/>}/>
      <Route path={"/edit/:id"} element={<EditTour/>}/>
      <Route path={"/delete/:id"} element={<DeleteTour/>}/>
      <Route path={"/view/:id"} element={<View/>}/>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
