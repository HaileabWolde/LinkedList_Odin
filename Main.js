import LinkedList from './LinkedList.js';
const linkedLsit = new LinkedList();
linkedLsit.append(5);
linkedLsit.append("dog");
linkedLsit.append("cat");
linkedLsit.append("fish");
linkedLsit.size(); // Returns: 4
linkedLsit.prepend("bird");
console.log(linkedLsit.toString()); // Outputs: (5) -> (bird) -> (dog) -> (cat) -> null



