
let aLink = document.querySelector("#link");
function getAttributes(){
   console.log("href: " + aLink.getAttribute('href'));
   console.log("hreflang: " + aLink.getAttribute('hreflang'));
   console.log("rel: " + aLink.getAttribute('rel'));
   console.log("target: " + aLink.getAttribute('target'));
   console.log("type: " + aLink.getAttribute('type'));
}
