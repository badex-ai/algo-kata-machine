export default class MinHeap {
    public length: number;
    private data: number[];

    

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number){
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++
    }

    delete(): number {
    if(this.length === 0){
        return  -1
    }

    
    const out = this.data[0];
    this.length--;
    
    if(this.length === 0){
        this.data = [];
        return out
    }
    this.data[0] = this.data[this.length];
    this.heapifyDown(0)
    return out

      
}

private parent(idx: number): number{
    return Math.floor((idx - 1)/2)

}
private heapifyUp(idx:number): void {
    if(idx === 0){
        return
    }

    const p = this.parent(idx);
    const parentV = this.data[p];
    const  v = this.data[idx]

    if(parentV > v){
       
        this.data[idx] = parentV
        this.data[p]= v
        this.heapifyUp(p)
    }
}
private heapifyDown(idx: number) {
    if(idx >= this.length){
        return
    }

    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);
    const v = this.data[idx]
    const lV = this.data[lIdx]
    const rV = this.data[rIdx]

    if(lV > rV && v > rV){
        this.data[idx]= rV
        this.data[rIdx]= v
        this.heapifyDown(rIdx)
    }else(rV > lV && v > lV){
        this.data[idx]= lV
        this.data[lIdx]= v
        this.heapifyDown(lIdx)
    }
    
}

 

private leftChild(idx: number):number{
    return (2 * idx)+ 1
}
private rightChild(idx: number):number{
    return (2 * idx) + 2
}
}