function Post({post, index}) {

    return (
        <div><span style={{
            borderBottom: index % 2 ? '1px solid white' : 'none'
        }}>{post.title}</span> <i style={{color:'crimson'}}>{post.userId}</i></div>
    )
}

export default Post;