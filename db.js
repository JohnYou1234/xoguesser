import mongoose from 'mongoose';
// Connect to database
dbConnect().catch((err) => console.log(err));
let db = {}

// Connect to MongoDB
async function dbConnect() {
    await mongoose.connect("mongodb+srv://iamavinator:rusty8roku@cluster0.bjt7ecw.mongodb.net/?retryWrites=true&w=majority")

    // Log successful connection
    console.log("Successfully connected to the database!")

    const inputSchema = new mongoose.Schema({
        input: String
    });

    db.Input = mongoose.model('Input', inputSchema)
    console.log("Created DB Schemas and Models")
}

export default db;