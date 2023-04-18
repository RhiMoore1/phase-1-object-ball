// create a function that contains and returns a nested object
// const gameObject = () =>
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquois", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        }
    }
}

// build a function that returns the name of the home team
function homeTeamName() {
    let object = gameObject();
    return object['home']['teamName'];
}
console.log(homeTeamName());

// Build a function, numPointsScored 
// that takes in an argument of a player's name
// and returns the number of points scored for that player
// uses HELPER FUNCTION allPlayers()
function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}
console.log(numPointsScored('Jeff Adrien'));




// Build a function, shoeSize 
// that takes in an argument of a player's name
// and returns the shoe size for that player
function shoeSize(playerName) {
    return allPlayers()[playerName].shoe;
}
console.log(shoeSize('Brendan Haywood'))




// Build a function, teamColors
// that takes in an argument of the team name
// and returns an array of that teams colors
function teamColors(teamName) {
    if(teamName === 'Brooklyn Nets') {
        return gameObject().home.colors;
    } else if(teamName === 'Charlotte Hornets') {
        return gameObject().away.colors;
    } else {
        return 'The team does not exist'
    }
}
console.log(teamColors('Brooklyn Nets'));




// Build a function, teamNames
// that operates on the game object to
// returns an array of team names
function teamName() {
    return teamArray();
}
console.log(teamName())




// Build a function, playerNumbers
//  that takes in an argument of a team name and 
// returns an array of the jersey number's for that team
function playerNumbers(teamName) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.home.players;
    const nums = [];

    if(teamName === game.home.teamName) {
        for(let player in homePlayers) {
            nums.push(homePlayers[player].number);
        }
    } else if(teamName === game.away.teamName) {
        for(let player in awayPlayers) {
            nums.push(awayPlayers[player].number);
        }
    } else {
        return 'Team is not an option'
    }
    return nums;
}
console.log(playerNumbers('Brooklyn Nets'))





// Build a function, playerStats
// that takes in an argument of a player's name and 
// returns a object of that player's stats

function playerStats(playerName) {

    const players = allPlayers();
    const player = players[playerName];
    const statsArray = [];
 
    return {
        name: playerName,
        number: player.number,
        shoe: player.shoe,
        points: player.points,
        rebounds: player.rebounds,
        assists: player.assists,
        steals: player.steals,
        blocks: player.blocks,
        slamDunks: player.slamDunks,
    };
}
console.log(playerStats('Brendan Haywood'))










    // for(let player in allPlayers) {
    //     nums.push(allPlayers[player].number)
    //     return nums
    // }
    // allPlayers()[playerName].number;
    // allPlayers()[playerName].points;
    // allPlayers()[playerName].shoes;
    // allPlayers()[playerName].rebounds;
    // allPlayers()[playerName].assists;
    // allPlayers()[playerName].steals;
    // allPlayers()[playerName].blocks;
    // allPlayers()[playerName].slamDunks;
    // return allPlayers(playerName);








//////////////////////////////////////////////////////////////////
// HELPER FUNCTION
/////////////////////////////////////////////////////////////////
function allPlayers() {
    // return an object that returns all players for both teams
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;
    const allPlayers = {...homePlayers, ...awayPlayers};
    return allPlayers;
}

//////////////////////////////////////////////////////////////////
// HELPER FUNCTION
/////////////////////////////////////////////////////////////////
function teamArray() {
    const teamArray = [];
    teamArray.push(gameObject().home.teamName);
    teamArray.push(gameObject().away.teamName);
    return teamArray;
}
