import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import NavBar from './Commponants/NavBar';
import Headertitle from './Commponants/Headertitle';
import Paner from './Commponants/Paner';
import About from './Commponants/About';
import Servic from './Commponants/Servic';
import CecoundPaner from './Commponants/CecoundPaner';
import './App.css';
import ContactInfo from './Commponants/ContactInfo';
import Footer from './Commponants/Footer';
function App() {
  return (
    <createHashRouter>
    <Router>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
        {/* شريط التنقل */}
        <NavBar />
        
        {/* الأقسام */}
        <main>
          {/* القسم الأول: الصفحة الرئيسية */}
          <section id="home">
            <Headertitle />
          </section>

          {/* القسم الثاني: البانر */}
          <section id="banner">
            <Paner />
          </section>

          {/* القسم الثالث: من نحن */}
          <section id="about">
            <About />
          </section>

          {/* القسم الرابع: الخدمات */}
          <section id="services">
            <Servic />
          </section>

{/* القسم السادس: اتصل بنا */}
<section id="Contact">
            <ContactInfo />
          </section>
          

          {/* القسم الخامس: اين نحن */}
          <section id="WherWeAre">
            <CecoundPaner />
          </section>

          
        </main>
        <Footer/>
      </div>
    </Router>
    </createHashRouter>
  );
}

export default App;
