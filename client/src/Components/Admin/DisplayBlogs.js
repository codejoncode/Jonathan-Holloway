import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchBlogs } from '../../Store/Actions/blogActions'

const actions = {
    fetchBlogs,
}

class DisplayBlogs extends Component {
    componentDidMount () {
        const token = localStorage.getItem("holloway-portfolio-token")
        if (!token) {
            this.props.history.push("/admin/login");
        } else {
            this.props.fetchBlogs(token); 
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

export default connect(null, actions)(DisplayBlogs);