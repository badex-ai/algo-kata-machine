export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
 
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1)

    //what is source in this function
    seen[source] = true;
    const q : number[] = [source] ;

    do{
        const curr = q.shift() as number
        if(curr === needle){
            break
        }
        const adjs = graph[curr]
        for (let i = 0; i < graph.length; i++) {
            // this is for the first element of the graph so continue is added to skip it
            if(adjs[i] = 0){
                continue
            }
            // if the index of this current loop has already been stored in the seen array we skip it
            if (seen[i]) {
                continue
            }

            // here we store the index has seen in the seen array
            seen[i] = true;

            // we store the previous/ parent of this current index against its index iin the prev array
            prev[i] = curr;

            //this helps us to store the number of unseen indexes we have visited
            q.push(i)
            
        }

    }
    while (q.length)

    if(prev[needle] === -1){
        return []
    }

    // build it backwards
    //we have to walk out previouses until we get to -1
    let curr = needle;

    //our out is goin to represent our path through the graph starting at the needle back to the source
    const out: number[]= []

    //we need to check this to be sure that the curr index in the prev array doesnt euqal -1 since we are supposed to have changed it value when traversing the graph
    while (prev[curr] !== -1) {
        // push the index of the value traversed to the out array
        out.push(curr);
        curr = prev[curr]
    }

    // if(out.lenght){
    //     return out.reverse()
    // }

    return [source].concat(out.reverse())


}ß