const mongoose = require("mongoose");
function initDB() {
  process.env.MONGO_URI =
    "mongodb+srv://sandeepsamota:sandeepsamota@cluster0.e0hzusm.mongodb.net/autovally";
  if (mongoose.connections[0].readyState) {
    console.log("alredy connected");
    return;
  }
  mongoose.connect(process.env.MONGO_URI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("connected to mongo");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error connecting", err);
  });
}

initDB();
module.exports = mongoose;
