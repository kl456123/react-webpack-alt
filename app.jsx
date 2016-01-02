import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/CommentApp';
import Comment from './components/Comment';
var temp = (
    <div>
	<h1>asfa</h1>
	<Comment/>
	<CommentApp/>
	</div>
);
ReactDOM.render(
    temp,
    document.getElementById('COMMENT')
);
