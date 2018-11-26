export default function (array: any,className : any) {
	var menu = document.createElement("ul");
	menu.className = className;
	var listItems = '';
	array.forEach(function (item : any) {
		listItems += '<li>' + item + '</li>';
	});
	menu.innerHTML = listItems;
	return menu;
}
