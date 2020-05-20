var data1 = ["Finland", 100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
var data2 = ["Ghana",-1,-1,-1,30.6,32.10798,34.17049,36.23661,38.30727,42.6,42.458,43.7,46.59106,48.63863,48.3,52.67123,54.64948,55.09345,58.57307,60.5,62.54324,64.2,64.06256,69.229,70.7,78.3,75.85002,79.3,79];

console.log(data1[0]);
console.log("1990 Data for "+data1[0]+" is ",data1[1]);

//Find the sum divide by the number of elements

var sum = 0;
for (i = 1; i < data1.length; i = i + 1) {

	sum = sum + data1[i];

}
console.log(sum);
var average = sum/(data1.length -1);
console.log(average);

sum = 0;
var ctr = 0; //count the number of -1

var p1 = document.createElement("P");   // Create a P element
p1.innerHTML = "Average "+data1[0]+":"+average;                   // Insert text
document.body.appendChild(p1); 

for (i = 1; i < data2.length; i = i + 1) {

	if (data2[i] != -1) {
		sum = sum + data2[i]
	}
	else {
		ctr = ctr + 1;
	}
}

average = sum/(data2.length - 1 - ctr);
console.log(sum)
console.log(average);




