import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'
class Switch extends Component {
    render() {
        const { checked,disabled,switchChange } = this.props;
        return (
            <div className="con-wrapper">
                <button
                    disabled={disabled}
                    onClick={()=>switchChange(checked)}
                    className={
                        checked  ? "btn-switch-checked" : "btn-switch"
                    }
                >
                    
                    <div className="switch-wrapper">
                        <div className="switch-circle"></div>
                    </div>
                </button>
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        checked:state.switch.isSwitchChecked,
        disabled:state.switch.isSwitchDisabled
    }
}
const mapDispatch = (dispatch) => {
    return {
        switchChange(isChecked){
            const action = {
                type:'change_switch_checked',
                isChecked
            }
            dispatch(action)
        }
    }
}
export default connect(mapState,mapDispatch)(Switch);