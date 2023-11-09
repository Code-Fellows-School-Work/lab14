'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

// loop to find sweep and modify file extension from jpg to png

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}
// TODO: Fill in this instance method to save product data to local storage
AppState.prototype.saveToLocalStorage = function () {
  let saveAppState = {
    AppState: this.allProducts, 
  };
  // console.log(saveAppState);
  localStorage.setItem('savedData', JSON.stringify(saveAppState));
}
// TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
AppState.prototype.loadItems = function () {
  let storedData = localStorage.getItem('savedData');
  console.log(storedData);
  if (storedData) {
    let parseData = JSON.parse(storedData);
    console.log(parseData);
    for (let i = 0; i < parseData.AppState.length; i++) {
      let getData = parseData.AppState[i];
      new Product(getData.name, getData.source, getData.timesClicked, getData.timesShown)
    }
  } else AppState.prototype.instantiateProducts = function () {

    const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
  
  // loop to find sweep and modify file extension from jpg to png
  
    for (let i = 0; i < productNames.length; i++) {
      if (productNames[i] === 'sweep') {
        this.allProducts.push(new Product(productNames[i], 'png'))
      } else {
        this.allProducts.push(new Product(productNames[i]))
      }
    }
  
  }
  this.instantiateProducts();

}


function Product(name, fileExtension = 'jpg', timesClicked = 0, timesShown = 0) {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = timesClicked;
  this.timesShown = timesShown;
}
