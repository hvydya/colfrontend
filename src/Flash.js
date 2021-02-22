import React from 'react';

export default class Flash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: props.cardVal.front,
            back: props.cardVal.back,
            isFront: true
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):

        if (this.props.cardVal.front !== prevProps.cardVal.front || this.props.cardVal.back !== prevProps.cardVal.back) {
            this.setState({
                front: this.props.cardVal.front,
                back: this.props.cardVal.back,
                isFront: true
            })
        }
    }

    toggleFlash = (e) => {
        e.preventDefault();
        this.setState({ isFront: !this.state.isFront });
    }

    render() {
        let { isFront, front, back } = this.state;
        return <div id="flashDiv" onClick={this.toggleFlash}>
            <p id="flashText">{isFront ? front : back}</p>
        </div>
    }
}