import React, {Component} from "react";
import { withRouter } from "react-router"; 

class DisplayBlogs extends Component {
    componentDidMount () {
        const token = localStorage.getItem("holloway-portfolio-token")
        if (!token) {
            this.props.history.push("/admin/login");
        }
    }
    render () {
        return (
            <div>
                <h1>Blogs will be displayed here only after successful login</h1>
            </div>
        )
    }
}

export default withRouter(DisplayBlogs);