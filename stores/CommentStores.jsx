import alt from '../control';
import CommentActions from '../actions/CommentActions';
import {bind,createStore} from 'alt-utils/lib/decorators';



@createStore(alt)
class CommentStores {
	constructor() {
		this.items=[];
		this.comment='';
	}

	@bind(CommentActions.deleteComment)
	deleteComment(index) {
		// this.state.items.splice(index, 1);
		// this.setState({
		// 	items: this.state.items,
		// });
		this.items.splice(index,1);
	}

	@bind(CommentActions.addComment)
	addComment(comment) {
		var nextItems = this.items.concat([comment]);
		this.items=nextItems;
		this.comment='';
		// console.log(this);
		// console.log(comment);
		// console.log(nextItems);
	}
}

export default CommentStores;