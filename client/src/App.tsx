import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/shared/Header';
import Home from './pages/Home';
import Footer from './components/shared/Footer';

function App() {
  return (
    <> 
      <BrowserRouter>
        <div className='d-flex flex-column side-allPage min-width'>
          <Header/>
          <main>
            <Container className='mt-3'>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
              </Routes>
            </Container>
          </main>
          <Footer/> 
        </div>
      </BrowserRouter>
    </>
  )
}

export default App