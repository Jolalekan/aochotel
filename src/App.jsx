import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Rooms from "./components/Rooms";
import SingleRooms from "./page/SingleRooms";
import Layout from "./page/Layout";
import { Container } from "./page/Container";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Container />} />
            <Route path="/" element={<Rooms />} />
            <Route path="/rooms/:roomId" element={<SingleRooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
