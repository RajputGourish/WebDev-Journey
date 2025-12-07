
use('SigmaDatabase');

// Insert a few documents into the courses collection collection.
db.getCollection('courses').insertMany([
  {
    "name": "java",
    "price": "30000",
    "interacter": "GOURISH"
  },
  {
    "name": "python",
    "price": "25000",
    "interacter": "AYESHA"
  },
  {
    "name": "javascript",
    "price": "28000",
    "interacter": "RAHUL"
  },
  {
    "name": "c++",
    "price": "27000",
    "interacter": "ANJALI"
  },
  {
    "name": "ruby",
    "price": "22000",
    "interacter": "VIKAS"
  },
  {
    "name": "go",
    "price": "32000",
    "interacter": "MEENA"
  },
  {
    "name": "php",
    "price": "20000",
    "interacter": "ARJUN"
  },
  {
    "name": "kotlin",
    "price": "31000",
    "interacter": "PRIYA"
  }
]);

// Print a message to the output window.
console.log(`Data creating Done!!`);
