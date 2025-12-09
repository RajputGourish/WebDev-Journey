import mongoose from "mongoose";

const Todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Hey"
    },
    desc: String,
    isdone: Boolean,
    days: Number
});
    
export const Todo = mongoose.model('Todo', Todoschema);
