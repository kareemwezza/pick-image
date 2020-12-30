import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = { images: [] };
  /// trying to pass a function to the child component to be invoked
  onSearchSubmit = async (term) => {
    /// Axios will return a promise so we can use .then with it or we can use async
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 },
    });
    /* axios return a promise so we can use .then((res) => console.log(res.data.results)); */
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
