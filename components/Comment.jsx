import React from 'react';
import ReactDOM from 'react-dom';
import CommentStores from '../stores/CommentStores';
import connectToStores from 'alt-utils/lib/connectToStores';
import CommentActions from '../actions/CommentActions';
import {Component}from 'react';
import OneComment from './OneComment';
class Comment extends Component {

    static getStores() {
        return [CommentStores];
    }

    static getPropsFromStores() {
        return CommentStores.getState();
    }
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            comment: '',
        };
        //cannot autobind 
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        CommentStores.listen(this.onChange);
    }

    componentWillUnMount() {
        CommentStores.unlisten(this.onChange);
    }
    onChange(state) {
        this.setState(state);
    }

    render() {
    	var that =this;
        return (
        	<div>
        	{this.state.items.map(function( itemText,index) {
        		return <OneComment id={index} comment={itemText} />;
        	})}
        	</div>
        	);
    }

}



export default connectToStores(Comment);
