import mongoose from "mongoose"

mongoose.connect("mongodb+srv://node-teste:<senha>>@node-study.mkkk17a.mongodb.net/<tabela>");

let db = mongoose.connection;

export default db;