// navbar

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

const hamburgerMenu = document.querySelector('#hamburger-menu')

document.addEventListener('click',function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target))
        {
            navbarNav.classList.remove('active');
        }

});

// search box

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

const searchButton = document.querySelector('#search-button')

document.addEventListener('click', function(e) {
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

// shopping cart

const shoppingCart = document.querySelector('.shopping-cart')
const shoppingbutton = document.querySelector('#shopping-cart')

document.querySelector('#shopping-cart').onclick = (e)=>{
    shoppingCart.classList.toggle('active')
    e.preventDefault();

}

document.addEventListener('click',function(e){
    if(!shoppingCart.contains(e.target)&& !shoppingbutton.contains(e.target)){
        shoppingCart.classList.remove('active')
    }
}

)

// modal content
const itemDetailModal = document.querySelector('#item-detail-modal')
const itemDetailButton = document.querySelectorAll('.inspect-product')


itemDetailButton.forEach((btn)=>{
    btn.onclick=(e)=> {
        itemDetailModal.style.display='flex'
        e.preventDefault();
    }
})



// klikk tombol close
const closeButton = document.querySelector('.close-icon')

closeButton.onclick = (e) =>{
    itemDetailModal.style.display='none'
    e.preventDefault()
}

window.onclick= (e)=>{
    if(e.target===itemDetailModal){
        itemDetailModal.style.display='none'
    }
}


// document.querySelector('.close-icon').onclick =(e)=>{
//     modalContainer.classList.remove('active')
//     e.preventDefault()
// }

// document.addEventListener('click',function(e){
//     if(!inspectProduct.contains(e.target)&& !modalContainer.contains(e.target)){
//         modalContainer.classList.remove('active')
//         e.preventDefault()
//     }
// }
// )