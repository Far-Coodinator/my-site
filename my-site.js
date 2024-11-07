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