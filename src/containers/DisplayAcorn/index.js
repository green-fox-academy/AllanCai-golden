import { connect } from 'react-redux';
// import { EAT_ONE } from '../../action/action';
import Display from '../../../components/Display';

const mapStateToProps = (state) => {
	console.log(state);
  return {
    number: state.number,
  };
};

const DisplayNum = connect(
  mapStateToProps,
)(Display);

export default DisplayNum;
