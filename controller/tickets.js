const Ticket = require('../model/ticket');

function newTicket(req, res, next) {
    
    res.render('tickets/new', {flight: req.params.id});
}

function create(req, res, next) {
    req.body.flight = req.params.id;

    Ticket.create(req.body, (err, ticket) => {
        if (err) {
            console.log(err);
            return res.redirect(`/flights/${req.params.id}/tickets/new`);
        }
        console.log(ticket);

        res.redirect(`/flights/${req.params.id}`);
    })
    
}

function deleteTicket(req, res, next) {
    Ticket.findById(req.params.id, (err, ticket) => {
        if (err) {
            console.log(err)
            return res.redirect('/flights');
        }
            console.log(ticket);
            let flight = ticket.flight;

            ticket.remove(err => {
                if (err) {
                    console.log(err)
                    return res.redirect('/flights');
                }
                    res.redirect(`/flights/${flight}`);
            })
    })

    // Ticket.remove({_id: req.params.id}, (err, ticket) => {
    //     if (err) {
    //         console.log(err)
    //         res.redirect('/flights');
    //     }
    //     console.log(ticket);
    //     res.redirect(`/flights/${ticket.flight}`);
    // });
    
}

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket,
}