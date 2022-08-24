const mongoose = require('mongoose');
const is_production = process.env.NODE_ENV;

// Wrap Mongoose around local connection to MongoDB
const url = !is_production ? 'mongodb://localhost:27017/mongoose_playground' : 'mongodb+srv://tylerzeman:MongoDB@cluster0.gkjscfh.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
