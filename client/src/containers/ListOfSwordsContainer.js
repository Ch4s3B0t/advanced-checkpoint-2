import { connect } from "react-redux";
import ListOfSwords from "../components/ListOfSwords";

function mapStateToProps(state) {
    return{
        swords: state.swords
    };
}
function mapDispatchToProps(dispatch){
    return{

    };
}
const ListOfSwordsContainer = connect(mapStateToProps, mapDispatchToProps)(ListOfSwords);
export default ListOfSwordsContainer
