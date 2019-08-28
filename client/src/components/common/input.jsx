import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return ( 
        <span className = "bmd-form-group">
            <div className="control-group my-4">
            <label htmlFor={name}>{ label }</label>
                <input 
                {...rest}
                name = {name}
                id = {name} 
                className="form-control"/>
                {error && <div className="mt-2 alert alert-danger">{error}</div>}
            </div>
        </span>
     );
}
 
export default Input;