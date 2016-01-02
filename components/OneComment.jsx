import React from 'react';
import ReactDOM from 'react-dom';
import CommentActions from '../actions/CommentActions'
import CommentStores from '../stores/CommentStores';
import connectToStores from 'alt-utils/lib/connectToStores';
var OneComment = React.createClass({

    deleteComment(){
    	CommentActions.deleteComment(this.props.id);
    },

    render() {
        return (
            <li>{this.props.comment}<button onClick={this.deleteComment}>delete me</button></li>
        );
    }
});


// class OneComment extends React.Component{
// 	// static getStores() {
//  //        return [CommentStores];
//  //    }

//  //    static getPropsFromStores() {
//  //        return CommentStores.getState();
//  //    }
//     constructor(props) {
//         super(props);
//         this.onChange=this.onChange.bind(this);
//         this.deleteComments=this.deleteComments.bind(this);
//     }
    

//     componentDidMount() {
//         CommentStores.listen(this.onChange);
//     }

//     componentWillUnMount() {
//         CommentStores.unlisten(this.onChange);
//     }
//     onChange(state) {
//         this.setState(state);
//     }
//     deleteComments(){
//     	CommentActions.deleteComment(this.props.id);
//     }

//     render() {
//         return (
//             <li>{this.props.comment}<button onClick={this.deleteComments}>delete me</button></li>
//         );
//     }
// }
export default OneComment;