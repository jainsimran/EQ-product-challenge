import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
  header: {
    style: {
      fontColor: 'red',
      fontWeight: '900',
    }
  },
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      fontSize: '20px',
      fontWeight: '500',
      textTransform: 'uppercase',
      paddingLeft: '0 8px'
    },
  },
  cells: {
    style: {
      fontSize: '17px',
      paddingLeft: '0 8px',
    },
  },
};

export default class Datatable extends Component {
  render() {
    return (
      <React.Fragment>
        <DataTable
          title={this.props.title}
          columns={this.props.columns}
          data={this.props.data}
          customStyles={customStyles}
        />
      </React.Fragment>
    )
  }
}
