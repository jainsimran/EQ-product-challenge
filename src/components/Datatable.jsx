import React, { Component } from 'react';

export default class Datatable extends Component {
  render() {
    console.log(this.props.highlightIdxs);
    return (
      <section>
        <h1>{this.props.title}</h1>
        <table>
          <tbody>

            <tr>
              {this.props.columns.map(col => (<th>{col.name}</th>))}
            </tr>
            {
              this.props.data.map((item, idx) => (
                <tr className={this.props.highlightIdxs.includes(idx) ? 'highlight' : null}  >
                  {this.props.columns.map(col => (<td>{item[col.name]}</td>))}
                </tr>
              ))
            }
          </tbody>
        </table>

      </section>

    )
  }
}
