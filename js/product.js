
var productAreaElement = document.getElementById("productArea")

productAreaElement.innerHTML = `<center><h1 class="productHeading">Brands</h1></center><br><br>`
brandList.forEach((brandName,index)=>{
		productAreaElement.innerHTML += `<div class="product" id="P${index+1}">
										<a href="#" onclick="showProduct(this)"><img src="img/brands/${brandName}.jpg"><br>
										<center><div class="center" style="display:block !important;bottom:10%;width:100%;position:absolute;font-weight:normal;border: 1px solid black;">${brandName}</div></center>
								 </a></div>`;						 	
	});
	productAreaElement.innerHTML += "<br><br><br><br><br><br>"
var showProduct = (productClicked) => {

		productAreaElement.innerHTML = "";
		var productSelected = productClicked.children[productClicked.children.length-1].textContent.trim() //Removing unecessary tags to capture only name of product
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
	productAreaElement.innerHTML += "<br><br><br><br><br><br>"		
}