
document.addEventListener('scroll',()=>{
    // 



    // 
    const header = document.querySelector('header');
    const Home =document.getElementById('Home');
    const Services =document.getElementById('Services');
    const About =document.getElementById('About');
    const Pages =document.getElementById('Pages');
    const Testimonials =document.getElementById('Testimonials');
    
  

   
    if(window.screenY < 100){
        header.classList.add('scrolled');
        // Services.classList.add('active');
        // Home.classList.remove('active')
    }
    else {

        header.classList.remove('scrolled');
    }
});
// dropdown

 function dropdown(){
    const drop=document.getElementById('down');
    drop.style.display='block';

}
function dropdown1(){
    const drop=document.getElementById('down');
    drop.style.display='none';

}


// change color in li

// get details
function getDetails() {
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let sub=document.getElementById('subject');
    window.location="Demo.html"
    console.log("Name :"+name.value);
    console.log("Email :"+email.value);
    console.log("Subject :"+sub.value);
}

function services1() {

    const table_WebDesign=document.getElementById('WebDesign');
    const table_Graphics=document.getElementById('Graphics');
    const table_WebCoding=document.getElementById('WebCoding');

    table_WebDesign.style.visibility='visible';
    table_Graphics.style.visibility='hidden';
    table_WebCoding.style.visibility='hidden';
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
    const Pages =document.getElementById('Pages');
    const Testimonials =document.getElementById('Testimonials');
    const animation =document.getElementById('card-1');
    let curScroll = window.pageYOffset;

      if (curScroll >= 720 && curScroll <= 950) {
        Services.classList.add('active');
        Home.classList.remove('active');
      
       
      } else if (curScroll >= 1820 && curScroll <= 2065 ) {
        Services.classList.remove('active');
        Home.classList.remove('active');
        About.classList.add('active');4
        
      } else if (curScroll >= 3520 && curScroll <= 3980) {
        Services.classList.remove('active');
        Home.classList.remove('active');
        About.classList.remove('active');
        Testimonials.classList.add('active');
        animation.style.animation='faderight 0.5s linear forwards';
        // animation



      }
     
  });





