import { useRef } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Context from "./Components/Context/Context";

function App() {
  const homeRef = useRef<HTMLDivElement | null | string>(null);
  const projectRef = useRef<HTMLDivElement | null | string>(null);
  const contactRef = useRef<HTMLDivElement | null | string>(null);
  const phoneNumber = "31996259145";

  return (
    <div>
      <Context.Provider
        value={{ homeRef, projectRef, contactRef, phoneNumber }}
      >
        <Header />
        <Projects />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
