import React, { Fragment } from 'react';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: "",
            back: ""
        }
    }

    handleSubmit = () => {
        
    }

    handleInput = (type, val) => {
        console.log(val)
        switch (type) {
            case "front": this.setState({ front: val }); return;
            case "back": this.setState({ back: val }); return;
            default: return;
        }
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input onKeyUp={(e) => this.handleInput("front", e)}/>
                    <input onKeyUp={(e) => this.handleInput("back", e)}/>
                </form>
            </Fragment>
        )
    }
}