/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//Current Img index num
let indexNum = 1
showImg(indexNum)

//Changes the indexNum when the left or right button is clicked
function carouselBtns(num){
  showImg(indexNum += num)
}

function showImg(indexNum){

  //grab all the <img>s in the carousel
  //const imgBox = document.querySelector('.carousel')
  const images = document.querySelectorAll('.carousel img')
  
  //Adjust the index num so it "wraps from front to back and vice versa"
  if(indexNum > images.length) { indexNum = 1 }

  if(indexNum < 1){ indexNum = images.length }
console.dir(images)
images[indexNum - 1]

}


//Creates an Img Carousel Component
function createCarousel(){

  //Create the elements
  const carousel = document.createElement('div')

    //Inside the carousel
    const leftBtn = document.createElement('div')
    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const img4 = document.createElement('img')
    const rightBtn = document.createElement('div')

  //Add class names
  carousel.classList.add('carousel')
    
    leftBtn.classList.add('left-button')
    img1.classList.add('slide-img')
    img2.classList.add('slide-img')
    img3.classList.add('slide-img')
    img4.classList.add('slide-img')
    rightBtn.classList.add('right-button')

  //Add the contents to the elements
  leftBtn.textContent = ' < '
  img1.src = './assets/carousel/mountains.jpeg'
  img2.src = './assets/carousel/computer.jpeg'
  img3.src = './assets/carousel/trees.jpeg'
  img4.src = './assets/carousel/turntable.jpeg'
  rightBtn.textContent = ' > '

  //Add event listeners
  leftBtn.addEventListener('click', carouselBtns(-1))
  rightBtn.addEventListener('click', carouselBtns(1))

  //Structure the elements
  carousel.appendChild(leftBtn)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightBtn)

  return carousel
}

const carouselContainter = document.querySelector('.carousel-container')
carouselContainter.appendChild(createCarousel())