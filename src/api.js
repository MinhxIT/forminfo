const PlayerAPI = {
    players: [
      { number: 0, name: "Ben Blocker", address: "HN",phone:"092233344"}
    ],
    all: function() { return this.players},
    get: function(name) {
      const isPlayer = p => p.name === name
      return this.players.find(isPlayer);
    }
  }
  
  export default PlayerAPI
  