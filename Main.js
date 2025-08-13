import LinkedList from './LinkedList.js';
const linkedLsit = new LinkedList();
linkedLsit.append(5);
linkedLsit.append("dog");
linkedLsit.append("cat");
linkedLsit.prepend(3);
linkedLsit.size(); // Returns: 4
console.log(linkedLsit.size()); // Logs: { value: 5, next: null }
