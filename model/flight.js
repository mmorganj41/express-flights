const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const desinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            let date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            return date;
        },
    },
    desinations: [desinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);