var brandListElement = document.getElementById("brandList");

brandList.forEach((brandName, index)=>{
	brandListElement.innerHTML += `<a href="#" onclick="showProduct(this)"><div>${brandName}</div></a>`
});

