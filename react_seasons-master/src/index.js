import React from'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{
    state={lat:null,errMessage:''};

    componentDidMount(){

        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat:position.coords.latitude}),
            err=> this.setState({errMessage:err.message}),
        );
    }

    renderContent(){
        if(this.state.errMessage && !this.state.lat)
            {
                return <div>Error:{this.state.errMessage}</div>;
            }
            
            else if(!this.state.errMessage && this.state.lat)
            {
                return <SeasonDisplay lat={this.state.lat}/>
            }
            else
            {
                return <div>
                    <Spinner message="Please allow location access...."/>
                </div>;
            }
    }
    render(){
        return(
        <div>
            {this.renderContent()}
        </div>
            );
            
    }
}

ReactDom.render(<App/>,document.querySelector("#root"));