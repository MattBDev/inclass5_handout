// ADD NEW ITEM TO END OF LIST
document.getElementsByTagName('ul')[0].innerHTML += '<li>Cream</li>';

document.getElementsByTagName('ul')
// ADD NEW ITEM START OF LIST
document.getElementsByTagName('ul')[0].innerHTML = '<li>Kale</li>' + document.getElementsByTagName('ul')[0].innerHTML;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
  document.getElementsByTagName('li')[i].className = 'cool';
}
const span = document.createElement("span");
span.innerText = document.getElementsByTagName('li').length;
document.getElementsByTagName('h2')[0].insertAdjacentElement('beforeend', span);
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
