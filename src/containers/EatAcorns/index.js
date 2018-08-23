import { connect } from 'react-redux';
import { eat } from '../../action/action';
import Button from '../../../components/Button';

const mapStateToProps = () => {
  return {
    text: 'Eat One',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(eat(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
