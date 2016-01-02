import alt from '../control';
import {createActions} from 'alt-utils/lib/decorators';

@createActions(alt)
class CommentActions {
	deleteComment(index) {
		// this.dispatch(index);
		return index;

	}
	addComment(comment) {
		// this.dispatch(comment);
		return comment;

	}
}

export default CommentActions;