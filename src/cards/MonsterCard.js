import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import characters from "../json_files/characters";
import monsters from "../json_files/monsters";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = theme => ({
  characterCard: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "460px",
      marginBottom: "20px"
    },
    width: "60%",
    height: "460px",
    padding: "10px",
    marginBottom: "20px"
  },
  inactiveCard: {
    height: "100%"
    // background:
    //   "linear-gradient(90deg, rgba(163,166,61,1) 34%, rgba(227,217,166,1) 88%)"
  },
  activeCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  plusIcon: {
    fontSize: "100px"
  },
  characterImage: {
    width: "90%",
    backgroundColor: "red",
    height: "250px",
    marginTop: "10px"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row"
  },
  subtitle: {
    margin: "10px"
  },
  inactiveContainer: {
    height: "100%"
  },
  centeringContainer: theme.centeringContainer,
  characterOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    flexDirection: "column"
  },
  characterOptionTitle: {
    margin: "0px"
  },
  characterOptionDivider: {
    width: "80%"
  },
  topContainer: {
    height: "80%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    height: "20%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  setButtonContainer: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    height: "100%",
    flexDirection: "column"
  },
  curseContainer: {
    display: "flex",
    width: "30%",
    height: "100%",
    padding: "10px",
    flexDirection: "column",
    alignItems: "center"
  },
  checkRoot: {
    paddingLeft: "50px"
  },
  revertButtonRoot: {
    width: "200px"
  }
});

class MonsterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCharacter: false,
      name: "",
      level: 1,
      health: 1,
      character: null,
      initiative: 1,
      curses: {
        poison: false,
        wound: false,
        immobilize: false,
        disarm: false,
        stun: false,
        muddle: false,
        curse: false
      },
      set: false,
      enemyInput: "Inox Guard",
      enemyNumber: 1,
      enemyNumberInput: 1,
      elite: false
    };
    this.baseStats = null;
  }

  changeStat = (stat, changeAmount) => {
    var statCopy = this.state[stat] + changeAmount;
    this.setState({ [stat]: statCopy });
  };

  createCharacterOptions = () => {
    console.log(Object.keys(characters));
    Object.keys(characters).map(character => {
      return (
        <Grid item xs={3}>
          <Paper variant="outlined">
            <h4>{characters[character].name}</h4>
            <h1>things</h1>
          </Paper>
        </Grid>
      );
    });
  };

  activateSelectedCharacter = () => {
    console.log(monsters[this.state.enemyInput.replace(/ /g, "")]);
    var character = monsters[this.state.enemyInput.replace(/ /g, "")];
    var type = this.state.elite ? "elite" : "normal";
    this.setState({
      activeCharacter: true,
      name: character.name,
      character: character,
      health: character.health[1][type],
      movement: character.movement[1][type],
      attack: character.attack[1][type],
      specialAbilities: character.specialAbilities[1][type],
      type: type,
      curses: {}
    });
    this.baseStats = {
      movement: character.movement[1][type],
      attack: character.attack[1][type]
    };
  };

  handleLevelChange = e => {
    console.log(e);
    console.log(e.target);
    this.setState({
      level: e.target.value,
      health: this.state.character.health[e.target.value][this.state.type],
      movement: this.state.character.movement[e.target.value][this.state.type],
      attack: this.state.character.attack[e.target.value][this.state.type],
      specialAbilities: this.state.character.specialAbilities[e.target.value][
        this.state.type
      ]
    });
  };

  handleInitiativeChange = e => {
    this.setState({ initiative: e.target.value });
  };

  handleRadioChange = curse => {
    var curseCopy = this.state.curses;
    curseCopy[curse] = !this.state.curses[curse];
    this.setState({ curses: curseCopy });
  };

  handleEnemyChange = e => {
    this.setState({ enemyInput: e.target.value, character: e.target.value });
  };
  handleEnemyNumberChange = e => {
    this.setState({
      enemyNumber: e.target.value,
      enemyNumberInput: e.target.value
    });
  };

  getEnemyList = () => {
    Object.keys(monsters).forEach(monster => {
      return (
        <MenuItem value={monsters[monster].name}>
          {monsters[monster].name}
        </MenuItem>
      );
    });
  };
  render() {
    const { classes } = this.props;
    const activeCard = () => {
      console.log(this.state);
      return (
        <div className={classes.activeCard}>
          <h4 className={classes.characterOptionTitle}>{`${this.state.name} ${
            this.state.enemyNumber
          } ${this.state.elite ? "(Elite)" : ""}`}</h4>
          <div className={classes.topContainer}>
            <img
              src={this.state.character.imageSource}
              alt={this.state.name}
              style={{ height: "100%", width: "30%" }}
            />
            <div className={classes.setButtonContainer}>
              <h4 className={classes.subtitle}>
                Movement: {this.state.movement}
              </h4>
              <div className={classes.buttonContainer}>
                <AddCircleOutlineIcon
                  onClick={() => this.changeStat("movement", 1)}
                />
                <RemoveIcon onClick={() => this.changeStat("movement", -1)} />
              </div>
              <h4 className={classes.subtitle}>Attack: {this.state.attack}</h4>
              <div className={classes.buttonContainer}>
                <AddCircleOutlineIcon
                  onClick={() => this.changeStat("attack", 1)}
                />
                <RemoveIcon onClick={() => this.changeStat("attack", -1)} />
              </div>
              <Button
                variant="contained"
                color={this.state.set ? "primary" : "secondary"}
                size="large"
                style={{
                  width: "200px",
                  height: "100px",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
                onClick={() => this.setState({ set: !this.state.set })}
              >
                {this.state.set ? (
                  <div>
                    <p>Currently set</p>
                    <p>Initative: {this.state.initiative}</p>
                  </div>
                ) : (
                  "Set character"
                )}
              </Button>
              <Button
                onClick={() =>
                  this.setState({
                    attack: this.baseStats.attack,
                    movement: this.baseStats.movement
                  })
                }
                variant="contained"
                classes={{ root: classes.revertButtonRoot }}
              >
                Revert to base attack and movement
              </Button>
            </div>
            <div className={classes.curseContainer}>
              <h4 className={classes.characterOptionTitle}>Conditions</h4>
              <FormGroup classes={{ root: classes.checkRoot }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.poison}
                      onChange={() => this.handleRadioChange("poison")}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label="Poison"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.wound}
                      onChange={() => this.handleRadioChange("wound")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Wound"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.immobilize}
                      onChange={() => this.handleRadioChange("immobilize")}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label="Immobilize"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.disarm}
                      onChange={() => this.handleRadioChange("disarm")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Disarm"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.stun}
                      onChange={() => this.handleRadioChange("stun")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Stun"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.muddle}
                      onChange={() => this.handleRadioChange("muddle")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Muddle"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.curses.curse}
                      onChange={() => this.handleRadioChange("curse")}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Curse"
                />
              </FormGroup>
            </div>
          </div>
          <div className={classes.bottomContainer}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h4 className={classes.subtitle}>Health: {this.state.health}</h4>
              <div className={classes.buttonContainer}>
                <AddCircleOutlineIcon
                  onClick={() => this.changeStat("health", 1)}
                />
                <RemoveIcon onClick={() => this.changeStat("health", -1)} />
              </div>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Initiative"
                variant="outlined"
                onChange={e => this.handleInitiativeChange(e)}
                disabled={this.state.set}
              />
            </div>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel id="demo-simple-select-label">Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.level}
                onChange={e => this.handleLevelChange(e)}
                label="Level"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      );
    };

    const inactiveCard = () => {
      return (
        <div className={classes.inactiveCard}>
          <div
            style={{
              flexDirection: "column ",
              display: "flex",
              alignItems: "center"
            }}
          >
            <h2>Add enemy</h2>
            <FormControl style={{ marginBottom: "25px" }} variant="outlined">
              <InputLabel id="demo-simple-select-label">Enemy</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.enemyInput}
                onChange={e => this.handleEnemyChange(e)}
                label="Enemy"
              >
                {Object.keys(monsters).map(monster => {
                  console.log(monsters);
                  console.log(monsters[monster].name);
                  return (
                    <MenuItem value={monsters[monster].name}>
                      {monsters[monster].name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              style={{ marginBottom: "10px", width: "100px" }}
            >
              <InputLabel id="demo-simple-select-label">Number</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.enemyNumberInput}
                onChange={e => this.handleEnemyNumberChange(e)}
                label="Number"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.elite}
                  onChange={() => this.setState({ elite: !this.state.elite })}
                  color="primary"
                />
              }
              label="Elite"
              style={{ marginBottom: "25px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.activateSelectedCharacter()}
              style={{ width: "100px" }}
            >
              Accept
            </Button>
          </div>
        </div>
      );
    };

    return (
      <Paper className={classes.characterCard}>
        {this.state.activeCharacter ? activeCard() : inactiveCard()}
      </Paper>
    );
  }
}

export default withStyles(styles)(MonsterCard);
