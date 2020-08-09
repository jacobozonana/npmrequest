const request = require(`request`);
const cowsay = require(`cowsay`);

request(`https://swapi.dev/api/starships/`, function (error, response, body){
    console.log(error)
    console.log(response.statusCode)

   
    var data = JSON.parse(body)
    for(let character of data.results){
        console.log(character.name)
        }
    })
    
    
    console.log(cowsay.say({
        text:`Holaaaaaaa`
    }))