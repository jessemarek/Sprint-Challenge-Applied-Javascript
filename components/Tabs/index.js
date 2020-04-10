// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

//Get data from server
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res =>{
        //Create a new tab for each topic in the array
        const topicTitles = res.data.topics
        topicTitles.forEach(title => {
            topics.appendChild(createTab(title))
        })
    })
    .catch(err =>{
        //Log the error if our .get() fails
        console.log('ERROR: ', err)
    })



function createTab(str){

    //Create the element
    const tab = document.createElement('div')

    //Add class name
    tab.classList.add('tab')

    //add content to element
    tab.textContent = str

    return tab
}