


// this script to open the nav-bar of mobile
let openBtn = document.querySelector('#nav-mob-openBtn')
let closeBtn = document.querySelector('#closebtn')
let navFormobile = document.querySelector('#nav-2 ul')
openBtn.addEventListener('click', ()=>{
    navFormobile.style.width="100vw"
})
closeBtn.addEventListener('click', ()=>{
    navFormobile.style.width="0px"
})



// to show nav bar while scrolling
let lastScrollY = window.scrollY;
const navBar = document.querySelector('#goUp');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= lastScrollY) {
      // User is scrolling down
      navBar.style.opacity = '0'; // Hides the nav bar (adjust height as needed)
    } else {
      // User is scrolling up
      navBar.style.opacity = '0.4'
    }
    lastScrollY = window.scrollY;
  });



  // script for Show more And show less

const ShowMoreBtn = document.querySelector('#show-more .btn')
const hideShowMorebtn = document.querySelector('#show-more')
const hideGrid = document.querySelector('#skills-grid')
const showPageOnClick = document.querySelector('#onclick-Show-more')

// to hode Onclick the Show more btn
ShowMoreBtn.addEventListener('click',()=>{
  hideShowMorebtn.style.display = ' none'
  hideGrid.style.display = 'none'
  showPageOnClick.style.display = 'block'
})
