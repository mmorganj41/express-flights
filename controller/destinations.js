const Flight = require('../model/flight');

function create(req, res, next) {
    Flight.findById(req.params.id, (err, flight) => {
        if (err) {
            console.log(err);
            return res.send('Error finding by ID check terminal');
        }

        console.log(flight);
        
        flight.destinations.push(req.body);

        flight.save(err => {
            if(err){
                console.log(err);
                return res.send('Error saving to database');
            }

            res.redirect(`/flights/${req.params.id}`);
        });
    })
    
}

module.exports = {
    create,
}