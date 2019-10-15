function removeDuplicates(){

	var products = document.getElementsByClassName("product");
	var itemsArray = Array.from(products);
	var itemIndex;

	for (itemIndex = 0; itemIndex < itemsArray.length; ++itemIndex) {

		var classList = itemsArray[itemIndex].classList;
		var classArray = [].slice.apply(itemsArray[itemIndex].classList);
		var index, value, result;

		for (index = 0; index < classArray.length; ++index) {
			value = classArray[index];
			if (value.substring(0,14) === "product-color-") {
				result = value;
				break;
			}
		}
		$('.' + result).slice(1).remove();
	}

};
try {document.addEventListener("DOMContentLoaded", removeDuplicates, false)}
catch(e){window.attachEvent("onload", removeDuplicates)}