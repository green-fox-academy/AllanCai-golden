import { connect } from 'react-redux';
import { buy } from '../../action/action';
import Button from '../../../components/Button';

const mapStateToProps = () => {
  return {
    text: 'Buy One',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buy(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
