import React from 'react'
import MenuLinks from './MenuLinks';
import styles from '../../styling/HeaderStyle.module.css'



function SearchInput() {
  return (
    <div className={styles.searchInput}>
        <input className={styles.inputSearch} title='Title' type='search' placeholder='Title ...'/>
        <MenuLinks 
            name={
                <svg className={styles.searchSvg} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.41196 14.0999L3.92259 18.5893C3.59715 18.9147 3.06951 18.9147 2.74408 18.5893C2.41864 18.2638 2.41864 17.7362 2.74408 17.4108L7.23345 12.9214C6.3559 11.7925 5.83333 10.3739 5.83333 8.83335C5.83333 5.15146 8.8181 2.16669 12.5 2.16669C16.1819 2.16669 19.1667 5.15146 19.1667 8.83335C19.1667 12.5153 16.1819 15.5 12.5 15.5C10.9594 15.5 9.54087 14.9775 8.41196 14.0999ZM12.5 13.8334C15.2614 13.8334 17.5 11.5948 17.5 8.83335C17.5 6.07193 15.2614 3.83335 12.5 3.83335C9.73858 3.83335 7.5 6.07193 7.5 8.83335C7.5 11.5948 9.73858 13.8334 12.5 13.8334Z" fill="#798490"/>
                </svg>}
            link="/searchpage">
        </MenuLinks>
    </div>
  )
}

export default SearchInput