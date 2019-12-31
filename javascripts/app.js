// Ironhack Mars Rover Prework Project by Nate Falconer

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover) {
	switch (rover.direction) {
		case "N":
			rover.direction = "W";
			console.log("Rover is now facing W");
			break;
		case "W":
			rover.direction = "S";
			console.log("Rover is now facing S");
			break;
		case "S":
			rover.direction = "E";
			console.log("Rover is now facing E");
			break;
		case "E":
			rover.direction = "N";
			console.log("Rover is now facing N");
			break;
	}
  console.log("turnLeft was called!");
}

function turnRight(rover){
	switch (rover.direction) {
		case "N":
			rover.direction = "E";
			console.log("Rover is now facing E");
			break;
		case "E":
			rover.direction = "S";
			console.log("Rover is now facing S");
			break;
		case "S":
			rover.direction = "W";
			console.log("Rover is now facing W");
			break;
		case "W":
			rover.direction = "N";
			console.log("Rover is now facing N");
			break;
	}
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called");
	switch (rover.direction) {
		case "N":
			if (rover.y===0) {
				console.log("Boundary exceeded! Rover has not been moved.");
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			} else {
				rover.y--;
				rover.travelLog.push(`(${rover.x},${rover.y})`);
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			}
		case "W":
			if (rover.x===0) {
				console.log("Boundary exceeded! Rover has not been moved.");
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			} else {
				rover.x--;
				rover.travelLog.push(`(${rover.x},${rover.y})`);
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			}
		case "S":
			if (rover.y===9) {
				console.log("Boundary exceeded! Rover has not been moved.");
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			} else {
				rover.y++;
				rover.travelLog.push(`(${rover.x},${rover.y})`);
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			}
		case "E":
			if (rover.x===9) {
				console.log("Boundary exceeded! Rover has not been moved.");
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			} else {
				rover.x++;
				rover.travelLog.push(`(${rover.x},${rover.y})`);
				console.log(`Rover's coordinates are (${rover.x},${rover.y}).`);
				break;
			}
	}

}

function commandRover(command) {
	rover.travelLog.push(`(${rover.x},${rover.y})`);
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'f':
				moveForward(rover);
				break;
			case 'r':
				turnRight(rover);
				break;
			case 'l':
				turnLeft(rover);
				break;
			default:
				console.log(`Invalid command.`);
				break;
		}
	}
	console.log(`Rover traveled to these spaces: ${rover.travelLog}`);

}

commandRover("rffrfflfrff")