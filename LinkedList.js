import node from "./Node.js";
class LinkedList {
    constructor() {
        this.head = null;
    }
 
 append = (value) => {
        const newNode = node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    prepend = (value)=>{
        const newNode = node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    size = ()=>{
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
    head = () => {
        return this.head;
    }
    tail = () => {
        if (this.head === null) return null;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }
}
/*
 const LinkedList = (function (){
   let  head = null;
        const append = (value) => {
            const newNode = node(value, null);
            if(head === null){
                head = newNode;
            } else {
                let current = head;
                while(current.next !== null){
                    current = current.next;
                }
                current.next = newNode;
            }
        };
        const getHead = () => head;
        return {
            append,
            getHead
        }
})();*/
export default LinkedList;
