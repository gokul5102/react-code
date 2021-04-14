import React, { Component } from "react";
import Searchbar from "./SearchBar";
import youtube from "../api/youtube";
import Videolist from "./videoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
      this.onTermSubmit('pes mobile')
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items,
        selectedVideo:res.data.items[0] });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onTermSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">

            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <Videolist
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
