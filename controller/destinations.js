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

function deleteOne(req, res, next) {
    console.log(req.params.id);
    Flight.findOne({'destinations._id': req.params.id}, (err, flight) => {
        if (err) {
            console.log(err);
            return res.send('Error finding destination to delete');
        }

        flight.destinations.remove(req.params.id);

        console.log(flight);

        flight.save(err => {
            if (err) {
                console.log(err);
                return res.send('Error saving flight to database')
            }
            res.redirect(`/flights/${flight._id}`);
        })

        
    });
}

module.exports = {
    create,
    delete: deleteOne,
}