// Import components to the app function
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
