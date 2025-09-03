import node from './Node.js';

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

    prepend = (value) => {
        const newNode = node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size = () => {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

   head() {
        return this.head; // Standard method syntax
    }
    tail = () => {
        if (this.head === null) return null;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    atindex = (value) => {
        let current = this.head;
        for (let i = 0; i < value; i++) {
            if (current === null) return null;
            current = current.next;
        }
        return current;
    }

    pop = () => {
        let current = this.head;
        let nextNode = null;
        if (current === null) return null; // If the list is empty
        if (current.next === null) {
            this.head = null; // If there's only one node, set head to null
            return;
        }
        while (current.next !== null) {
            nextNode = current;
            current = current.next;
        }
        if (nextNode !== null) {
            nextNode.next = null;
        } else {
            this.head = null;
        }
    }

    contains = (value) => {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find = (value) => {
        let current = this.head;
        let index = 0;
        while (current != null && current.value != value) {
            index++;
            current = current.next;
        }
        if (current != null && current.value === value) {
            return index;
        } else {
            return null;
        }
    }

    toString = () => {
        let tmp = this.head;
        let stringList = '';
        while (tmp != null) {
            stringList += `(${tmp.value}) -> `;
            tmp = tmp.next;
        }
        return (stringList += 'null');
    }

    insertAt = (value, index) => {
        const newNode = node(value, null);
        if (index < 0 || index > this.size()) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (current === null) {
                throw new Error('Index out of bounds');
            }
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    removeAt = (index) => {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let nextNode = null;
        for (let i = 0; i < index; i++) {
            if (current === null || current.next === null) {
                throw new Error('Index out of bounds');
            }
            nextNode = current;
            current = current.next;
        }
        if (nextNode !== null) {
            nextNode.next = current.next;
        }
    }
}

export default LinkedList;