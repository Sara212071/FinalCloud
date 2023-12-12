const mongoose = require ('mongoose');

const intiateDBConnections = async () => {
    try{
await mongoose.connect(process.env.MONGO_CONNECTIONS_URI);
console.log('Connected to MongoDB Server');

    }catch(error){
        console.log(error);
    }

};

module.exports = intiateDBConnections;