import React, { Component } from 'react';
import './style.css'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
class TextBox extends Component {
    render() {
        const { handleFocus,handleBlur,focus } = this.props;
        return (
            <div>
                <CSSTransition
                    in={focus}
                    timeout={2000}
                    classNames="slide"
                >
                    <input 
                        className="textbox" 
                        placeholder="搜索"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />  
                </CSSTransition> 
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        focus:state.textbox.focus
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleFocus(){
            const action = {
                type:'focus_input'
            }
            dispatch(action)
        },
        handleBlur(){
            const action = {
                type:'blur_input'
            }
            dispatch(action)
        }
    }
}
export default connect(mapState,mapDispatch)(TextBox); 