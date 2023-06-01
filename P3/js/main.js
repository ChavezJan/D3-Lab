/*
*    main.js
*/

d3.csv("data/ages.csv").then((data)=> {
	console.log(data);
});

d3.tsv("data/ages.tsv").then((data)=> {
	console.log(data);
});

d3.json("data/ages.json").then((data)=> {
	console.log(data);
});
d3.json("data/ages.json").then((data)=> {
	data.forEach((d)=>{
		d.age = +d.age;
	});
	console.log(data);
});

d3.json("data/ages.json").then((data)=> {

	var ages = [];
	var color = "#";

	data.forEach((d)=>{

		d.age = +d.age;
		ages.push(d.age);

	});

	console.log("Ages: " + ages );
	var svg= d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500)

	var circs= svg.selectAll("circle")
	.data(ages);

	circs.enter()
	.append("circle")
		.attr("cx", (d, i)=>{ return (i * 50); })
		.attr("cy", (d)=>{ return (-1) * (d-40); })
		.attr("r", (d)=>{ return (d * 2); })
		.attr("fill", (d)=> {return (color + d*20)});

	console.log(data);

}).catch((error) => {
	console.log(error);
});