

//travesing rhe dom
var itemList=document.querySelector('#items');
//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='pink';
console.log(itemList.parentNode.parentNode);
//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='pink';
console.log(itemList.parentElement.parentElement);
//child nodes
console.log(itemList.childNodes);


console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';
//firstchild
console.log(itemList.firstChild);
itemList.firstElementChild.textContent='hello';












