
var productAreaElement = document.getElementById("productArea")

function showProduct(productClicked){

		var productSelected = productClicked.children[0].textContent.trim(); //Removing unecessary tags to capture only name of product
		productAreaElement.innerHTML = `<center><h1 class="productHeading">${productSelected}</h1></center><br><br>`
		products.forEach((productName, index)=>{
			if(productName.includes(productSelected)){
					productAreaElement.innerHTML += `<div class="product" id="P${index+1}">
										<img src="img/products/${productName[1]}/${productName[0]}.jpg">
										<br>
										<center><div class="center" style="position:absolute; bottom: 0;display:block !important; width:100%">${productName[0]}</div></center>
								 </div>`;	
		}
				
	});
}