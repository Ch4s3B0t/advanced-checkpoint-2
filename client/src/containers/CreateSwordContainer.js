import { connect } from "react-redux";
import CreateSword from "../components/CreateSword";

function mapStateToProps(state) {
    return{
        
    };
}
function mapDispatchToProps(dispatch){
    return{
        saveSword:function(sword){
            //call action
        }
    };
}
const CreateSwordContainer = connect(mapStateToProps, mapDispatchToProps)(CreateSword);
export default CreateSwordContainer
