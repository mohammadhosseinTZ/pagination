const pagination = document.querySelector(".pagination");
let num =1
const prev =document.querySelector(".prev")
const next =document.querySelector(".next")
const last_page = 45;
next.addEventListener("click" , ()=>{
    num +=1;
    checkBtns(num)
})
prev.addEventListener("click" , ()=>{
    num-=1;
    checkBtns(num)
})
function createPagination(el) {
  pagination.innerHTML = `
    <button class="active btn">1</button>
    <button  class="btn">2</button>
    <button  class="btn">3</button>
    <button  class="btn">...</button>
    <button  class="btn">${last_page}</button>
    `;
}
createPagination();

const btns = document.querySelectorAll(".btn");
pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    num =e.target.innerHTML;
    checkBtns(e.target.innerHTML);
  }
});

function checkBtns(value) {
    console.log(value);
  if (value < 4) {
    pagination.innerHTML = `
    <button class=" btn">1</button>
    <button  class="btn ">2</button>
    <button  class="btn">3</button>
    <button  class="btn">4</button>
    <button  class="btn">...</button>
    <button  class="btn">${last_page}</button>
    `;
    addClass(value);
    return;
  }

  if (value > last_page - 3) {
    pagination.innerHTML = `
        <button class=" btn">1</button>
      
        <button  class="btn">...</button>
        <button  class="btn">${last_page - 5}</button>
        <button  class="btn">${last_page - 4}</button>
        <button  class="btn ">${last_page - 3}</button>
        <button  class="btn">${last_page - 2} </button>
       <button  class="btn">${last_page - 1}</button>
       <button  class="btn">${last_page}</button>
        `;
    addClass(value);
    return;
  }
  if (4 < Number(value) <= last_page - 3) {
    pagination.innerHTML = `
      <button  class="btn">1</button>
      <button  class="btn">...</button>
    <button class=" btn">${value - 2}</button>
    <button  class="btn ">${Number(value) - 1}</button>
    <button  class="btn">${Number(value)}</button>
    <button  class="btn">${Number(value) + 1}</button>
    <button  class="btn">${Number(value) + 2}</button>
    <button  class="btn">...</button>
    <button  class="btn">${last_page}</button>
    `;

    addClass(value);
  }
}




function addClass(val) {
  [...document.querySelectorAll(".btn")]
    ?.filter((e) => e.innerHTML == val)[0]
    .classList.add("active");
}
