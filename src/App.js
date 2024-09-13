import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDo from "./component/todo/ToDo";
import Coin from "./component/coin/Coin";
import Home from "./routes/Home";
import Detail from "./component/movie/Detail";

const App = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<ToDo />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;