function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background("#b8bedd")
	stroke(0)
	strokeWeight(5);
	//Head1
	fill("#b8f2e6")
	rect(100,100,120,100,20)
	//ear1
	fill(255)
	rect(85,130,15,40,5)
	rect(220,130,15,40,5)
	//eyes1
	fill(0)
	rect(120,130,80,30,5)
	if(frameCount%30==0){
		fill(150)
		rect(130,145,20,10,5)
		rect(170,145,20,10,5)
	}else{
	fill(150)
	rect(130,135,20,20,5)
	rect(170,135,20,20,5)
	}
	//mouth1
	fill("red")
	rect(135,170,50,20,0,0,20,20)
	fill("#ffa69e")
	arc(160,190,30,20,PI,0,OPEN)
	
	//Head1
	fill("#b8f2e6")
	rect(1900,100,120,100,20)
	//ear1
	fill(255)
	rect(1885,130,15,40,5)
	rect(2020,130,15,40,5)
	//eyes1
	fill(0)
	rect(1920,130,80,30,5)
	if(frameCount%30==0){
		fill(150)
		rect(1930,145,20,10,5)
		rect(1970,145,20,10,5)
	}else{
	fill(150)
	rect(1930,135,20,20,5)
	rect(1970,135,20,20,5)
	}
	//mouth1
	fill("red")
	rect(1935,170,50,20,0,0,20,20)
	fill("#ffa69e")
	arc(1960,190,30,20,PI,0,OPEN)
	
	
	
	
	
	// noStroke()
	// fill(0)
	// textSize(20)
	// text(mouseX+" , "+mouseY,mouseX,mouseY);
}