import React, { Component } from 'react';

class SearchBar extends Component {
    state={term:''};

    onFormSubmit=e=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };
    render() {
        return (
          <div className="ui segment search-bar">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label >Video Search</label>
                <input
                 type="text"
                 value={this.state.term}
                 onChange={e=>this.setState({term:e.target.value})}

                 />
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;
