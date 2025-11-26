const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required: false,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },

        full_name: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["admin", "employee", "client"],
            default: "client",
        },

        is_active: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);

// Add auto-increment plugin
UserSchema.plugin(AutoIncrement, { inc_field: 'user_id' });

const user_model = mongoose.model("User", UserSchema);

module.exports = user_model;
