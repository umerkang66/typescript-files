import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

// Sort Number Array
const nums = new NumbersCollection([10, 0, -5, 3]);
nums.sort();
console.log(nums.data);

// Sort String
const chars = new CharactersCollection('XhvBaC');
chars.sort();
console.log(chars.data);

// Sort LinkedList
const linkedList = new LinkedListCollection();
[10, 0, -5, 3].forEach(num => linkedList.add(num));
linkedList.sort();
linkedList.print();
