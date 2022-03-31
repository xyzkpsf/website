import Topbar from './components/Topbar';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="content">
                <Topbar />
                <div className="sections">
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;
