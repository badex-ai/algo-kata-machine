function walk(graph: WeightedAdjacencyList, curr: number, needle: number,seen: boolean[], path: number[]): boolean{

    if (curr === needle) {
        return true
    }
    

    seen[curr] === true

    //recurse
    const list = graph[curr]
    //pre
    path.push(curr)

    //if it has been to this node already we return false so that the recursion can go to the next one
    if(seen[curr]){
        return false
    }
    //recurse

    for (let i = 0; i < list.length; i++) {
       const edge = list[i]
       
       if( walk(graph,edge.to,needle,seen,path)){
      
        //return true so we can send the signal back the recursive stack
        return true
       }
    }
   
    //post
    //pop if we didnt find the needle in the branch of this path
    path.pop()

    return false
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)
    const path: number[]= []

    seen[source] = true

    walk(graph,source,needle,seen,path)

    if (path.length === 0) {
        return null
    }

    return path

}