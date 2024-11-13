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

// this is for disable the inspect 

(function() {
  var element = new Image();
  Object.defineProperty(element, 'id', {
      get: function() {
          // This is triggered when the developer tools are opened
          alert('Developer tools are open. Actions may be restricted!');
      }
  });
  console.log(element);
})();
// Prevent common developer tools shortcuts and right-click
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && (event.key === 'i' || event.key === 'I' || event.key === 'u' || event.key === 'U' || event.key === 'j' || event.key === 'J' || event.key === 's' || event.key === 'S')) {
      event.preventDefault();
      alert("Shortcut disabled");
  }
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert("Right-click is disabled");
});



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