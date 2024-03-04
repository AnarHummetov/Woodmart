// Code for Add active class Shop menu items
const submenuitems = document.querySelectorAll(".sub-menu-item");
const subdropdownmenu = document.querySelectorAll(".sub-dropdown-menu");
const submenu = document.querySelector(".sub-menu");

submenuitems.forEach((submenuitem) => {
    
  submenuitem.addEventListener("mouseover", () => {
    submenuitems.forEach((item)=>{
      if (item !== submenuitem) {
        item.classList.remove('active');
        item.children[1].classList.remove("active");
      }else{
        item.classList.add('active');
        item.children[1].classList.add("active");
      }
    })
  });
});


// accordion code
const accordionItems = document.querySelectorAll(".my-accordion-item");
accordionItems.forEach((accordionItem) => {
    
  accordionItem.addEventListener("click", () => {
    accordionItems.forEach((item)=>{
      if (item !== accordionItem) {
        item.classList.remove('active');
      }
    })
      if (accordionItem.classList.contains('active')) {
        accordionItem.classList.remove('active');
      }else{
        accordionItem.classList.add('active');
      }
  });
});

// Slider codes here
const boxs = document.querySelectorAll(".box");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

var counter = 0;

// Next button code
next.addEventListener("click", slideNext);
function slideNext() {
  boxs[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= boxs.length - 1) {
    counter = boxs.length - 1;
  } else {
    counter++;
  }
  boxs[counter].style.animation = "next2 0.5s ease-in forwards";
}

// Prev button code
prev.addEventListener("click", slidePrev);
function slidePrev() {
  boxs[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = 0;
  } else {
    counter--;
  }
  boxs[counter].style.animation = "prev2 0.5s ease-in forwards";
}

// code for top sellers slider
const topsellers = document.querySelectorAll(".topsellers .topseller-box");
const after = document.querySelector(".topsellers .after");
const before = document.querySelector(".topsellers .before");

var num = 0;
// Next button code
after.addEventListener("click", () => {
  topsellers[num].style.animation = "next1 0.5s ease-in forwards";
  if (num >= topsellers.length - 1) {
    num = topsellers.length - 1;
  } else {
    num++;
  }
  topsellers[num].style.animation = "next2 0.5s ease-in forwards";
});

// Prev button code
before.addEventListener("click", () => {
  topsellers[num].style.animation = "prev1 0.5s ease-in forwards";
  if (num == 0) {
    num = 0;
  } else {
    num--;
  }
  topsellers[num].style.animation = "prev2 0.5s ease-in forwards";
});

// code for electronic category slider
const electronicCarousel = document.querySelector(
  ".electronic-carousel .electronic-carousel-inner"
);
const electronicNextBtn = document.querySelector(
  ".electronic-carousel .electronic-carousel-btns .next"
);
const electronicPrevBtn = document.querySelector(
  ".electronic-carousel .electronic-carousel-btns .prev"
);
var caroselWidth = electronicCarousel.clientWidth;

// code for electronic category images slider
const electronicImgCarousel = document.querySelector(
  ".electronic-carousel .electronic-img-carousel-inner"
);
const electronicImgNextBtn = document.querySelector(
  ".electronic-carousel .electronic-img-carousel-btns .next"
);
const electronicImgPrevBtn = document.querySelector(
  ".electronic-carousel .electronic-img-carousel-btns .prev"
);
var imgCaroselWidth = electronicImgCarousel.clientWidth;

// code for next button
electronicNextBtn.addEventListener("click", () => {
  electronicCarousel.scrollLeft += caroselWidth;
});

electronicImgNextBtn.addEventListener("click", () => {
  electronicImgCarousel.scrollLeft += imgCaroselWidth;
});
// code for prev button
electronicPrevBtn.addEventListener("click", () => {
  electronicCarousel.scrollLeft -= caroselWidth;
});

electronicImgPrevBtn.addEventListener("click", () => {
  electronicImgCarousel.scrollLeft -= imgCaroselWidth;
});

//code for sale product slider
const saleproducts = document.querySelectorAll(".saleproducts .topseller-box");
const saleafter = document.querySelector(".saleproducts .after");
const salebefore = document.querySelector(".saleproducts .before");

var num = 0;
// Next button code
saleafter.addEventListener("click", () => {
  saleproducts[num].style.animation = "next1 0.5s ease-in forwards";
  if (num >= saleproducts.length - 1) {
    num = saleproducts.length - 1;
  } else {
    num++;
  }
  saleproducts[num].style.animation = "next2 0.5s ease-in forwards";
});

// Prev button code
salebefore.addEventListener("click", () => {
  saleproducts[num].style.animation = "prev1 0.5s ease-in forwards";
  if (num == 0) {
    num = 0;
  } else {
    num--;
  }
  saleproducts[num].style.animation = "prev2 0.5s ease-in forwards";
});

//code for hot deals slider
const hotdeals = document.querySelectorAll(".hotdeals .topseller-box");
const dealafter = document.querySelector(".hotdeals .after");
const dealbefore = document.querySelector(".hotdeals .before");

var num = 0;
// Next button code
dealafter.addEventListener("click", () => {
  hotdeals[num].style.animation = "next1 0.5s ease-in forwards";
  if (num >= hotdeals.length - 1) {
    num = 0;
  } else {
    num++;
  }
  hotdeals[num].style.animation = "next2 0.5s ease-in forwards";
});

// Prev button code
dealbefore.addEventListener("click", () => {
  hotdeals[num].style.animation = "prev1 0.5s ease-in forwards";
  if (num == 0) {
    num = hotdeals.length - 1;
  } else {
    num--;
  }
  hotdeals[num].style.animation = "prev2 0.5s ease-in forwards";
});

// code for hand tools slider
const handToolsCarousel = document.querySelector(
  ".electronic-carousel .building-tools-carousel-inner"
);
const handToolsNextBtn = document.querySelector(
  ".electronic-carousel .building-tools-carousel-btns .next"
);
const handToolsPrevBtn = document.querySelector(
  ".electronic-carousel .building-tools-carousel-btns .prev"
);
var caroselWidth = electronicCarousel.clientWidth;

// code for next button
handToolsNextBtn.addEventListener("click", () => {
  handToolsCarousel.scrollLeft += caroselWidth;
});

// code for prev button
handToolsPrevBtn.addEventListener("click", () => {
  handToolsCarousel.scrollLeft -= caroselWidth;
});


