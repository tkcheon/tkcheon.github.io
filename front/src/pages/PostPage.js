

function PostPage(){
    const { postId } = useParam();
    const navgiate = useNavgiate();

    const post = getPost(postId);

    if(!post){
        return <Navigate to="/posts"/>;
    }

    const handleClick = () => {
        navgiate(`/wishList`);
    }

}
