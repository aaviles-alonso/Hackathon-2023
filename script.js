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
        .then(res => {
            const imgUrl = res.data.url
            birthdayImg.src = imgUrl
            // console.log(imgUrl)
            // window.location.replace("./pages/subpage.html")
            document.getElementById("secondPage").scrollIntoView({ behavior: 'smooth' });
        })
        .catch(err => console.log(err))
})

// page 2

// birthdayImg.addEventListener('click', function(){

// })

const ranBtn = document.querySelector('.form__btn--ron')
const insoBtn = document.querySelector('.form__btn--insp')

// ron event
ranBtn.addEventListener('click', () => {
    axios
        .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
})

// random num func
const randomNum = (num) => {
    return Math.floor(Math.random() * num)
}

const quoteForm = document.querySelector('.quote__form')
// console.log(quoteForm);

// click event for a search quote
quoteForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const result = evt.target[0].value
    quoteForm.reset()
    axios
        .get(`https://api.quotable.io/quotes?tags=${result}`)
        .then(res => {
            const quotesData = res.data.results
            if (quotesData.length !== 0) {
                const newQuote = quotesData[randomNum(7)].content
            } else {
                console.log('try again')
            }
        })
        .catch(err => console.log(err))
})

// click event for random quote
insoBtn.addEventListener('click', () => {
    axios
        .get('https://api.quotable.io/quotes?/random')
        .then(res => {
            const quoteArray = res.data.results[randomNum(20)].content
            console.log(quoteArray)
        })
        .catch(err => console.log(err))
})
