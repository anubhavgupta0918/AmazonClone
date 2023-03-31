import { todayDeal } from "./todayDeal.js"
import { furniture } from "./furniture.js"
import { art } from "./art.js"
import { kichen } from "./kichen.js"

let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}
//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 2000);




/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})




//today deals 
console.log(todayDeal)
let todayDealProductListEl = document.querySelector(".today_deals_product_list")
console.log(todayDealProductListEl)

let todayDealProductHTML = ""

let todayDeallength = todayDeal.length

for (let i = 0; i < todayDeallength; i++) {
    // console.log(todayDeal[i])

    todayDealProductHTML += `
        <div class="today_deals_product_item">
                <div class="todayDeals_product_image">
                    <img src=${todayDeal[i].img} />
                </div>
            


            <div class="discount_Contaienr">
                <a href="#">Up to ${todayDeal[i].discount}% off</a>
                <a href="#">${todayDeal[i].DealOfDay}</a>
            </div>
            <p>${todayDeal[i].desc}</p>
        </div>
    `
}

todayDealProductListEl.innerHTML = todayDealProductHTML
//  console.log(todayDealProductHTML)

let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item")

let startProduct = 0;


today_deal_btn_prevEl.addEventListener("click", () => {

   
    if(startProduct < 0){
        startProduct += 500
    }
    if(startProduct > -2000){
        today_deals_product_itemEl.forEach(el =>{
            el.style.transform = `translateX(${startProduct}%)`
        })
    }

})

today_deal_btn_nextEl.addEventListener("click", () => {
    // alert("next")
    
    if(startProduct > -1500){
        startProduct -= 500
    }

    today_deals_product_itemEl.forEach(el =>{
        el.style.transform = `translateX(${startProduct}%)`
    })
    
    
})


// //product slider 1
console.log(furniture)
let product_container_slider_list_E_1  = document.querySelector(".product_container_slider_list_1")
console.log(product_container_slider_list_E_1)

let product_container_slider_HTML_1 = ""

let product_container_slider_length_1 = furniture.length

for (let i = 0; i < product_container_slider_length_1; i++) {


    product_container_slider_HTML_1 += `
        <div class="product_container_slider_item_1">
                <div class="product_container_slider_image_1">
                    <img src=${furniture[i].img} />
                </div>
        </div>
    `
}

product_container_slider_list_E_1.innerHTML = product_container_slider_HTML_1


let product_container_slider_btn_prevE_1 = document.getElementById("product_container_slider_btn_prev_1")
let product_container_slider_btn_nextE_1 = document.getElementById("product_container_slider_btn_next_1")
let product_container_slider_item_E_1 = document.querySelectorAll(".product_container_slider_item_1")

let startProduct_1 = 0;


product_container_slider_btn_prevE_1.addEventListener("click", () => {

   
    if(startProduct_1 < 0){
        startProduct_1 += 500
    }
    if(startProduct_1 > -2000){
        product_container_slider_item_E_1.forEach(el =>{
            el.style.transform = `translateX(${startProduct_1}%)`
        })
    }

})

product_container_slider_btn_nextE_1.addEventListener("click", () => {
    
    if(startProduct_1 > -1500){
        startProduct_1 -= 500
    }

    product_container_slider_item_E_1.forEach(el =>{
        el.style.transform = `translateX(${startProduct_1}%)`
    })
    
    
})

// //product slider 2
console.log(art)
let product_container_slider_list_E_2  = document.querySelector(".product_container_slider_list_2")
console.log(product_container_slider_list_E_2)

let product_container_slider_HTML_2 = ""

let product_container_slider_length_2 = art.length

for (let i = 0; i < product_container_slider_length_2; i++) {


    product_container_slider_HTML_2 += `
        <div class="product_container_slider_item_2">
                <div class="product_container_slider_image_2">
                    <img src=${art[i].img} />
                </div>
        </div>
    `
}

product_container_slider_list_E_2.innerHTML = product_container_slider_HTML_2


let product_container_slider_btn_prevE_2 = document.getElementById("product_container_slider_btn_prev_2")
let product_container_slider_btn_nextE_2 = document.getElementById("product_container_slider_btn_next_2")
let product_container_slider_item_E_2 = document.querySelectorAll(".product_container_slider_item_2")

let startProduct_2 = 0;


product_container_slider_btn_prevE_2.addEventListener("click", () => {

   
    if(startProduct_2 < 0){
        startProduct_2 += 500
    }
    if(startProduct_2 > -2000){
        product_container_slider_item_E_2.forEach(el =>{
            el.style.transform = `translateX(${startProduct_2}%)`
        })
    }

})

product_container_slider_btn_nextE_2.addEventListener("click", () => {
    
    if(startProduct_2 > -1500){
        startProduct_2 -= 500
    }

    product_container_slider_item_E_2.forEach(el =>{
        el.style.transform = `translateX(${startProduct_2}%)`
    })
    
    
})

// //product slider 2
console.log(kichen)
let product_container_slider_list_E_3  = document.querySelector(".product_container_slider_list_3")
console.log(product_container_slider_list_E_3)

let product_container_slider_HTML_3 = ""

let product_container_slider_length_3 = kichen.length

for (let i = 0; i < product_container_slider_length_3; i++) {


    product_container_slider_HTML_3 += `
        <div class="product_container_slider_item_3">
                <div class="product_container_slider_image_3">
                    <img src=${kichen[i].img} />
                </div>
        </div>
    `
}

product_container_slider_list_E_3.innerHTML = product_container_slider_HTML_3


let product_container_slider_btn_prevE_3 = document.getElementById("product_container_slider_btn_prev_3")
let product_container_slider_btn_nextE_3 = document.getElementById("product_container_slider_btn_next_3")
let product_container_slider_item_E_3 = document.querySelectorAll(".product_container_slider_item_3")

let startProduct_3 = 0;


product_container_slider_btn_prevE_3.addEventListener("click", () => {

   
    if(startProduct_3 < 0){
        startProduct_3 += 500
    }
    if(startProduct_3 > -2000){
        product_container_slider_item_E_3.forEach(el =>{
            el.style.transform = `translateX(${startProduct_3}%)`
        })
    }

})

product_container_slider_btn_nextE_3.addEventListener("click", () => {
    
    if(startProduct_3 > -1500){
        startProduct_3 -= 500
    }

    product_container_slider_item_E_3.forEach(el =>{
        el.style.transform = `translateX(${startProduct_3}%)`
    })
    
    
})