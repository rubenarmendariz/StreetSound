import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  var el = document.getElementsByClassName('modal')
  return (
    <div>
      <Button onClick={()=>el[0].classList.toggle('is-active')} variant="fab" color="secondary" aria-label="Edit" className="button is-primary is-large modal-button" data-target="modal-ter" aria-haspopup="true"> variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
      
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);