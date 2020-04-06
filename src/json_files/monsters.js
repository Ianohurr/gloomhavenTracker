const monsters = {
  InoxGuard: {
    health: {
      0: {
        normal: 5,
        elite: 9
      },
      1: {
        normal: 8,
        elite: 10
      },
      2: {
        normal: 9,
        elite: 12
      },
      3: {
        normal: 11,
        elite: 15
      }
    },
    movement: {
      0: {
        normal: 2,
        elite: 1
      },
      1: {
        normal: 2,
        elite: 2
      },
      2: {
        normal: 2,
        elite: 2
      },
      3: {
        normal: 3,
        elite: 2
      }
    },
    attack: {
      0: {
        normal: 2,
        elite: 3
      },
      1: {
        normal: 2,
        elite: 3
      },
      2: {
        normal: 3,
        elite: 4
      },
      3: {
        normal: 3,
        elite: 4
      }
    },
    specialAbilities: {
      0: { normal: ["None"], elite: ["Retaliate 1"] },
      1: { normal: ["None"], elite: ["Retaliate 2"] },
      2: { normal: ["None"], elite: ["Retaliate 2"] },
      3: { normal: ["None"], elite: ["Retaliate 3"] }
    },
    name: "Inox Guard",
    imageSource:
      "https://images-na.ssl-images-amazon.com/images/I/71ueiZlJEmL._AC_SL1500_.jpg"
  }
};
export default monsters;
