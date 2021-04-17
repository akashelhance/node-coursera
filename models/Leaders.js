const mongoose = require('mongoose');



const LeadersSchema = new mongoose.Schema({
    name: {
        type: String,
   
        unique: true
    },
    image: {
        type: String,
        
    },
    designation: {
        type: String,
        
    },
    abbr: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    featured: {
        type: Boolean,
        default:false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Leaders', LeadersSchema);