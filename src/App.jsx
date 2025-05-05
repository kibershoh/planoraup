import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home';
 
import CategoryPage from './pages/categoryPage';
import SubcategoryPage from './pages/subCategoryPage/SubcategoryPage';
import ArtistDetailPage from './pages/artistDetailsPage';
import Breadcrumbs from './components/breadcrumbs';
import AddService from './pages/addService';

function App() {

  return (
    <>
     <Navbar/>      
     <Breadcrumbs/>       
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xizmat-qoshish" element={<AddService/>} />
        <Route path="/" element={<Home />} />
        <Route path="/:categoryPath" element={<CategoryPage />} />
        <Route path="/:categoryPath/:subCategoryPath" element={<SubcategoryPage />} />  
        <Route path="/:categoryPath/:subCategoryPath/:artistSlug" element={<ArtistDetailPage />} />
      </Routes>
      

    
    </>
  )
}

export default App
