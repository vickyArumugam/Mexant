
document.addEventListener('scroll',()=>{

    const header = document.querySelector('header');

    if(window.screenY < 100){
        header.classList.add('scrolled');
    }

});

// arrow click
   function left_Arrow(value) {
    let slider =document.getElementById('1');
    slider.classList.remove('background_img3');
    console.log("left");
   }

   function right_Arrow(value) {
    let slider =document.getElementById('1');
    slider.classList.remove('background_img2');
    console.log("right");
   }

  //  svg animation
  function svg_animi() {
    let hover =document.getElementsByClassName('card');
    hover.classList.add('.card svg:hover');

  }
// dropdown

 function dropdown(){
    const drop=document.getElementById('down');
    drop.style.display='block';

}
function dropdown1(){
    const drop=document.getElementById('down');
    drop.style.display='none';

}


// get details
function getDetails() {
    let uname=document.getElementById('name').value;
    let uemail=document.getElementById('email').value;
    let usub=document.getElementById('subject').value;
    let ureson=document.getElementById('pet-select').value;
   
  let userdate=[
    {id:1,name:uname,email:uemail,sub:usub,reson:ureson}
  ]
  localStorage.setItem('user',JSON.stringify(userdate));
     window.location='Demo.html';
}

function services1() {

    const table_WebDesign=document.getElementById('WebDesign');
    const table_Graphics=document.getElementById('Graphics');
    const table_WebCoding=document.getElementById('WebCoding');

    table_WebDesign.style.visibility='visible';
    table_Graphics.style.visibility='hidden';
    table_WebCoding.style.visibility='hidden';
    // table_Graphics.style.opacity='0';
    // table_WebCoding.style.opacity='0';
    // btn color
    const button1=document.getElementById('btn-1');
    const button2=document.getElementById('btn-2');
    const button3=document.getElementById('btn-3');

    button1.style.color='#ff511a';
    button2.style.color='#000';
    button3.style.color='#000';

    table_WebDesign.classList.add('animationT');
}
function services2() {
    const table_WebDesign=document.getElementById('WebDesign');
    const table_Graphics=document.getElementById('Graphics');
    const table_WebCoding=document.getElementById('WebCoding');

    table_WebDesign.style.visibility='hidden';
    table_Graphics.style.visibility='visible';
    table_WebCoding.style.visibility='hidden';
    // btn color
    const button1=document.getElementById('btn-1');
    const button2=document.getElementById('btn-2');
    const button3=document.getElementById('btn-3');

    button1.style.color='#000';
    button2.style.color='#ff511a';
    button3.style.color='#000';
    table_Graphics.classList.add('animationT');

}
function services3() {
    const table_WebDesign=document.getElementById('WebDesign');
    const table_Graphics=document.getElementById('Graphics');
    const table_WebCoding=document.getElementById('WebCoding');

    table_WebDesign.style.visibility='hidden';
    table_Graphics.style.visibility='hidden';
    table_WebCoding.style.visibility='visible';
    // btn color
    const button1=document.getElementById('btn-1');
    const button2=document.getElementById('btn-2');
    const button3=document.getElementById('btn-3');

    button1.style.color='#000';
    button2.style.color='#000';
    button3.style.color='#ff511a';

    table_WebCoding.classList.add('animationT');
}

//  navbar list color changeing
let run=true;
window.addEventListener("scroll", () => {
    const Home =document.getElementById('Home');
    const Services =document.getElementById('Services');
    const About =document.getElementById('About');
    const Testimonials =document.getElementById('Testimonials');
    const animation =document.getElementById('card-1');
    const header = document.querySelector('header');
    let curScroll = window.pageYOffset;

      if(curScroll==0){
        header.classList.remove('scrolled');
      }
      else if(curScroll==10){
        header.classList.add('scrolled');
      }
      else if (curScroll >= 720 && curScroll <= 950) {
        Services.classList.add('active');
        Home.classList.remove('active');
      }
       else if (curScroll >= 1820 && curScroll <= 2065 ) {
        Services.classList.remove('active');
        Home.classList.remove('active');
        About.classList.add('active');4
        
      } else if (curScroll >= 3520 && curScroll <= 3980) {
        Services.classList.remove('active');
        Home.classList.remove('active');
        About.classList.remove('active');
        Testimonials.classList.add('active');
        // animation.style.animation='faderight 0.5s linear forwards';
        // animation
      }
     
  });


  //card movieing

  let currentIndex = 0;
const cards = document.querySelectorAll('.swiper_card');
const totalCards = 3;
// console.log(totalCards);


function showSlide(index) {
    currentIndex = index;
    const slides = document.querySelector('.parent-card');
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
    
}




function updateDots() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);

    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    showSlide(currentIndex);
}

function currentSlide(index) {
    showSlide(index);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 2000);

// Initial display
showSlide(currentIndex);





