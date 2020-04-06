import React from "react";
import CharacterCard from "./cards/CharacterCard";
import MonsterCard from "./cards/MonsterCard";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "700px",
      margin: "auto",
      padding: "20px",
      overflow: "auto"
    },
    width: "1200px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    overflow: "auto"
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  }
});

const theme = createMuiTheme({
  centeringContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterCards: [],
      monsterCards: []
    };
  }
  addCharacter = () => {
    console.log("adding character");
    var characterCardsCopy = this.state.characterCards;
    characterCardsCopy.push(<CharacterCard />);
    console.log(characterCardsCopy);
    this.setState({ characterCards: characterCardsCopy });
  };

  addMonster = () => {
    console.log("adding monster");
    var monsterCardsCopy = this.state.monsterCards;
    monsterCardsCopy.push(<MonsterCard />);
    console.log(monsterCardsCopy);
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
          {this.state.characterCards.map(character => {
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
          {this.state.monsterCards.map(monster => {
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
