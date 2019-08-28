import React from 'react';

const ListGroup = props => {
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;

    return ( 
        <ul className="list-group size">
            {items.map(item => 
            <li 
            onClick = {() => onItemSelect(item)} 
            key = {item[valueProperty]} 
            className={item === selectedItem ? "list-group-item active" : "list-group-item"}
            >
                {item[textProperty]}
            </li>
            )}
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListGroup;