// Exercice 1 Manipulation de classes
var a=
document.body;
a.classList.remove("bg-aqua");
a.classList.add("bg-olive");

var b=
document.getElementById("first-paragraph");
b.classList.remove("bg-lime", "gray");
b.classList.add("aqua");

var c=
document.getElementsByClassName("bg-silver");
c[0].classList.add("bg-teal");
c[0].classList.remove("bg-silver");

var d=
document.getElementsByTagName("blockquote");
d[0].classList.add("bg-white");

// Exercice 2 Selecteurs CSS
var e=
document.querySelector("#my-table");
e.classList.add("bg-purple");

var f=
document.querySelectorAll(".container p");
for(i=0; i<f.length; i++){
f[i].classList.add("shadow");}

// Exercice 3

var g=
document.querySelector("pre");
g.style.color = "red";
g.style.backgroundColor = "blue";
g.style.borderTop = "3px solid red";
g.style.borderBottom = "3px solid red";

var h=
document.querySelector("h3");
h.innerHTML="<em>Itelic Title ! yeah !</em>";

var i=
document.querySelector("h2");
i.innerHTML="<strong>HTML doens't work !</strong>";
i.style.color ="red";

// Exercie 4 Création d'éléments

var j = document.querySelector("ul");
var element = document.createElement("li");
var newElement = document.createTextNode("Mon meilleur ami est ");
element.appendChild(newElement);

var k = document.createElement("a");
k.href = "http://google.com";
k.innerHTML = "google";
element.appendChild(k);
document.querySelector('ul').appendChild(element);

// Exercice 4  Création et suppression de plusieurs éléments
var l = document.querySelector("ol");
while (l.firstChild){
	l.removeChild(l.firstChild)
}

var m = ["Silent Teacher","Code Monkey", "CodeCombat"];
for (i=0 ; i<m.length ; i++){
	let parent = document.createElement("li");
	let child = document.createTextNode(m[i]);
	parent.appendChild(child);
	l.appendChild(parent);
}

