import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css'
class Switch extends Component {
    render() {
        const { checked,disabled,switchChange,toggleDisable } = this.props;
        return (
            <div className="con-wrapper">
                <button
                    disabled={disabled}
                    onClick={()=>switchChange(checked)}
                    className={
                        checked 
                        ? (disabled ? "btn-switch-checked-disabled" : "btn-switch-checked")
                        : (disabled ? "btn-switch-disabled" : "btn-switch" ) 
                    }
                >
                    
                    <div className="switch-wrapper">
                        <div className="switch-circle"></div>
                    </div>
                </button>
                <button className="toggle" onClick={() => toggleDisable(disabled)}>Toggle Disable</button>
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
        },
        toggleDisable(isDisabled){
            const action = {
                type:'toggle_disbable',
                isDisabled
            }
            dispatch(action)
        }
    }
}
export default connect(mapState,mapDispatch)(Switch);