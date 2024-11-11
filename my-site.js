// . Disable Right-Click and Keyboard Shortcuts 
  // document.addEventListener('contextmenu', event => event.preventDefault());
  // document.addEventListener('keydown', function(event) {
  //   if (event.key === 'F12' || 
  //       (event.ctrlKey && (event.key === 'u' || event.key === 'U' || 
  //                          event.key === 's' || event.key === 'S' || 
  //                          event.key === 'I' || event.key === 'i'))) {
  //     event.preventDefault();
  //   }
  // });



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