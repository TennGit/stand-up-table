/**
 * Created by hengl on 22/05/2017.
 */


import {connect} from "react-redux";
import StandUpTable from "../components/StandUpTableComponent";


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = () => {return {}}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(StandUpTable)

export default Container;