// CRUD Operation
use("CrudDb")

// create
db.createCollection("Courses")

// db.Courses.insertOne({
//     name: "Gourish web dev startups",
//     price: 0,
//     assignment: 12,
//     projects: 11
// })

// db.Courses.insertMany([
//     {
//         "name": "Gourish web dev startups",
//         "price": 0,
//         "assignment": 12,
//         "projects": 11
//     },
//     {
//         "name": "Next.js SaaS Builder",
//         "price": 0,
//         "assignment": 18,
//         "projects": 15
//     },
//     {
//         "name": "AI Automation Startup",
//         "price": 0,
//         "assignment": 25,
//         "projects": 20
//     },
//     {
//         "name": "E-commerce Web Solutions",
//         "price": 1999,
//         "assignment": 10,
//         "projects": 8
//     },
//     {
//         "name": "Social Media Web Tools",
//         "price": 1799,
//         "assignment": 14,
//         "projects": 12
//     },
//     {
//         "name": "Mobile App + Web Startup",
//         "price": 3299,
//         "assignment": 20,
//         "projects": 17
//     },
//     {
//         "name": "EdTech Platform Builder",
//         "price": 2599,
//         "assignment": 16,
//         "projects": 14
//     },
//     {
//         "name": "Crypto & Web3 Startup",
//         "price": 3999,
//         "assignment": 22,
//         "projects": 19
//     },
//     {
//         "name": "HealthTech Web Systems",
//         "price": 2899,
//         "assignment": 13,
//         "projects": 10
//     },
//     {
//         "name": "Travel & Booking Platform",
//         "price": 2199,
//         "assignment": 15,
//         "projects": 12
//     }
// ])

// READ

// let a = db.Courses.find({ price: 0 })
// console.log(a.toArray())

// let a = db.Courses.findOne({ price: 0 })
// console.log(a)


// UPDATE


// db.Courses.updateOne({ price: 0 }, { $set: { price: 100 } })

// db.Courses.updateMany({ price: 0 }, { $set: { price: 100 } })

// DELETE

// db.Courses.deleteOne({ price: 100 });
db.Courses.deleteMany({ price: 100 });
