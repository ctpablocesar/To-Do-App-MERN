import mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = Schema({

    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.model('Task', TaskSchema)