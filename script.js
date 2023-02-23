// page 1

    // birthday element
    const form = document.querySelector('.form')
    const birthdayImg = document.querySelector('.hero__image--birthday')
    // console.log(form);

    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        const birthday = evt.target[0].form[0].value

        console.log(birthdayImg)


    axios
    .get(`https://api.nasa.gov/planetary/apod?&api_key=q1XEUiw06v4jXf5oi8SaSMbqRAWrvwiToudHqxQT&date=${birthday}`)
    .then(res =>{
        const imgUrl = res.data.url
        birthdayImg.src = imgUrl
        // console.log(imgUrl)
        // window.location.replace("./pages/subpage.html")
        document.getElementById("secondPage").scrollIntoView({behavior: 'smooth'});
    })
    .catch(err=> console.log(err))
    })

// page 2

    // birthdayImg.addEventListener('click', function(){

    // })

const ranBtn = document.querySelector('.form__btn--ron')
const insoBtn = document.querySelector('.form__btn--insp')

ranBtn.addEventListener('click', () => {
    axios
    .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
})


insoBtn.addEventListener('click', () => {
    axios
    .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => console.log(err))
})