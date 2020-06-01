// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//Get article data
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res =>{
        //Create an array of the articles from the data
        const articlesArr = Object.entries(res.data.articles)
        //Loop over the array
        articlesArr.forEach(arr => {
            //articlesArr is an array of arrays with an array of articles in index 1
            //Loop over the array at index 1 and create our article cards
            arr[1].forEach(a => {
                const category = arr[0]
                cardsContainer.appendChild(articleCard(a, category))  
            })
        })
    })
    .catch(err =>{
        console.log('ERROR: ', err)
    })


const cardsContainer = document.querySelector('.cards-container')

function articleCard(obj, str){

    //create the elements
    const card = document.createElement('div')

        //Inside the card div
        const headline = document.createElement('div')
        const author = document.createElement('div')
        const category = document.createElement('p')
           
            //Inside the author div
            const imgContainer = document.createElement('div')
            const byLine = document.createElement('span')

                //Inside the imgContainer div
                const authorPic = document.createElement('img')

    //Add the class names
    card.classList.add('card')

        headline.classList.add('headline')
        author.classList.add('author')

            imgContainer.classList.add('img-container')
            byLine.classList.add()

    //Add content to the elements
    headline.textContent = `${obj.headline}`
    authorPic.src = `${obj.authorPhoto}`
    byLine.textContent = `By ${obj.authorName}`
    category.textContent = `${str}`

    //Structure the elements into the component
    card.appendChild(headline)
    card.appendChild(author)
    card.appendChild(category)

        author.appendChild(imgContainer)
        author.appendChild(byLine)

            imgContainer.appendChild(authorPic)

    return card
}