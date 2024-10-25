import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import DataCapture from './components/DataCapture';
import StudyDocuments from './components/StudyDocuments';
import QueryResolutionSystem from './components/QueryResolutionSystem';
import DataLoader from './components/DataLoader';
import StandardReports from './components/StandardReports';
import DataExtraction from './components/DataExtraction';
import AiMedicalCoding from './components/AiMedicalCoding';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
        <BrowserRouter>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/StudyDocuments" element={<StudyDocuments/>} />
          <Route path="/DataCapture" element={<DataCapture />} />
          <Route path="/DataLoader" element={<DataLoader/>}/>
          <Route path="/QueryResolutionSystem" element={<QueryResolutionSystem />} />
          <Route path="/ DataLoader" element={< DataLoader />} />
          <Route path="/StandardReports" element={<StandardReports />} />
          <Route path="/DataExtraction" element={<DataExtraction />} />
          <Route path="/AiMedicalCoding" element={<AiMedicalCoding />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
