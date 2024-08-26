import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let messageElements = props.postData.map(post =>
        <Post message={post.message} key={post.id} likes={post.likesCount} />
    );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let post = newPostElement.current.value;
        props.updateNewPostText(post)
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} // Отображает текущее состояние
                    />
                </div>
                <div>
                    <button onClick={ onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {messageElements}
            </div>
        </div>
    );
};

export default MyPosts;
