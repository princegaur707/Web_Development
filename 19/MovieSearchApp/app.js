const form = document.querySelector('form');
const list = document.getElementById('list');


function getMovies(searchText) {


    // Remove all displayed movies first of earlier
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
    .then((res) => {

        for (let item of res.data) {
            if (item.show.image) {
                const image = document.createElement('img');
                image.src = item.show.image.medium;//medium helps in not showing error 
                //when there is no image available for particular item

                image.style.margin = '10px';

                list.append(image);//we are not loading page again we are just appending in the same page
            }
            
        }

        
    })
    .catch((err) => {
        console.log(err);
    })


}





form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const inpText = form.elements[0].value;

    getMovies(inpText);

    form.elements[0].value = "";

})