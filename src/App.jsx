import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home/Home';
import TutorialPage from './Screens/TutorialPage/TutorialPage';
import AddingPage from './Screens/AddingPage/AddingPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

//TODO Comentários de documentação do projeto

/**
 * Need Help.
 * @returns JSX do site Need Help.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/:id" element={<TutorialPage />} />
          <Route path="/add" element={<AddingPage />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <div className='Contents'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
