import React, { FormEventHandler, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';
import { NotFound, Landing,List, Login ,Profile, RecipeDetail, ShoppingList, SocialPage, Statistic, UploadForm, AxiosTest} from './Pages/index';
import { authService } from './services/auth.service';

function App() {

  const navigate = useNavigate()

  const[loggedInUser, setLoggedInUser]=useState<string|null>(null)

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault();

    
    try {
      const result = await authService.login({
        email:'juancoookie@recipes.com',
        password:'123456'
      })

      localStorage.setItem('token',result.data.access_token)

      setLoggedInUser(localStorage.getItem('token'))

      navigate('/Profile',{replace:true});

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">
      <Routes>
      <Route element={<Layout/>}>
       <Route path="/AxiosTest" element={<AxiosTest/>}/>
       <Route path="/" element={<Landing/>}/>
       <Route path="/List" element={<List/>}/>
       <Route path="/Auth/Login" element={<Login handleSubmit = {handleSubmit}/>}/>
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
