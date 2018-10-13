import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddPhotoPrueba from '../components/AddPhotoPrueba';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
},
dense: {
  marginTop: 16,
},
menu: {
  width: 200,
},
});

// handleChange = name => event => {
//   this.setState({
//     [name]: event.target.value,
//   });
// };

function FloatingActionButtons(props) {
  const { classes } = props;

  var el = document.getElementsByClassName('modal')

  return (
      <div>
      <button onClick={()=>el[0].classList.toggle('is-active')} variant="fab" color="secondary" aria-label="Edit" className="button is-primary is-large modal-button" data-target="modal-ter" aria-haspopup="true">

        <Icon>edit_icon</Icon>
      </button>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button onClick={()=>el[0].classList.toggle('is-active')} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
          <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        <AddPhotoPrueba />
          </section>
          <footer class="modal-card-foot">
            <button onClick={()=>console.log('saving')}class="button is-success">Save changes</button>
            <button onClick={()=>el[0].classList.toggle('is-active')} class="button">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);

