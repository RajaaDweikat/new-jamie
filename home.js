/*change nav color*/

let navbar=document.querySelector(".navbar")
let navlink=document.querySelectorAll('.nav-link')
let changePoint=document.getElementById('change-nav')
let supportSection=document.getElementById('supportSection')
let dropdownItem=document.querySelectorAll('dropdown-item')
 navbar.style.transition='1s'
window.addEventListener('scroll',function(){
   if(window.scrollY >= 50) {
    navbar.style.backgroundColor='white'
    for(let i=0;i<navlink.length;i++){
        navlink[i].classList.replace('text-white','text-black')
    }
   
   }else{
    navbar.style.backgroundColor='rgba(0, 0, 0, 0.2)'
    for(let i=0;i<navlink.length;i++){
        navlink[i].classList.replace('text-black','text-white')
    }

   } 
   
    if( window.scrollY >=  supportSection.offsetTop ){
      
     
}
})

    
  


/*loading*/

let loading=document.querySelector('.loading')
document.body.style.overflow='hidden'
window.addEventListener('load',function(){
    this.setTimeout(function(){
        loading.style.opacity='0'
        loading.style.visibility='hidden'
        loading.style.transition='1s'
        document.body.style.overflow='auto'

    },1000)
})

 /*progress bar*/
 
