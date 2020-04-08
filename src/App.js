import React from "react";
import CharacterCard from "./cards/CharacterCard";
import MonsterCard from "./cards/MonsterCard";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "700px",
      margin: "auto",
      padding: "20px",
      overflow: "auto",
    },
    width: "1200px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "auto",
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const theme = createMuiTheme({
  centeringContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterCards: [],
      monsterCards: [],
      monsterNumber: 0,
    };
  }

  destroyMonster = (deleteKey) => {
    console.log(this.state.monsterCards);
    console.log(deleteKey);
    console.log("dleteeeeee");
    var monsterCardsCopy = this.state.monsterCards;
    console.log(deleteKey);
    // monsterCardsCopy.forEach(monster=>{
    //   if(monster.key===key){

    //   }
    // })
    for (var x = 0; x < monsterCardsCopy.length; x++) {
      console.log(monsterCardsCopy[x].key);
      if (monsterCardsCopy[x].key === deleteKey.toString()) {
        console.log("destroying monster");
        monsterCardsCopy.splice(x, 1);
      }
    }
    this.setState(
      {
        monsterCards: monsterCardsCopy,
      },
      console.log(this.state.monsterCards)
    );
    var slatt = this.state.monsterNumber;
    slatt--;
    this.setState({ monsterNumber: slatt });
  };
  addCharacter = () => {
    var characterCardsCopy = this.state.characterCards;
    characterCardsCopy.push(<CharacterCard />);
    console.log(characterCardsCopy);
    this.setState({ characterCards: characterCardsCopy });
  };

  addMonster = () => {
    var monsterCardsCopy = this.state.monsterCards;
    monsterCardsCopy.push(
      <MonsterCard
        destroyMonster={this.destroyMonster}
        key={this.state.monsterNumber}
        otherKey={this.state.monsterNumber}
      />
    );
    var slatt = this.state.monsterNumber;
    slatt++;
    this.setState({ monsterNumber: slatt });
    this.setState({ monsterCards: monsterCardsCopy });
  };

  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.mainContainer}>
          <div className={classes.searchContainer}>
            <h1>Characters</h1>
          </div>
          {this.state.characterCards.map((character) => {
            return character;
          })}
          <Button
            variant="contained"
            color="primary"
            style={{ width: "200px", height: "50px" }}
            onClick={() => this.addCharacter()}
          >
            Add player
          </Button>
          <div className={classes.searchContainer}>
            <h1>Monsters</h1>
          </div>
          {this.state.monsterCards.map((monster) => {
            return monster;
          })}
          <Button
            variant="contained"
            color="primary"
            style={{ width: "200px", height: "50px" }}
            onClick={() => this.addMonster()}
          >
            Add Monster
          </Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
