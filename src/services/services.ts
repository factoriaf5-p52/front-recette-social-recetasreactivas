import axios from "axios";

const apiBase = "http://backendrecettesocial-production.up.railway.app/api/v1/"

const recipeServices = {
    getAll(){
        return fetch(apiBase+ `recipes`)
        .then(res=>res.json())
        .then(data=>data)
    },

    getById(id:string){
        return axios.get(apiBase + `recipes/recipe/${id}`).then((res)=>(res.data))
},

    async deleteById(id:string){
        try {
            const res = await axios.delete(apiBase + `recipes/recipe/${id}`);
            return (res.data);
        } catch (err) {
            return console.log(err);
        }
    }

}

export default recipeServices;