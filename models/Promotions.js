const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const PromotionsSchema = new mongoose.Schema({
    name: {
        type: String,
       
        unique: true
    },
    description: {
        type: String,
 
    },
    image: {
        type: String,

    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Promotions', PromotionsSchema);