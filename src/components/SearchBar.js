import React from "react";
class SearchBar extends React.Component {
  /*     /// Call back function for change on input value
  onInputChange(event) {
    console.log(event.target.value);
  }
 */
  state = { term: "" };
  //// normally form elements are uncontrolled elements
  //// making them controlled element is easier so everyyhing is coming from React App not from the DOM

  /// we will have a problem while assigning "this" in the function so we have to make it an arrow function to bind this.state to the current instance
  /// or we can invoke the function inside an arrow function like that : (event) => this.onFormSubmit(event)
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    console.log(this.state);
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
