const mongoose = require('mongoose');

var Cricket = mongoose.model('Cricket', {
    name: { type: String },
    position: { type: String },
    office: { type: Date },
    salary: { type: Date }
});

module.exports = { Cricket };