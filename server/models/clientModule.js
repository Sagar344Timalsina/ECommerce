const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        allowNull: false,
        require: true,
        unique: true
    },
    username: {
        type: String,
        allowNull: false,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        allowNull: false
    },
    phone: {
        type: String,
        require: true,
        allowNull: false
    },
    address: {
        type: String,
        require: true,
        allowNull: false
    },
    role: {
        type: Number,//0(User),1(Admin)
        default:0,
    },
    // timestamps: {
    //      createdAt: 'created_at', 
    //      modifiedAt: 'updated_at' 
    // }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema);

// module.exports = user;