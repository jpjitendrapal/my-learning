function Posts({posts=[]}){
    
    const renderPosts = () => {
        return posts.map(post=>{
            return <div className="post">{post.title} - {post.name}</div>
        })
    }
    return <div>
        All the posts
        {renderPosts()}
    </div>
}

export default Posts;