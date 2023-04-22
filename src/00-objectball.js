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

/////////////////////////////////////////////////////////
// Globally declared variables 
/////////////////////////////////////////////////////////

// game object
const game = gameObject();

// players 
const homePlayers = game.home.players;
const awayPlayers = game.away.players;
const allPlayers = {...homePlayers, ...awayPlayers};

// teams
const homeTeamName = game.home.teamName;
const awayTeamName = game.away.teamName;
const teamNamesArr = [homeTeamName, awayTeamName];

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////



// NUMBER POINTS SCORED
function numPointsScored(playerName) {
    return allPlayers[playerName].points;
}
console.log(numPointsScored('Ben Gordon'));


// SHOE SIZE
function shoeSize(playerName) {
    return allPlayers[playerName].shoe;
}
console.log(shoeSize('Ben Gordon'))


// TEAM COLORS
function teamColors(teamName) {
    if(teamName === game.home.teamName) {
        return game.home.colors
    } else if(teamName === game.away.teamName){
        return game.away.colors
    } else {
        return 'not a listed team'
    }
}
console.log(teamColors('Charlotte Hornets')); 
console.log(teamColors('Brooklyn Nets'));


// TEAM NAMES
function teamNames() {
    return teamNamesArr;
}
console.log(teamNames());


// PLAYER NUMBERS
function playerNumbers(teamName) {
    let nums = [];
    if(teamName === game.home.teamName) {
        for(let player in homePlayers) {
            nums.push(homePlayers[player].number);
        }
    }else if(teamName === game.away.teamName) {
        for(let player in awayPlayers) {
            nums.push(awayPlayers[player].points)
        }
    }
    return nums;
}
console.log(playerNumbers('Charlotte Hornets'));


// PLAYER STATS
function playerStats(playerName) {
    const stats = [];
    const players = allPlayers;
    const player = players[playerName];
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
console.log(playerStats('Mason Plumlee'))


// BIG SHOE REBOUNDS

function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;

    for (const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if(player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoeSize = player;
        }
    }
    return playerWithLargestShoeSize.rebounds;
}
console.log(bigShoeRebounds())


// MOST POINTS

function mostPointsScored() {
    let mostPoints = 0;
    let playerWithMostPoints;

    for(const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if(player.points > mostPoints) {
            mostPoints = player.points;
            playerWithMostPoints = player;
        }
    }
    return playerWithMostPoints.points;
}
console.log(mostPointsScored())


// HOME TEAM POINTS

function homeTeamPoints() {
    let homePoints = 0;
    for(let playerName in homePlayers) {
        const player = homePlayers[playerName];
        homePoints += player.points
    }
    return homePoints;
}
console.log(homeTeamPoints())


// AWAY TEAM POINTS

function awayTeamPoints() {
    let awayPoints = 0;
    for(let playerName in awayPlayers) {
        const player = awayPlayers[playerName];
        awayPoints += player.points;
    }
    return awayPoints;
}
console.log(awayTeamPoints())


// WINNING TEAM 
function winningTeam() {
    let winningTeam;
    if(homeTeamPoints() > awayTeamPoints()) {
        winningTeam = game.home.teamName;
    }else if(awayTeamPoints() > homeTeamPoints()) {
        winningTeam = away.team.teamName;
    }
    return winningTeam;
}
console.log(winningTeam())
