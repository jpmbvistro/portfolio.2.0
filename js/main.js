/*********
Feature portfolio piece listener

**********/
const portfolioPieceButtons = document.querySelectorAll('.feature-button')
portfolioPieceButtons.forEach((item, i) => {  item.addEventListener('click', changefeature)})

function changefeature(button) {
  let portfolioPieces = document.querySelectorAll(".portfolio-piece")
  portfolioPieces.forEach(item => item.classList.remove('feature-card'))
  let newFeature = button.currentTarget.parentElement.parentElement.parentElement.parentElement
  newFeature.classList.add('feature-card')
  // resizeGridItem(newFeature)
  resizeAllGridItems()
  setTimeout(_=>{resizeAllGridItems()}, 500)
}












/**********
Masonry Layout
Adapted from Andy Barefoot
https://codepen.io/andybarefoot/pen/QMeZda
***********/
function resizeGridItem(item){
  grid = document.querySelector(".portfolio .grid-container");
  // console.log(grid)
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.portfolio-piece .content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  // console.log(rowSpan)
    item.style.gridRowEnd = "span "+(rowSpan-1);
}

function resizeAllGridItems(){
  console.log('resizing')
  allItems = document.getElementsByClassName("portfolio-piece");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems();
setTimeout(_=>{resizeAllGridItems()}, 500)
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("portfolio-piece");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
