const job=require('../Job/job');
const abilities=require('../Content/abilities');
module.exports={

    jobs: {

        Warrior: new job({
            name: "Warrior", desc: "Big smashy boy", base_stats: {str: 15, stam: 14, agi: 13, dex: 12, cha: 10, int: 8}, abilities: {
                Attack: abilities.Attack,
                Heavy: abilities.HeavyAttack,
                Quick: abilities.QuickAttack,
                Punch: abilities.UnarmedAttack,
                Whirlwind: abilities.Whirlwind,
                'End Turn': abilities.endTurn,
                flee: abilities.flee

            }
        }),
        WereCat: new job({
            name: "Cat", desc: "a person that fluctuates into a fetchingly flocculant feline", base_stats: {str: 15, stam: 14, agi: 13, dex: 12, cha: 10, int: 8}, abilities: {
                Attack: abilities.Attack,
                Check: abilities.Check,
                'End Turn': abilities.endTurn,
                'Scratch': abilities.QuickAttack,
                'Bite': abilities.HeavyAttack,
                heal: abilities.heal,
                flee: abilities.flee,
                damage: abilities.damage,
                Suicide: abilities.Suicide,
                Kill: abilities.kill
            }
        }),
        Mage: new job({
            name: "Mage", desc: "a wispy wizard person", base_stats: {str: 2, stam: 5, agi: 13, dex: 12, cha: 10, int: 20, will: 10}, abilities: {
                Attack: abilities.Attack,
                'Wizard Slap': abilities.UnarmedAttack,
                'Fire Ball': abilities.fireBall,
                heal: abilities.heal,
                'End Turn': abilities.endTurn,
                flee: abilities.flee,

            }
        }),
        Test_Enemy: new job({
            name: "an enemy", desc: "an enemy", base_stats: {str: 2, stam: 5, agi: 13, dex: 12, cha: 10, int: 20, will: 200}, abilities: {
                'Fire Ball': abilities.fireBall,
                Attack: abilities.Attack,
                Heavy: abilities.HeavyAttack,
                Quick: abilities.QuickAttack,
                Punch: abilities.UnarmedAttack,
            }
        }),
        drunk_Enemy: new job({
            name: "a wrathful wino", desc: "the local livid lush", base_stats: {str: 2, stam: 7, agi: 3, dex: 2, cha: 20, int: 4, will: 3}, abilities: {
                Attack: abilities.Attack,
                "Poor Pummel": abilities.HeavyAttack,
                "Clumsy Clip": abilities.QuickAttack,
                "Dirty Dink": abilities.UnarmedAttack,
            }
        }),
        goblin: new job({
            name: "a rapacious rapscallion", desc: "the miserly minx ", base_stats: {str: 2, stam: 5, agi: 15, dex: 15, cha: 1, int: 5, will: 1},
            abilities: {
                "Greedy Gut Punch": abilities.Attack,
                "Craven Cut": abilities.HeavyAttack,
                Quick: abilities.QuickAttack,
                Punch: abilities.UnarmedAttack,
            }
        }),
        orc: new job({
            name: "an Orc", desc: "big, green and ugly", base_stats: {str: 15, stam: 20, agi: 8, dex: 7, cha: 4, int: 2, will: 10}, abilities: {
                Attack: abilities.Attack,
                Heavy: abilities.HeavyAttack,
                Quick: abilities.QuickAttack,
                Punch: abilities.UnarmedAttack,
            }
        }),
        Villager: new job({name: "Villager", desc: "Hrm", base_stats: {str: 1, stam: 1, agi: 1, dex: 1, cha: 1, int: 1}}),
    },
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE
    /////////////////////////////MORE CONTENT TO BE ADDED BELOW HERE




    npc_jobs: []
}
