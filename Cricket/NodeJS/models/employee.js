const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: Date },
    office: { type: Date },
    salary: { type: String }
});

module.exports = { Employee };