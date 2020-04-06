const monsters = {
  InoxGuard: {
    range: {
      0: {
        normal: 0,
        elite: 0,
      },
      1: {
        normal: 0,
        elite: 0,
      },
      2: {
        normal: 0,
        elite: 0,
      },
      3: {
        normal: 0,
        elite: 0,
      },
    },
    health: {
      0: {
        normal: 5,
        elite: 9,
      },
      1: {
        normal: 8,
        elite: 10,
      },
      2: {
        normal: 9,
        elite: 12,
      },
      3: {
        normal: 11,
        elite: 15,
      },
    },
    movement: {
      0: {
        normal: 2,
        elite: 1,
      },
      1: {
        normal: 2,
        elite: 2,
      },
      2: {
        normal: 2,
        elite: 2,
      },
      3: {
        normal: 3,
        elite: 2,
      },
    },
    attack: {
      0: {
        normal: 2,
        elite: 3,
      },
      1: {
        normal: 2,
        elite: 3,
      },
      2: {
        normal: 3,
        elite: 4,
      },
      3: {
        normal: 3,
        elite: 4,
      },
    },
    specialAbilities: {
      0: { normal: ["None"], elite: ["Retaliate 1"] },
      1: { normal: ["None"], elite: ["Retaliate 2"] },
      2: { normal: ["None"], elite: ["Retaliate 2"] },
      3: { normal: ["None"], elite: ["Retaliate 3"] },
    },
    name: "Inox Guard",
    imageSource:
      "https://images-na.ssl-images-amazon.com/images/I/71ueiZlJEmL._AC_SL1500_.jpg",
  },
  InoxArcher: {
    range: {
      0: {
        normal: 2,
        elite: 3,
      },
      1: {
        normal: 3,
        elite: 4,
      },
      2: {
        normal: 3,
        elite: 4,
      },
      3: {
        normal: 3,
        elite: 4,
      },
    },
    health: {
      0: {
        normal: 5,
        elite: 7,
      },
      1: {
        normal: 6,
        elite: 8,
      },
      2: {
        normal: 8,
        elite: 11,
      },
      3: {
        normal: 9,
        elite: 13,
      },
    },
    movement: {
      0: {
        normal: 2,
        elite: 2,
      },
      1: {
        normal: 2,
        elite: 2,
      },
      2: {
        normal: 2,
        elite: 2,
      },
      3: {
        normal: 2,
        elite: 2,
      },
    },
    attack: {
      0: {
        normal: 2,
        elite: 3,
      },
      1: {
        normal: 2,
        elite: 3,
      },
      2: {
        normal: 3,
        elite: 4,
      },
      3: {
        normal: 3,
        elite: 4,
      },
    },
    specialAbilities: {
      0: { normal: ["None"], elite: ["None"] },
      1: { normal: ["None"], elite: ["None"] },
      2: { normal: ["None"], elite: ["None"] },
      3: { normal: ["None"], elite: ["None"] },
    },
    name: "Inox Archer",
    imageSource:
      "https://images-na.ssl-images-amazon.com/images/I/71ueiZlJEmL._AC_SL1500_.jpg",
  },
  InoxShaman: {
    range: {
      0: {
        normal: 3,
        elite: 3,
      },
      1: {
        normal: 3,
        elite: 3,
      },
      2: {
        normal: 3,
        elite: 3,
      },
      3: {
        normal: 4,
        elite: 4,
      },
    },
    health: {
      0: {
        normal: 4,
        elite: 6,
      },
      1: {
        normal: 6,
        elite: 9,
      },
      2: {
        normal: 7,
        elite: 11,
      },
      3: {
        normal: 9,
        elite: 14,
      },
    },
    movement: {
      0: {
        normal: 1,
        elite: 2,
      },
      1: {
        normal: 1,
        elite: 2,
      },
      2: {
        normal: 2,
        elite: 3,
      },
      3: {
        normal: 2,
        elite: 3,
      },
    },
    attack: {
      0: {
        normal: 2,
        elite: 3,
      },
      1: {
        normal: 2,
        elite: 3,
      },
      2: {
        normal: 2,
        elite: 3,
      },
      3: {
        normal: 2,
        elite: 3,
      },
    },
    specialAbilities: {
      0: { normal: ["None"], elite: ["None"] },
      1: { normal: ["None"], elite: ["None"] },
      2: { normal: ["None"], elite: ["None"] },
      3: { normal: ["None"], elite: ["None"] },
    },
    name: "Inox Shaman",
    imageSource:
      "https://images-na.ssl-images-amazon.com/images/I/71ueiZlJEmL._AC_SL1500_.jpg",
  },
};
export default monsters;
