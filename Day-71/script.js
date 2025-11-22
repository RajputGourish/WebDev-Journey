console.log(`Hello World!!!`);

// let obj = {
//     id: 1,
//     name: "gourish"
// }

// console.log(obj);


// let animal = {
//     eats: true
// }

// let rabbit = {
//     jump: true
// }

// rabbit.__proto__ = animal;

class animal {
    constructor(name) {
        this.name = name;
        console.log(`object is successfully created...`);
    }
    eats() {
        console.log(`kha raha hoon`);
    }

    jump() {
        console.log(`khood raha hu`);
    }
}

class lion extends animal {
    constructor(name) {
        super(name)
        console.log(`object is created as a lion sir`);
    }

    eats() {
        super.eats();
        console.log(`khaa rha hu roar`);
    }
}

let a = new animal("bun");
// console.log(a);


let l = new lion("shera");
console.log(l);
