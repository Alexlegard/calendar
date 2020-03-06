window.onload = pageReady;

function pageReady()
{
	//We want an onclick for each calendar box...
	var day1 = document.getElementById("day1");
	var day2 = document.getElementById("day2");
	var day3 = document.getElementById("day3");
	var day4 = document.getElementById("day4");
	var day5 = document.getElementById("day5");
	var day6 = document.getElementById("day6");
	var day7 = document.getElementById("day7");
	var day8 = document.getElementById("day8");
	var day9 = document.getElementById("day9");
	var day10 = document.getElementById("day10");
	
	var day11 = document.getElementById("day11");
	var day12 = document.getElementById("day12");
	var day13 = document.getElementById("day13");
	var day14 = document.getElementById("day14");
	var day15 = document.getElementById("day15");
	var day16 = document.getElementById("day16");
	var day17 = document.getElementById("day17");
	var day18 = document.getElementById("day18");
	var day19 = document.getElementById("day19");
	var day20 = document.getElementById("day20");
	
	var day21 = document.getElementById("day21");
	var day22 = document.getElementById("day22");
	var day23 = document.getElementById("day23");
	var day24 = document.getElementById("day24");
	var day25 = document.getElementById("day25");
	var day26 = document.getElementById("day26");
	var day27 = document.getElementById("day27");
	var day28 = document.getElementById("day28");
	var day29 = document.getElementById("day29");
	var day30 = document.getElementById("day30");
	
	var day31 = document.getElementById("day31");
	
	
	day1.onclick = function(){ loadDoc(1); }
	day2.onclick = function(){ loadDoc(2); }
	day3.onclick = function(){ loadDoc(3); }
	day4.onclick = function(){ loadDoc(4); }
	day5.onclick = function(){ loadDoc(5); }
	day6.onclick = function(){ loadDoc(6); }
	day7.onclick = function(){ loadDoc(7); }
	day8.onclick = function(){ loadDoc(8); }
	day9.onclick = function(){ loadDoc(9); }
	day10.onclick = function(){ loadDoc(10); }
	
	day11.onclick = function(){ loadDoc(11); }
	day12.onclick = function(){ loadDoc(12); }
	day13.onclick = function(){ loadDoc(13); }
	day14.onclick = function(){ loadDoc(14); }
	day15.onclick = function(){ loadDoc(15); }
	day16.onclick = function(){ loadDoc(16); }
	day17.onclick = function(){ loadDoc(17); }
	day18.onclick = function(){ loadDoc(18); }
	day19.onclick = function(){ loadDoc(19); }
	day20.onclick = function(){ loadDoc(20); }
	
	day21.onclick = function(){ loadDoc(21); }
	day22.onclick = function(){ loadDoc(22); }
	day23.onclick = function(){ loadDoc(23); }
	day24.onclick = function(){ loadDoc(24); }
	day25.onclick = function(){ loadDoc(25); }
	day26.onclick = function(){ loadDoc(26); }
	day27.onclick = function(){ loadDoc(27); }
	day28.onclick = function(){ loadDoc(28); }
	day29.onclick = function(){ loadDoc(29); }
	day30.onclick = function(){ loadDoc(30); }
	
	day31.onclick = function(){ loadDoc(31); }
}





function loadDoc(daynum)
{
	//Create the XMLHttpRequest object
	//The XMLHttpRequest object is used to exchange information
	//with the web server behind the scenes.
	var xhttp = new XMLHttpRequest();
	//Function to be executed when the request is answered
	xhttp.onreadystatechange = function()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			maketable(this, daynum);
		}
	};
	//So now we can open calendar.xml and send the request
	xhttp.open("GET", "calendar.xml", true);
	xhttp.send();
}

//Function to be executed when the server response is ready
function maketable(xml, daynum) {
	//alert("In maketable function daynum: " + daynum);
	//Here we can perform the DOM manipulation.
	var i;
	var xmlDoc = xml.responseXML;
	
	//We want to read the XML document
	
	var tasks = xmlDoc.getElementsByTagName("tasks");
	var y = tasks[daynum-1].childNodes;
	//creates a collection of all the tasks nodes.
	//alert(tasks[0].childNodes[0].nodeValue);
	
	
	var table = "<table border=\"1\">";
	table += "<tbody>";
	table += "<tr>";
	table += "<th>Day:</th>";
	table += "<th>Tasks:</th>";
	table += "</tr>";
	table += "<tr>";
	table += "<td>" + daynum + "</td>";
	table += "<td>";
	
	//alert(y[0].nodeName + " " + y[1].nodeName + " " + y[2].nodeName);
	
	for(i = 0; i < y.length; i++){
		if(y[i].nodeType === 1){
			table += "<p>" + y[i].firstChild.nodeValue + "</p>";
		}
	}
	
	table += "</td>";
	table += "</tr>";
	table += "</tbody>";
	table += "</table>";
	
	document.getElementById("tasks-table").innerHTML = table;
	document.getElementById("tasks-table").style.display = "block";
	
	//Get the Nth day element where N is the current day.
	//var x = xmlDoc.getElementsByTagName("day");
	
}

