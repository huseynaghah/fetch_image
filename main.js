'use strict'

let imageEl = document.getElementById("image");
const axiosInstance = axios.create({
    baseURL: "https://dog.ceo/api/breeds/image/random",
    timeout: 1000
});

const network = {
    getImg: async (url) => {
        
        return await axiosInstance.get(`${url}`)
            .then(res => {return res.data})
            .catch(err => {
                console.log("Error ", err);
            })
    }
}



 setInterval(()=>{
    network.getImg().then(res => {
        console.log(res);
        imageEl.src = res.message[0]
     })
 },2000)