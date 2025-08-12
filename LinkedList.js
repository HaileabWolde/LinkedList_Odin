import node from "./Node.js";
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
})();
export default LinkedList;
