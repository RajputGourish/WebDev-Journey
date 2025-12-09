const { MongoClient, FindOperators } = require('mongodb')


const url = 'mongodb://localhost:27017';
const Client = new MongoClient(url);


const dbname = 'testing_mongodb_express'

async function main() {
    await Client.connect();
    console.log('Connected successfully to server');
    const db = Client.db(dbname);

    const collection = db.collection('databaseop');

    // CREATE
    // const insertResult = await collection.insertMany([
    //     {
    //         F_name: "Gourish",
    //         L_name: "Rajput"
    //     }, {
    //         F_name: "Bhavya",
    //         L_name: "Rajput"
    //     },
    //     {
    //         F_name: "Mohit",
    //         L_name: "Gahlot"
    //     }, {
    //         F_name: "Ritik",
    //         L_name: "Ravan"
    //     }
    // ])

    // console.log(`inserted details`, insertResult);


    // READ
    // const findResult = await collection.find({ L_name: "Rajput" }).toArray();
    // console.log(`Found documents whose last name is Rajput=> `, findResult);


    // UPDATE
    // const updateResult = await collection.updateMany({ L_name: "Rajput" }, { $set: { L_name: "Thakur Shahab" } });
    // console.log(`update details are => `, updateResult);

    // REMOVE
    // const removeResult = await collection.deleteMany({ F_name: "Bhavya" });
    // console.log(`Removing data =>`, removeResult);

    return "done";

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => Client.close());

