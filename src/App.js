import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageSliding from './ImageSliderWithFunction/ImageSider'
import MyclassSliderApp from './ImageSliderWithClassCom/ClassImageSlider'
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Functional' element={<ImageSliding />} />
          <Route exact path='/Class' element={<MyclassSliderApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
