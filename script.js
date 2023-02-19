// {.......opening and closing menu on click.......}

const menu = document.querySelector('.menu');
const NavMobile = document.querySelector('.nav-mobile');
const closeMenu = document.querySelector('.close-menu');

menu.addEventListener('click', ()=>{
    NavMobile.classList.toggle('show');
    
})
closeMenu.addEventListener('click', ()=>{
    NavMobile.classList.remove('show');
})


// {................sliding image...................}

const imageSlide = document.querySelector('.image-slide')
const slides = Array.from(imageSlide.children);
const rightClick = document.querySelector('.right');
const leftClick = document.querySelector('.left');


const slideSize = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index)=>{
    slide.style.left = slideSize * index + 'px';
})

function slideImage(currentSlide, targetSlide){
    imageSlide.style.transform = 'translateX(-'+ targetSlide.style.left +')'
    currentSlide.classList.remove('active-slide')
    targetSlide.classList.add('active-slide')

}

rightClick.addEventListener('click',e =>{
    const currentSlide = document.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling;

    slideImage(currentSlide, nextSlide)

})

leftClick.addEventListener('click',e =>{
    const currentSlide = document.querySelector('.active-slide');
    const previousSlide = currentSlide.previousElementSibling;
   
    slideImage(currentSlide, previousSlide)
   
})

// {.............adding item in cart.............}
 const currentUnit = document.querySelector('.units')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')


let a = 1;

plus.addEventListener('click',()=>{
    a++;
    a = (a < 10) ? a : a;
    currentUnit.innerText = a;
})

minus.addEventListener('click',()=>{
  if(a > 1){
    a--;
    a = (a < 10) ?  a : a;
    currentUnit.innerText = a;
  }
})


// {...........display cart-items on click.............}

const cart = document.querySelector('.cart');
const checkout = document.querySelector('.checkout')

cart.addEventListener('click', e =>{
    if(checkout.ariaDisabled==='true'){
    checkout.style.transform = checkout.style.transform = 'translateY(80px)'
    checkout.setAttribute('aria-disabled', 'false')
    console.log(checkout.style.top);
    }
    else{
        if(checkout.ariaDisabled==='false'){
            checkout.style.transform = checkout.style.transform = 'translateY(-220px)'
            checkout.setAttribute('aria-disabled', 'true')
            }
    }
})

// {...............adding items into cart..............................}

const button = document.querySelector('.button');
const unit = document.querySelector('#unit');
const currentCost = document.querySelector('.current-cost span');
const totalCost = document.querySelector('#total-amount')
const product = document.querySelector('.product');
const emptyCart = document.querySelector('.empty-cart');
const activeCart = document.querySelector('.active-cart')
// console.log(activeCart);

const nums = [currentCost.innerText, totalCost.innerText, currentUnit.innerText]
let currentCostNum = nums[0];


 button.addEventListener('click',()=>{
    unit.innerText = currentUnit.innerText;
    totalCost.innerText =   '$' +  Number(currentCostNum) * Number(currentUnit.innerText) + '.00';
    emptyCart.style.display = 'none'
    product.style.display = 'flex'

    activeCart.innerText = currentUnit.innerText
    activeCart.style.display = 'inline'
     
 })

// {.........deleting items from cart.........}

const removeItems = document.querySelector('.delete')

removeItems.addEventListener('click',()=>{
       emptyCart.style.display = 'block'
       product.style.display = 'none'
       activeCart.style.display = 'none'
})



// {..............................................}





