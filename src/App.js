import "./App.css";

import Welcome from "./components/Welcome";
import Introduce from "./components/Introduce";
import Curricuraum from "./components/Curricuraum";
import Prize from "./components/Prize";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Apply from "./components/Apply";

function App() {
    return (
        <div className="App">
            <Welcome />
            <Introduce />
            <Curricuraum />
            <Prize />
            <Project />
            <Apply />
            <Footer />
        </div>
    );
}

export default App;
