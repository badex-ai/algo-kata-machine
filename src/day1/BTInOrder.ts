
function walk(curr: BinaryNode<number> | null ,path: number[] ): number[]{

    // base case is if we reach a node that doesnt exist
    if (!curr) {
        return path
    }
    //recurse
    // pre
    // recurse
    //the function will keep recursing left until it hits a node that undefined then it will start recursing right after
    // make sure to draw the recurse table to understand the recursion properly after it sticks it will be easier to understand
    walk(curr.left,path)
    path.push(curr.value)

    walk(curr.right,path)
    // post
    // there is no post
    return path

}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])

}