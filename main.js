'use strict'

// let imageEl = document.getElementById("image");

const axiosInstance = axios.create({
    baseURL: "https://picsum.photos/500/500",
    timeout: 10000
});

const state = {
    images: [],
}


const network = {
    getImg: async () => {
        return await axiosInstance.get()
            .then(res => {return res})
            .catch(err => {
                console.log("Error ", err);
            })
    }
}

const carouselContainer = document.querySelector('.carousel-inner');

const renderItem = (item , active) => {

    const itemTemplate = `<div class="carousel-item ${active ? 'active' : ''}">
                        <img class="d-block w-100"
                            src="${item}"
                            alt="First slide">
                      </div>`;

    carouselContainer.insertAdjacentHTML('beforeend', itemTemplate);
}



 setInterval(()=>{
    network.getImg().then(res => {

        if(res.status == 200) {
            state.images.push(res.request.responseURL);
            console.log(state);
            carouselContainer.innerHTML = "";

            state.images.forEach( (item, index) => {
                let active = false;
                if(index == 0 ){
                    active = true;
                }
                renderItem(item, active);
            })

            if(state.images.length > 5) {
                state.images.splice(0,1);
            }

        }
     })
 },2000)