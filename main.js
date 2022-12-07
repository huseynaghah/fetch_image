'use strict'

// let imageEl = document.getElementById("image");

const axiosInstance = axios.create({
    baseURL: "https://picsum.photos/500",
    timeout: 1000
});

const network = {
    getImg: async () => {
        
        return await axiosInstance.get()
            .then(res => {return res.data})
            .catch(err => {
                console.log("Error ", err);
            })
    }
}



 setInterval(()=>{
    network.getImg().then(res => {
        console.log(res);
        
     })
 },2000)