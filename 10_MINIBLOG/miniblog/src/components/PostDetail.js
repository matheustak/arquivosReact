//hooks
import { Link } from 'react-router-dom'
//CSS
import styles from './PostDetail.module.css'


export function PostDetail({ post }) {
    return (
        <div className={styles.post_detail}>
            <img src={post?.image} alt={post?.title}></img>
            <h2>{post?.title}</h2>
            <p className={styles.createdby}>{post?.createdBy}</p>
            <div className={styles.tags}>
                {post?.tagArrays.map((tag) => {
                    return (
                        <p key={tag}>
                            <span>#</span>
                            {tag}
                        </p>
                    )
                })}
            </div>
            <Link to={`/posts/${post?.id}`} className="btn btn-outline">Ler</Link>
        </div>
    )
}