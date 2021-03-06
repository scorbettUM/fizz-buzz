import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { aboutStyle, toolTipStyle } from '../../../../styles'
import { switchActiveDisplay } from '../../../../actions'
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const StartGameTooltip = (props) => {
  const { classes } = props;

  return (
    <div style={aboutStyle.aboutTooltipSection}>
      <Tooltip
        title="Starting a game"
        classes={{ tooltip: classes.tooltip }}
        >
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={() => props.switchActiveDisplay(
            {
              showPlayGameInfo: false,
              showStartGameInfo: true,
              showScoringGameInfo: false
            }
          )}
          >
          <AddIcon />
        </Button>
      </Tooltip>
    </div>
  )
}

StartGameTooltip.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ about }) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
  switchActiveDisplay
}, dispatch)

const styledComponent = withStyles(toolTipStyle)(StartGameTooltip)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent)
