import React, { Fragment } from "react";

export default class ListCol extends React.Component {
    constructor(props) {
        super(props);
        console.log("entered");
        this.state = {
            ready: false,
            list: [1,2,3]
        };
    }

    componentDidMount() {
        // get list
        setTimeout(() => {
            this.setState({ ready: true })
        }, 3000);
    }

    render() {
        let { ready, list } = this.state;
        return ready ? <Fragment>
            {list.map((el, i) => ListElement({ key: i, name: "list", url: `/col/${i}`}))}
        </Fragment> : <h2>Loading....</h2>
    }
}

function ListElement(props) {
    return <div key={props.key} id="col-list-item">
        <a href={ props.url }>{ props.name }</a>
    </div>
}