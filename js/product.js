
var productAreaElement = document.getElementById("productArea")

function showProduct(productClicked){

		var productSelected = productClicked.children[0].textContent.trim(); //Removing unecessary tags to capture only name of product
		productAreaElement.innerHTML = `<center><h1 style="text-transform:uppercase;font-family: sans-serif">${productSelected}</h1></center>`
		products.forEach((productName, index)=>{
			if(productName.includes(productSelected)){
					productAreaElement.innerHTML += `<div class="product" id="P${index+1}">
										<img src="img/products/${productName[1]}/${productName[0]}.jpg" width="90%" height="90%" class="center">
										<div class="center">${productName[0]}</div>
								 </div>`;	
		}
				
	});
}