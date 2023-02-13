import React ,{useState} from 'react'
import {list} from './data'
import {cat} from './category'
import styles from './style.module.css'

const Main = () =>{
    const [lists,setLists] = useState(list);
    const [cato,setCato] = useState(cat);

    return(
        <div className={styles.main_sec}>
        <div className={styles.posts}>Trending Posts</div>
        <img style={{cursor:"pointer"}} src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" alt=""/>

        <div className={styles.latest}>Latest Posts</div>
        <div className={styles.filter}><img className={styles.icon} alt="Filter Icon" src="https://th.bing.com/th/id/OIP.Nr_sM9vo7IRLWTa-AbBvVQHaHa?pid=ImgDet&rs=1"/> <p>Filter by Category</p>
        </div>
        <div className={styles.cat_box}>
        {cato.map(item=>(
            <div className={styles.category_section}>
                <div className={styles.btn}>{item.cname}</div>
                </div>
                ))}
                </div>

            <div className={styles.blog_grid}>
                    {lists.map(item => (

                        <div className={styles.blog_card}>
                            <img className={styles.thumbnail} src={item.url} alt="thumbnail" />
                            <div className={styles.blog_wrapper}>
                                <h3 className={styles.blog_title}>{item.name}</h3>
                                <div className={styles.author_info}>
                                    <a className={styles.author_name} href="/">{item.author}</a>
                                    <span className={styles.blog_date}> | 08 Jul 2019</span>
                                </div>
                                <p className={styles.blog_desc}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <footer className={styles.foot}></footer>
                </div>
      
    )
}
export default Main