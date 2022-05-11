import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/footer';
import Menu from './components/menu';
import './index.css';
import Contact from './pages/contact';
import Home from './pages/home';
import Projects from './pages/projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
