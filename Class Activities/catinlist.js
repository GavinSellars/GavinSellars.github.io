list = ["cat", "dog", "cat", "monkey", "cattle"]

value = "cat"

trueornot = 0

for (i = 0; i < list.length; i = i + 1) {
	if (value===list[i])
		trueornot = trueornot + 1

}

if (trueornot>1)
	console.log("True")
else 
	console.log("False")


