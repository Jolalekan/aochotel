import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rooms from "./components/Rooms";
import SingleRooms from "./page/SingleRooms";
import Layout from "./page/Layout";
import { Container } from "./page/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/" element={<Container />} /> */}
            <Route path="/" element={<Rooms />} />
            <Route path="/rooms/:roomId" element={<SingleRooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
