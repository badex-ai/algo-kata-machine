export default function bubble_sort(arr: number[]): void {

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1 - i ; j++){
        // this part of the process is contant 
        if (arr[j ] > arr[j + 1]) {
            let temp = arr[j + 1]
            arr[j] = arr[j + 1]
            arr[i]= temp
        }
    }
}

}