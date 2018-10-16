import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    genere: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-native-simple">Género</InputLabel>
          <Select
            native
            value={this.state.genere}
            onChange={this.handleChange('age')}
            input={<FilledInput name="genere" id="filled-age-native-simple" />}
          >
          ','Funk','Disco','House','Techno','Pop','Ska','Reggae','Hip Hop','Drum and Bass','Garage','Flamenco','Salsa','Reggaeton','Instrumental','Otros']
            <option value="" />
            <option value={"Clasica"}>Clasica</option>
            <option value={"Blues"}>Blues</option>
            <option value={"Jazz"}>Jazz</option>
            <option value={"R&B"}>R&B</option>
            <option value={"Blues"}>Blues</option>
            <option value={"Jazz"}>Jazz</option>
            <option value={"Rock and rol"}>Rock and roll</option>
            <option value={"Gospel"}>Gospel</option>
            <option value={"Soul"}>Soul</option>
            <option value={"Rock"}>Rock</option>
            <option value={"Metal"}>Metal</option>
            <option value={"Country"}>Country</option>
            <option value={"Funk"}>Funk</option>
            <option value={"Disco"}>Disco</option>
            <option value={"House"}>House</option>
            <option value={"Techno"}>Techno</option>
            <option value={"Pop"}>Pop</option>
            <option value={"Ska"}>Ska</option>
            <option value={"Reggae"}>Reggae</option>
            <option value={"Hip Hop"}>Hip Hop</option>
            <option value={"Drum and Bass"}>Drum and Bass</option>
            <option value={"Garage"}>Garage</option>
            <option value={"Flamenco"}>Flamenco</option>
            <option value={"Salsa"}>Salsa</option>
            <option value={"Reggaeton"}>Reggaeton</option>
            <option value={"Instrumental"}>Instrumental</option>
            <option value={"Otros"}>Otros</option>
            
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);