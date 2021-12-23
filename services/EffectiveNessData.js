const data = [
    {
        pokemonType:'bug',
        effectiveAgainst:['dark','psychic','grass'],
        weakAgainst:['fire','rock','flying'],
        resistance:['fighting','ground','grass'],
        immune:[]
    },
    {
        pokemonType:'normal',
        effectiveAgainst:[],
        weakAgainst:['fighting'],
        resistance:[],
        immune:['ghost']
    },
    {
        pokemonType:'dragon',
        effectiveAgainst:['dragon'],
        weakAgainst:['dragon','fairy','ice'],
        resistance:['water','grass','electric','fire'],
        immune:[]
    },
    {
        pokemonType:'dark',
        effectiveAgainst:['ghost','psychic'],
        weakAgainst:['bug','fighting','fairy'],
        resistance:['ghost','dark'],
        immune:['psychic']
    },
    {
        pokemonType:'electric',
        effectiveAgainst:['water','flying'],
        weakAgainst:['grass','rock','ground'],
        resistance:['flying','steel','electric'],
        immune:[]
    },
    {
        pokemonType:'fairy',
        effectiveAgainst:['fighting','dragon','dark'],
        weakAgainst:['poison','steel'],
        resistance:['fighting','bug','dark'],
        immune:['dragon']
    },
    {
        pokemonType:'fighting',
        effectiveAgainst:['normal','ice','dark','steel','rock'],
        weakAgainst:['flying','psychic','fairy'],
        resistance:['rock','bug','dark'],
        immune:[]
    },
    {
        pokemonType:'fire',
        effectiveAgainst:['grass','ice','steel','bug'],
        weakAgainst:['water','rock','ground'],
        resistance:['bug','steel','fire','grass','ice'],
        immune:[]
    },
    {
        pokemonType:'flying',
        effectiveAgainst:['grass','fighting','bug'],
        weakAgainst:['electric','rock','ice'],
        resistance:['fighting','bug','grass'],
        immune:['ground']
    },
    {
        pokemonType:'ghost',
        effectiveAgainst:['ghost','psychic'],
        weakAgainst:['ghost','dark'],
        resistance:['poison','bug'],
        immune:['fighting','normal']
    },
    {
        pokemonType:'grass',
        effectiveAgainst:['water','ground','rock'],
        weakAgainst:['flying','poison','fire','bug','ice'],
        resistance:['ground','water','grass','electric'],
        immune:[]
    },
    {
        pokemonType:'ground',
        effectiveAgainst:['fire','steel','electric','poison','rock'],
        weakAgainst:['water','ice','grass'],
        resistance:['poison','rock'],
        immune:['electric']
    },
    {
        pokemonType:'ice',
        effectiveAgainst:['grass','flying','dragon','ground'],
        weakAgainst:['fire','steel','rock','fighting'],
        resistance:['ice'],
        immune:[]
    },
    {
        pokemonType:'poison',
        effectiveAgainst:['fairy','grass'],
        weakAgainst:['ground','psychic'],
        resistance:['fighting','poison','grass','fairy'],
        immune:[]
    },
    {
        pokemonType:'psychic',
        effectiveAgainst:['fighting','poison'],
        weakAgainst:['dark','ghost','bug'],
        resistance:['fighting','psychic'],
        immune:[]
    },
    {
        pokemonType:'rock',
        effectiveAgainst:['flying','bug','ice','fire'],
        weakAgainst:['grass','water','ground','steel','fighting'],
        resistance:['normal','flying','poison','fire'],
        immune:[]
    },
    {
        pokemonType:'steel',
        effectiveAgainst:['fairy','rock','ice'],
        weakAgainst:['fire','fighting','ground'],
        resistance:['normal','flying','rock','bug','steel','grass','psychic','ice','dragon','fairy'],
        immune:['poison']
    },
    {
        pokemonType:'water',
        effectiveAgainst:['fire','rock','ground'],
        weakAgainst:['electric','grass'],
        resistance:['steel','water','fire','ice'],
        immune:[]
    }
]

module.exports = data