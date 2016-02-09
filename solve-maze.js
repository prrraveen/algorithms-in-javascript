fs = require('fs');

var content = fs.readFileSync('mazes.json');

var maze = JSON.parse(content);

function isMazeSolveable(maze){
    var x,y = -1; //x and y will hold the initial position of "S".

    //nested loop to lookup 'S' position in maze.
    //no error checking
    for(var i in maze){
        for(var j in maze){
            if(maze[i][j]=='S'){
                x = i;
                y = j;
            }
        }
    }
    // return exploreMaze.
    return exploreMaze(maze,x,y);
}

function exploreMaze(maze,x,y){

    //check if x,y is out of boundary. return false if its out of boundar/matric
    if( (x > 7 || x < 0  || y >= 7 || y < 0 ))
        return false;
    //check if [x][y] not o.

    if(maze[x][y] == 0) {
        return false;
    }
    maze[x][y]= 0;

    console.log(x,y ,maze[x][y])
    if(maze[x][y]=="E"){
        console.log(x,y);
        return true;
    }

    if(exploreMaze(maze, +x, +y - 1)) return true;
    if(exploreMaze(maze, +x, +y + 1)) return true;
    if(exploreMaze(maze, +x -1,+y)) return true;
    if(exploreMaze(maze, +x +1,+y)) return true;

    //non of the option worked, so we can't solve the problem
    return false
}

//calling the main function
console.log(isMazeSolveable(maze=maze));