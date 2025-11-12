// async function getdata() {
//    simulate getting data from server 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4500);
//         }, 2500);
//     })
// }

// settled means resolve or reject
// resolve means promises has settled succesfully 
// reject means promises has not settled succesfully 

async function getdata() {
    //      simulate getting data from server 
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json();
    // console.log(data);
    return data;
}

async function main() {

    console.log(`loading modules`);


    console.log(`do something else`);

    console.log(`load data`);

    const data = await getdata();

    console.log(data);

    console.log(`process data`);

    console.log(`task 2`);
}

main();

// data.then((v) => {

//     console.log(data);

//     console.log(`process data`);

//     console.log(`task 2`);
// })


