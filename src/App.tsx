import "./App.css";
import Header from "./Components/Header/Header";
import Presentation from "./Components/Presentation/Presentation";
import Knowledges from "./Components/Knowledges/Knowledges";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import End from "./Components/End/End";
function App() {
  return (
    <div className="app">
      <Header />
      <Presentation />
      <Knowledges />
      <Projects/>
      <Footer/>
      <End/>
    </div>
  );
}

export default App;
