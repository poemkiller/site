function changetext() {
  var slide = document.getElementById("art");
  slide.parentNode.removeChild(slide);
//remove the contents of "intro" div


  //create a new div element and add it to the DOM
  var newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  document.getElementById("main").appendChild(newDiv);
  //add image to the new div
  var newImg = document.createElement("img");
  newImg.src = "images/slideone.png";
  newImg.id = "slide1";
  document.getElementById("newDiv").appendChild(newImg);
  var newImg = document.createElement("img");
  newImg.src = "images/slide2.png";
  newImg.id = "slide2";
  document.getElementById("newDiv").appendChild(newImg);
  var newImg = document.createElement("img");
  newImg.src = "images/slide3.png";
  newImg.id = "slide3";
  document.getElementById("newDiv").appendChild(newImg);
  var newImg = document.createElement("img");
  newImg.src = "images/finalflower.png";
  newImg.id = "flower1";
  document.getElementById("ff").appendChild(newImg);
  

  




  




}
