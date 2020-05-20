country = ["Finland","Italy","Aland Islands","Cote d'Ivoire","France", "French Guiana", "French Polynesia", "French Southern Territories", "Djibouti", "Gabon", "Georgia", "Gambia", "State of Palestine", "Germany", "Ghana", "Gibraltar", "Kiribati", "Greece", "Greenland", "Grenada"]
region = ["Northern Europe","Southern Europe","Northern Europe","Western Africa","Western Europe", "South America", "Polynesia", "Eastern Africa", "Eastern Africa" ,"Middle Africa", "Western Asia", "Western Africa", "Western Asia", "Western Europe", "Western Africa", "Southern Europe", "Micronesia", "Southern Europe", "Northern America", "Caribbean"]
data2000 = [100, 100, -1, 48.31752, 10, -1, 100, -1, 56.39719, 73.6, -1, 34.3, 99.7, 100, 43.7, 100, -1, 100, 100, 85.98982]
data2017 = [100, 100, -1, 65.63576, 100, -1, 100, -1, 60.2, 92.1912, 100, 56.2, 100, 100, 79, 100, 98.61457, 100, 100, 94.69567]

highestdifference1 = 0
highestdifference2 = 0
highestdifference3 = 0
highestdifference1display = 0
highestdifference2display = 0
highestdifference3display = 0

var ptag = document.getElementById("datadisplay");
var data1 = ""
var data2 = ""

console.log("PERCENTAGE OF POPULATION WITH ACCESS TO ELECTRICITY.")
console.log("")





for (i = 0; i < country.length; i =i + 1) {



	result = "Country: "+ country[i]

	if (data2000[i] === -1) {
		data1 = "Percentage in 2000: NO DATA ";
	}
	else {
		data1 = "Percentage in 2000: " + Math.round(data2000[i]) + "% ";
	}

	if (data2017[i] === -1) {
		data2 = "Percentage in 2017: NO DATA ";
	}
	else {
		data2 = "Percentage in 2017: "+Math.round(data2017[i]) + "% ";
	}

	difference = ""

	if (data2000[i] === -1) {
		difference = "N/A";
	}

	else {
		if (data2017[i] === -1) {
		difference = "N/A";
		}

		else {
			difference = (data2017[i]-data2000[i])
				if (difference > highestdifference1) {
					highestdifference3 = highestdifference2
					highestdifference3display = highestdifference2display
					highestdifference2 = highestdifference1
					highestdifference2display = highestdifference1display
					highestdifference1 = difference
					highestdifference1display = country[i] + " with a " + Math.round(difference) + "% increase."
				}
				else {

					if(difference > highestdifference2){
					highestdifference3 = highestdifference2
					highestdifference3display = highestdifference2display
					highestdifference2display = country[i] + " with a " + Math.round(difference) + "% increase."
					highestdifference2 = difference
					}
					else if (difference > highestdifference3) {
					highestdifference3display = country[i] + " with a " + Math.round(difference) + "% increase."
					highestdifference3 = difference
					}
				}
			}
	}

	var x = document.createElement("P");
	var s = document.createTextNode("---------------------");

	x.appendChild(s);
	ptag.appendChild(x); 

	var x = document.createElement("P");
	var t = document.createTextNode(result);
	
	x.appendChild(t);
	ptag.appendChild(x); 

	var x = document.createElement("P");
	var d1 = document.createTextNode(data1);
	
	x.appendChild(d1);
	ptag.appendChild(x);

	var x = document.createElement("P");
	var d2 = document.createTextNode(data2);
	
	x.appendChild(d2);
	ptag.appendChild(x);


	var x = document.createElement("P");
	var d = document.createTextNode("Percentage growth: " + difference + "%");

	x.appendChild(d);
	ptag.appendChild(x); 

	
	
	
	console.log(result);
	console.log("Percentage growth: " + difference + "%")
	console.log("")

}

console.log("The country with the highest percentage growth was " + highestdifference1display) 
console.log("The country with the second highest percentage growth was " + highestdifference2display) 
console.log("The country with the third highest percentage growth was " + highestdifference3display) 


		

                      



