import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
        </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomeScreen from "./screens/HomeScreen";
// // import HomeScreen from './HomeScreen';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<div>It works!</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
