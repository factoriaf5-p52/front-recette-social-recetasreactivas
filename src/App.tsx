import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import { NotFound ,Home,List, Login ,Profile, RecipeDetail, ShoppingList, SocialPage, Statistic, UploadForm, AxiosTest} from './Pages/index';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Layout/>}>
       <Route path="/AxiosTest" element={<AxiosTest/>}/>
       <Route path="/Home" element={<Home/>}/>
       <Route path="/List" element={<List/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/RecipeDetail" element={<RecipeDetail/>}/>
       <Route path="/ShoppingList" element={<ShoppingList/>}/>
       <Route path="/Statistic" element={<Statistic/>}/>
       <Route path="/SocialPage" element={<SocialPage/>}/>
       <Route path="/UploadRecipe" element={<UploadForm/>}/>
       <Route path="*" element={<NotFound/>}/>
      </Route>
      </Routes>

    </div>
  );
}

export default App;
