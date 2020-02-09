import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        fontSize: '22px',
        fontWeight: '800',
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        fontSize: '17px',
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

export default class Datatable extends Component {
    render() {
        return (
            <div>
                <DataTable
                    title="Data table Daily"
                    columns={this.props.columns}
                    data={this.props.data}
                    customStyles={customStyles}
                />
            </div>
        )
    }
}
