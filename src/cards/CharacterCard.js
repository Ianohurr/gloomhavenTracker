import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from "@material-ui/icons/Remove";
import characters from "../json_files/characters";
import Divider from "@material-ui/core/Divider";
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
    justifyContent: "center",
    width: "40%",
    height: "100%"
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
  }
});

class CharacterCard extends React.Component {
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
      set: false
    };
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

  activateSelectedCharacter = character => {
    this.setState({
      activeCharacter: true,
      name: character.name,
      character: character,
      health: character.health[1],
      curses: {}
    });
  };

  handleLevelChange = e => {
    console.log(e);
    console.log(e.target);
    this.setState({
      level: e.target.value,
      health: this.state.character.health[e.target.value]
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
  render() {
    const { classes } = this.props;
    console.log(characters);
    const activeCard = () => {
      console.log(this.state);
      return (
        <div className={classes.activeCard}>
          <h4 className={classes.characterOptionTitle}>{this.state.name}</h4>
          <div className={classes.topContainer}>
            <img
              src={this.state.character.imageSource}
              alt={this.state.name}
              style={{ height: "100%", width: "30%" }}
            />
            <div className={classes.setButtonContainer}>
              <Button
                variant="contained"
                color={this.state.set ? "primary" : "secondary"}
                size="large"
                style={{ width: "200px", height: "100px" }}
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
          <div className={classes.centeringContainer}>
            <h2>Add character</h2>
          </div>
          <Grid container className={classes.inactiveContainer} spacing={2}>
            {Object.keys(characters).map(character => {
              console.log(characters[character].imageSource);
              return (
                <Grid item xs={3} key={characters[character].name}>
                  <Paper variant="outlined" className={classes.characterOption}>
                    <h4 className={classes.characterOptionTitle}>
                      {characters[character].name}
                    </h4>
                    <Divider className={classes.characterOptionDivider} />
                    <img
                      src={characters[character].imageSource}
                      alt={characters[character].name}
                      onClick={() =>
                        this.activateSelectedCharacter(characters[character])
                      }
                      style={{
                        height: "100px",
                        width: "70%",
                        margin: "10px 0px"
                      }}
                    />
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
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

export default withStyles(styles)(CharacterCard);
