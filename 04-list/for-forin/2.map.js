const service = require('./service');

Array.prototype.myMap = function (callback) {
    const newArrayMap = [];
    for (let i=0; i <= this.length -1; i++){
        const result = callback(this[i], i);
        newArrayMap.push(result)
    }

    return newArrayMap;
}

async function main (){
    try{
        const result = await service.getPeople('a');
        // const names = [];
        // result.results.forEach(element => {
        //     names.push(element.name)
        // });

        // const names = result.results.map((person)=>{
        //     return person.name;
        // })

        // const names = result.results.map(person => person.name)
        
        const names = result.results.myMap( function (person, i){
            return person.name;
        })
        console.log(names)
    }
    catch (error){
        console.error("Houve algum problema com a requisição", error);
    }
}

main()