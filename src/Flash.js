import React from 'react';

export default class Flash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: props.cardVal.front,
            back: props.cardVal.back,
            isFront: true,
            index: props.index
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.index !== prevProps.index) {
            this.setState({
                front: this.props.cardVal.front,
                back: this.props.cardVal.back,
                isFront: true,
                index: this.props.index
            })
        }
    }

    toggleFlash = (e) => {
        e.preventDefault();
        this.setState({ isFront: !this.state.isFront });
    }

    render() {
        let { isFront, front, back, index } = this.state;
        let style = isFront ? frontStyle : backStyle
        return <div id="flashDiv" style={ style } onClick={this.toggleFlash}>
            <p id="flashText">{isFront ? front : back}</p>
            <div id="cardIndex">{index + 1}</div>
        </div>
    }
}

const frontStyle = {
    backgroundColor: "white",
    color: "#282c34",
}

const backStyle = {
    backgroundColor: "#282c34",
    color: "white"
}