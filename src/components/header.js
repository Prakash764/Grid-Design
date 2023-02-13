import React from 'react'
import styles from './style.module.css'

const header = () =>{
    return(
     <div className={styles.App}>
      <header className={styles.header}>
<div className={styles.logo}>EDYODA
<p class={styles.logo_stories}>Stories</p>
</div>
<div className={styles.drop}>
<div className={styles.drop_section}>
    <select>
        <option className={styles.dropdown}>Explore Catogries<img style={{cursor: "pointer"}}
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fdrop-down%2F&psig=AOvVaw2sZQ9SoMZW4Ay1gdV4acIU&ust=1668619664411000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDIiODasPsCFQAAAAAdAAAAABAO" alt=""/>
        </option>
    </select>
</div>
</div>
<div className={styles.quote}>
    <p>EdYoda is free learning and knowledge <br/> sharing platform for techies</p>
</div>
<div className={styles.web_btn}><button>Go to Main Website</button></div>

</header>
      
     </div>
    )
}
export default header
