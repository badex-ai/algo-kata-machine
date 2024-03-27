type node<T> ={
    value: T,
    prev? : node<T>
}


export default class Stack<T> {
    public length: number;
    private head?: node<T>;
  
    

    constructor() {
        this.length = 0;
        this.head  = undefined;
    }

    

    push(item: T): void {
        const newNode = {value: item} as node<T>
        this.length++
        if(!this.head){
            this.head = newNode
            return 
        }

        // const head = this.head
       newNode.prev = this.head
        this.head= newNode
        return
}
    pop(): T | undefined {

        // we can just decrement so that we will not get -1
        this.length = Math.max(0, this.length - 1);
        if(this.length = 0){
            const head = this.head
            this.head = undefined
            return head?.value
        }

      const head =  this.head 
     this.head = this.head?.prev;

     // head.prev = undefined
     return head?.value 


}
    peek(): T | undefined {
 
 return this.head?.value

}
}