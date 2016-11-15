/* When the user clicks the button, toggle between hiding and showing the dropdown content */
function myFunction () {
	document.getElementById ("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it //
window.onclick = function (event) {if (!event.target.matches('.dropbutn')) {

	var dropdowns = document.getElementsByClassName ("dropdown-content");
	var i;
for (i = 0; i<dropdowns.length; i++)
{ var openDropdown = dropdowns[i];
if (openDropdown.slassList.contains('show'));
}}}}