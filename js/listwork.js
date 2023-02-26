function addItem() {
  var task = document.getElementById("myInput").value;
  if (task !== '') {
	  var t = document.createTextNode(task);
	  var li = document.createElement("li");
	  li.appendChild(t);
	  li.className = document.getElementById("colorPicker").value;
	  document.getElementById("myInput").value = "";
	  const date = new Date(document.getElementById("dueDate").value);
	  var d = document.createTextNode(date.toLocaleDateString("en-US",{timeZone: "UTC"}));
	  if (isNaN(date) == false){
		  var da = document.createElement("SPAN");
		  da.appendChild(d);
		  da.className = "showDate";
		  li.appendChild(da);
	  }
	  document.getElementById("dueDate").value = "";
	  var o = document.getElementsByClassName('addTo');
	  if (o.length >= 1) {
		  li.classList.toggle('blue');
		  o[0].appendChild(li);
	  }
	  else {
		document.getElementById("toDos").appendChild(li);
	  }
  }
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var span2 = document.createElement("SPAN");
  var txt2 = document.createTextNode("+");
  span.className = "close";
  span2.className = "add";
  span.appendChild(txt);
  span2.appendChild(txt2);
  li.appendChild(span);
  li.appendChild(span2);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
	  div.className = '';
      div.style.display = "none";
    }
  }
  
  for (i = 0; i < add.length; i++) {
	  add[i].onclick = function() {
		var div = this.parentElement;
		if (div.className.includes('addTo')){
			div.classList.toggle('addTo');
		}
		else{
			var on = document.getElementsByClassName('addTo');
			var j;
			for (j = 0; j < on.length; j++) {
				on[j].classList.toggle('addTo');
			}
			div.classList.toggle('addTo');
		}
	  }
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
	  ev.target.classList.toggle('crossed');
	  if (ev.target.className.includes('crossed')) {
		  var audio = document.getElementById("audio");
		  audio.play();
	  }
  }
}, false);

//attach Buttons
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var span2 = document.createElement("SPAN");
  var txt2 = document.createTextNode("+");
  span.className = "close";
  span2.className = "add";
  span.appendChild(txt);
  span2.appendChild(txt2);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(span2);
}

//Close Button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

//Add Button
var add = document.getElementsByClassName("add");
var i;
for (i = 0; i < add.length; i++) {
  add[i].onclick = function() {
	var div = this.parentElement;
	if (div.className.includes('addTo')){
		div.classList.toggle('addTo');
	}
	else{
		var on = document.getElementsByClassName('addTo');
		var j;
		for (j = 0; j < on.length; j++) {
			on[j].classList.toggle('addTo');
		}
		div.classList.toggle('addTo');
	}
  }
}