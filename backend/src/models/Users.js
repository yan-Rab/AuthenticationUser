const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate');
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});

UsersSchema.pre('save', async(next) => {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})
UsersSchema.plugin(mongoosePaginate);
mongoose.model("Users", UsersSchema);