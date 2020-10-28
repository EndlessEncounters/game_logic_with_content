const storyEvent = require('./gameLogic/storyEvent/storyEvent');
const entity = require('./gameLogic/entity/entity');
const {jobs} = require('./gameLogic/Content/jobs');
const readline = require('readline')
const dummyPlayer = {
    stats:{
        str:0,
        dex:0,
        int:0,
        stam:0,
        will:0,
        agi:0,
        cha:0,
        AP:0,
        speed:0,
    }
}
class array2 extends Array
{
    specialJoin(separator, endSeparator)
    {
        let result = '';
        const length = this.length;
        for(const index in this)
        {
            if(index < (length - 2))
            {
                result += `${this[index]}${separator}`;
            }
            else if(index == length -2)
            {
                result += `${this[index]}${separator}${endSeparator}`;
            }
            else
            {
                result += `${this[index]}`
            }
       }
        return result;
    }
}

function userInput()
{
    const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    return new Promise(Resolve =>{
        rl.question("What will you do?\n", (resp)=>{
            rl.close();
            Resolve(resp);
        } )
        
    })
}
let player = new entity({name:"doesn't matter",desc:'a majestic cat lady',job:jobs.Mage, stats:{str:200, int:200}})
async function main(event = new storyEvent())
{
    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n`+event.displayText);
    event = event.makeChoice(await userInput());
    main(event);
}
main();
