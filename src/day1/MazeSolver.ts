let dir =[
    [-1,0] ,
    [1,0] ,
    [0,-1] ,
    [0,1]
]

function walk( maze: string[], wall: string, curr: Point, end: Point,seen: boolean[][], path: Point[] ) : boolean {

    //this is a two dimensional array with the y cordinate being the row and the x cordinate being the coloumn of the row

    // the curr coordinate of a value has the x and y coordinate

    //Base case
    

    // here we compare the postion of the current value to not be less than 0 or not greater than the lenght of each row

    // we also compare the position of the y cordinate to not be less than 0 and not greater than the length of the maze
    
    //off the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length){
        return false
    }

    //on a wall 
    if(maze[curr.y][curr.x] === wall){
        return false
    }
    if(curr.x === end.x && curr.y === end.y){
        // push last one 
        path.push(end);
        return true
    }

    if(seen[curr.y][curr.x]){
        return false
    }

    //three stages of recursion
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr)


    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x,y] = dir[i];
       
       if(walk(maze,wall,{
        x: curr.x + x, y: curr.y + y
    },end, seen, path)) {
        return true
    }
        
    }

    // post
    path.pop()
    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen : boolean[][]=[];
    const path: Point[]=[]

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
        
    }

    walk(maze, wall, start, end, seen, path)

    return path


}