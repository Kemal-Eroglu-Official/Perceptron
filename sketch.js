let points = [];
let point_quantity = 3000;
let neuron;

let canvas;

function setup() {
  	canvas = createCanvas(windowHeight, windowHeight);
	canvas.mouseClicked(user);
	neuron = new Neuron(2, 0.1); // 1 is bias value

	for (let i = 0; i < point_quantity; i++) {
		points.push(new Point());
	}

	for (let i in points) {
		let train_input = [points[i].x, points[i].y];
		let answer = points[i].state;
		neuron.train(train_input, answer);
	}
}

//let counter = 1;

function draw() {
  	background(220);
	stroke(0);
	strokeWeight(3);
	line(0, 0, width, height);

	//let train_input = [points[counter].x, points[counter].y];
	//let answer = points[counter].state;
	//neuron.train(train_input, answer);

	showAll();

	let per = 0;

	for (let p of points) {
		let input = [p.x, p.y];
		if (p.state == neuron.guess(input)) {
			per++;
		}
	}

	console.log(per);

	//counter++;
	//if (counter >= point_quantity) {
	//	console.log("done");
	//	noLoop();
	//}
	noLoop();
}

function user () {
	let user_point = new Point();
	user_point.set(mouseX, mouseY);
	user_point.setState();

	let inputs = [user_point.x, user_point.y];
	noFill();

	if (user_point.state == neuron.guess(inputs)) {
		stroke(0, 255, 0); // true
	}
	else {
		stroke(255, 0, 0); // false
	}
	strokeWeight(10);
	point(user_point.x, user_point.y);
}

function showAll () {
	for (let i = 0; i < points.length; i++) {
		let input = [points[i].x, points[i].y];
		points[i].show(neuron.guess(input));
	}
}