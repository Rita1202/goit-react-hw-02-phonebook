import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    return (
      <>
        <input
          className={css.input}
          name="filter"
          placeholder="Find contacts by name"
          onChange={this.props.handleChange}
          value={this.props.filter}
          type="text"
        />
      </>
    );
  }
}
