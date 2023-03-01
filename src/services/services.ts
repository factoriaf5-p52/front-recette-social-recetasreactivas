import axios from "axios";

const apiBase = "http://backendrecettesocial-production.up.railway.app/api/v1/"

const recipeServices = {
    getAll(){
        return fetch(apiBase+ `recipes`)
        .then(res=>res.json())
        .then(data=>
            {console.log(data); 
                return data})
    },

     getById(id:string){
        return axios.get(apiBase + `recipes/recipe/${id}`).then((res)=>(res.data))
},

     deleteById(id:string){
      return axios.delete(apiBase + `/${id}`).then((res) => res.data)
      .catch((err)=>console.log(err))
    }

}

export default recipeServices;