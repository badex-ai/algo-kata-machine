function qs(arr: number[], low: number , high: number): void{

    if (low > high) {
        return ;
    }

   const pivotIdx =  partition(arr,low, high)

//pivotIdx - 1 because its inclusive endings not exclusive which means the pivots index
   qs(arr,low,pivotIdx - 1)

   // we are also going to do this for the other side of the array 
   qs(arr,pivotIdx + 1,high)
}
function partition(arr: number[], lo: number, hi: number): number{
 const pivot= arr[hi];

 let idx = lo - 1;

// we create a weak sort
 for (let i = 0; i < hi; i++) {
    
    if (arr[i] <= pivot) {
        idx ++
        const tmp = arr[i]

        arr[i] = arr[idx]

        arr[idx] = tmp
    }

    



    
 }
 idx++ 
    arr[hi] = arr[idx]

    arr[idx ] = pivot

    return idx
}
export default function quick_sort(arr: number[]): void {
    qs(arr,0,arr.length - 1  )
}