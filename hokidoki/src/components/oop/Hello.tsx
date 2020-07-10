import React, {Component} from "react";

interface HelloProps {
    name: string
}

class Hello extends Component<HelloProps>{
    public state = {
        name: "",
        greeting: ""
    };
    props: any;

    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name;
    }
    public handleClick = () => {
        if(this.state.greeting === "안녕") {
            this.setState({
                greeting: ""
            })
        }else {
            this.setState({
                greeting: "안녕"
            })
        }

    }

    public render() {
        return(
            <div>
                <h1>{this.state.greeting} {this.props.name}</h1>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        )
    }
}

export default Hello;