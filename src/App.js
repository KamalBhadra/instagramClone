import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import BottomLinks from './Components/BottomLinks';
import Carousal from './Components/Carousal';
import Header from './Components/Header';
import HorizontalNavbar from './Components/HorizontalNavbar';
import Posts from './Components/Posts';
import Reels from './Components/Reels';
import Tagged from './Components/Tagged';
import VerticalNavbar from './Components/VerticalNavbar';

//here all the components will be imported
function App() {
  return (
    <>      {/*for displaying more than one div <></> added to top and bottom of the div*/}
    <div className="App">
      {/*below are the component added*/}
      <VerticalNavbar />
      <Header />
      <Carousal />

      <BrowserRouter>
        <HorizontalNavbar />{/*routere functionality added on this component*/}
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Reels" element={<Reels />} />
          <Route path="/Tagged" element={<Tagged />} />
        </Routes>
      </BrowserRouter>

      <BottomLinks />

    </div>
    </>
  );
}

export default App;
