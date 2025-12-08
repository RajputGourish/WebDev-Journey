use("Query_operators")

db.createCollection("operator")


// db.operator.insertMany([
//     { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: ["A", "B", "C"] },
//     { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: ["B"] },
//     { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: ["A", "B"] },
//     { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: ["B", "A"] },
//     { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [["A", "B"], "C"] }
// ])

// EQUAL
// let a = db.operator.find({ qty: { $eq: 20 } });
// let b = db.operator.find({ qty: 20 });

// GREATER
// let a = db.operator.find({ qty: { $gt: 20 } });

// GREATER and EQUAL
// let a = db.operator.find({ qty: { $gte: 20 } });

// IN
// let a = db.operator.find({ qty: { $in: [10,20, 70, 90] } });

// LESS THAN
// let a = db.operator.find({ qty: { $lt: 20} });
// let a = db.operator.find({ qty: { $lte: 20} });

// NOT EQUALS
// let a = db.operator.find({ qty: { $ne: 20 } })

//  NOT IN
let a = db.operator.find({ qty: { $nin: [15, 20, 30] } })

console.log(a.toArray());
