import { Outlet } from "react-router-dom";

function PostLayout(){
    return (
        <div>
            <h1>블로그</h1>
            <hr/>
            <Outlet/>
        </div>
    );

}

export default PostLayout;