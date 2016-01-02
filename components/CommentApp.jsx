import React from 'react';
import ReactDOM from 'react-dom';
import {Component}from 'react';
import Comment from './Comment';
import connectToStores from 'alt-utils/lib/connectToStores';
import CommentStores from '../stores/CommentStores';
import CommentActions from '../actions/CommentActions';

@connectToStores
class CommentApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    static getStores() {
        return [CommentStores];
    }

    static getPropsFromStores() {

        return CommentStores.getState();
    }

    componentDidMount() {
        CommentStores.listen(this.onChange);
    }

    componentWillUnMount() {
        CommentStores.unlisten(this.onChange);
    }

    handleClick() {
        CommentActions.addComment(this.state.comment);
        
    }

    _onChange = event => {
        this.setState({
            comment: event.target.value
        });
    }
    onChange = state => {
        this.setState(state);
    }
    render() {
        return (
            <div>		
			<input type="text" onChange={this._onChange} value={this.state.comment}/>
			<button onClick={this.handleClick}>comment</button>
			</div>
        );
    }
}
export default CommentApp;

