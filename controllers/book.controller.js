const BookModel = require('../models/book');

exports.find = (req,res,next)=>{
    BookModel.find()
    .then(books => {
        res.send(books);
    }).catch(err => {
        next(err)
    });
}
 
exports.findById = (req,res,next)=>{
    BookModel.findById(req.params.id)
    .then(book => {
        if(!book) {
           return res.status(404).json({ "message": "Book Not Found", status: 404});
        }
        res.send(book);
    }).catch(err => {
       next(err)
    });
}
 
exports.create = (req,res,next)=>{
 // Create a Book Book
 
 const Book = new BookModel({...req.body});
// Save Book in the database
    Book.save()
    .then(data => {
        res.send({
            message:"Successfully created",
            data:data
        })
    }).catch(err => {
        next(err)
    });
}
 
exports.updateById = (req,res,next)=>{
 // Find book and update it with the request body
//  The {new: true} option in the findByIdAndUpdate() method is used to return 
//  the modified document to the then() function instead of the original.
        BookModel.findByIdAndUpdate(req.params.id, {
            ...req.body
        }, {new: true})
        .then(book => {
            if(!book) {
                return res.status(404).json({ "message": "Book Not Found", status: 404});
            }
            res.send(book);
        }).catch(err => {
           next(err)
        });
}
 
exports.deleteById = (req,res,next)=>{
    BookModel.findByIdAndRemove(req.params.id)
    .then(book => {
        if(!book) {
            return res.status(404).json({ "message": "Book Not Found", status: 404}); 
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        next(err)
    });
}
