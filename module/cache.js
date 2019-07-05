const redis = require('redis')
const client = redis.createClient()

//Incase any error pops up, log it
client.on("error", (err)=> {
  console.log("Error " + err);
})

module.exports = client;