//your JS code here. If required.
const select = document.getElementById("colorSelect");
const button = document.querySelecter('input[type="button"]');

button.addEventListener("click", function() => {
	select.remove(select.selectedIndex);
});