import axios from "axios";
import Link from "next/link";
import LikeButton from "../components/likeButton";
import style from "../page.module.css"
const axiosPosts = async () => {
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        next:{
            revalidate: 10
        }
    });
    return post;

}

const PostPage = async () => {
    const {data} = await axiosPosts();
    return <>
        <section>
            {data.map(post => ( 

                <article key={post.id}>
                    <Link className={style.option} href={`/posts/${post.id}`}>
                    <h2>{post.title}</h2>
                    </Link>
                    <p>{post.body}</p>
                    <LikeButton id={post.id}></LikeButton>
                </article>
            ))}
            
        </section>
    </>
}

export default PostPage