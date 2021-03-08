import React, { Fragment } from "react";

export default class ListCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            list: [1,2,3]
        };
    }

    componentDidMount() {
        // get list
        fetch("http://192.168.1.10/b/api/c").then(res => res.json().then(res => {
            this.setState({ list: res, ready: true });
        })).catch(err => console.error(err));
    }

    render() {
        let { ready, list } = this.state;
        return ready ? <Fragment>
            {list.map((el, i) => ListElement({ key: i, name: el.name, url: `/col/${el.id}`}))}
        </Fragment> : <h2>Loading....</h2>
    }
}

function ListElement(props) {
    return <div key={props.key} id="col-list-item">
        <a href={ props.url }>{ props.name }</a>
    </div>
}