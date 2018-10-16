import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import AddPhotoPrueba from '../AddPhotoPrueba';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import User from './editPrueba'


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
      <button onClick={()=>el[1].classList.toggle('is-active')} variant="fab" color="secondary" aria-label="Edit" className="button is-primary is-large modal-button" data-target="modal-ter" aria-haspopup="true">

        <Icon>edit_icon</Icon>
      </button>


      {/* <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button onClick={()=>el[0].classList.toggle('is-active')} className="delete" aria-label="close"></button> */}
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">EditProfile</p>
            <button onClick={()=>el[1].classList.toggle('is-active')} class="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
          <User></User>
          
        
          </section>
        
        </div>
      </div>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);


