type Node<T> = {
value: T,
next? : Node<T>,
prev? : Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T> ;
    private tail? : Node<T> ;
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0 ;
    }

    enqueue(item: T): void {

        const newNode = {value: item} as Node<T>
        if(!this.tail){
            this.tail = this.head = newNode;
            return 
        }

        const tail = this.tail;
        

         this.tail.next = newNode
         this.tail = newNode
        

        this.length++;

        return



}
    deque(): T | undefined {
        if (!this.head ) {
            return  undefined
        }

        this.length-- ; 
        const head = this.head;
        this.head = this.head.next;

        if(this.length === 0){
            this.tail = undefined
        }

       head.next = undefined
        return head.value


}
    peek(): T | undefined {
        this.head?.value
}
}