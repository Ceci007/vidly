import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import "../../css/Table.css";

const Table = props => {
    const { columns, sortColumn, onSort, data } = props;

    return (  
        <table className="table table-responsive-sm" id="table-border">
                <TableHeader 
                columns = {columns} 
                sortColumn = {sortColumn} 
                onSort = {onSort}
                />
                <TableBody data = {data} columns = {columns} />
        </table>
    );
}
 
export default Table