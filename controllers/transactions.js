const Transaction = require('../models/transactions')


//@desc Get all transactions
//@route GET /api/v1/trasnactions
//@access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success:true,
            data: transactions,
            count: transactions.length
        });
    } catch (e) {
        res.status(500).json({
            success:false,
            error: 'Server error'
        });
    }
}

//@desc add transaction
//@route POST /api/v1/trasnactions
//@access public
exports.addTransaction = async (req, res, next) => {
    try {
        const {text, amount} = req.body;
        const transaction = await Transaction.create(req.body);
        res.status(201).json({
            success:true,
            data: transaction
        });
    } catch(e) {
        if(e.name === 'ValidationError') {
            const messages = Object.values(e.errors).map(v => v.message);
            res.status(400).json({
                success:false,
                error: messages
            });
        }
        res.status(500).json({
            success:false,
            error: 'Server Error'
        });
    }
}

//@desc delete transaction
//@route DELETE /api/v1/trasnactions/:id
//@access public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const {text, amount} = req.body;
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction) {
            res.status(404).json({
                success:false,
                error: 'No transaction found'
            });
        } else {
            await transaction.remove();
            res.status(200).json({
                success:true,
                data: {}
            });
        }
    } catch(e) {
        res.status(500).json({
            success:false,
            error: 'Server Error'
        });
    }
}