//your JS code here. If required.
const select = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", () =>{
	select.remove(select.selectedIndex);
});