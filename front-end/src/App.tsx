import {Route, Routes} from "react-router";

import Dashboard from './containers/Dashboard'
import Form from "./containers/Form";
import Details from "./containers/Details";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<Form />} />
      <Route path="/module:id" element={<Details />} />
    </Routes>
  );
}

export default App;
