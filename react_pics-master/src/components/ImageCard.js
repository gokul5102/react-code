import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={spans:0};
        this.Imgref=React.createRef();
    }

    componentDidMount(){
        this.Imgref.current.addEventListener('load',this.setSpans)
    }

    setSpans=()=>{
        const height =this.Imgref.current.height;
        const spans=Math.ceil(height/10);
        this.setState({spans})
    }
    render(){
        const {description,urls}=this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img 
                ref={this.Imgref}
                alt={description} 
                src={urls.regular}/>
            </div>
        );
    }
}

export default ImageCard;