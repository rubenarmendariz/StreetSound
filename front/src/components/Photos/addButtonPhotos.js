import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CardPhoto from './cardPhoto';
import PhotoList from '../Photos/photoList'

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

function FloatingActionButtons(props) {
  var el = document.getElementsByClassName('modal')
  const { classes } = props;

  
  
  
  return (
    <div>
      {/* <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button> */}
  
      <Button onClick ={()=>el[3].classList.toggle('is-active')}  variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Añadir fotos</p>
            <button onClick={()=>el[3].classList.toggle('is-active')} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
          <PhotoList  AddPhoto={()=>this.props.tomas()}></PhotoList>
          
        
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
