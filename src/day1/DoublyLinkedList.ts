type node<T> ={
    value: T,
    prev? : node<T>
    next? : node<T>
}


export default class DoublyLinkedList<T> {
    public length: number;
    private head? : node<T>
    private tail? : node<T>

    

    constructor() {
        this.length = 0;
        this.head = undefined
    }

    prepend(item: T): void {
        const node = {value: item} as node<T>
        this.length++
       

        if(!this.head){
            this.head = node ;
            return 
        }

        let a = this.head

        node.next = this.head;
        this.head = node
        this.head = node
}
    insertAt(item: T, idx: number): void {

        if (idx > this.length) {
            throw new Error(" idx longer than length");
            
        }else if (idx === this.length){
            this.append(item);
            return 
        }else if(idx === 0){
            this.prepend(item)
            return 
        }
        let curr = this.getAt(idx);

    curr =curr as node<T>

    const node = {value: item} as node<T>
    node.next = curr;
    node.prev =  curr.prev;
    curr.prev = node;
    if(curr.prev){
        curr.prev.next = node
    }
}
    

    append(item: T): void {
        const node = {value: item} as node<T>
        this.length++
       

        if(!this.tail){
            this.tail = this.head = node ;
            return 
        }

        // let a = this.tail

        node.prev = this.tail;
        this.tail.next = node
        this.tail= node
}
    remove(item: T): T | undefined {
        let curr = this.head
        

        
        for (let i = 0; curr && i <this.length ; i++) {
            if (curr.value === item) {
                break
            }
            curr = curr.next
            
        }

        if(!curr){
            return undefined
        }

        return this.removeNode(curr)

         
       

}


        get(idx: number): T | undefined {


        return this.getAt(idx)?.value
            



    }
    private getAt(idx: number):node<T> | undefined   {
        let curr = this.head;

        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }

    private removeNode(node: node<T>) : T | undefined{
        this.length--;
        if(this.length === 0){
            const out = this.head?.value
            this.head = this.tail = undefined
            return out ;
        }
        
//if we have a previous we set it to the next
        if(node.prev){
            node.prev.next = node.next
        }
        if(node.next){
            node.next.prev = node.prev
        }
//check if the nodeent is the head, if so transfer it to the next node
        if(node === this.head){
        this.head = node.next
        }

        if(node === this.tail){
            this.tail = node.prev
        }

       node.prev = node.next = undefined

       return node.value
    }

    removeAt(idx: number): T | undefined {

      const  node = this.getAt(idx);
      if(!node){return undefined}

      this.removeNode(node)
      
      

}
}