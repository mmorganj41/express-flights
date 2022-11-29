const mongoose = require('mongoose');

mongoose.connect('mongdb://localhost/flights', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});