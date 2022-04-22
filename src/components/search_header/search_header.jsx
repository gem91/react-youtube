import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onSearch, onLogo}) => {
    const searchRef = useRef()

    const hadnleSearch = () => {
        const value = searchRef.current.value;
        onSearch(value)
        searchRef.current.value = '';
    }

    const onClick = () => {
        hadnleSearch()
    }

    const onKeyPress = (event) => {
       if( event.key === "Enter" ){
        hadnleSearch()
       }
    }
    
    const clickLogo = () => {
        onLogo();
    }

    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <h1 className={styles.logo} onClick={clickLogo}><img src='/images/logo.png' alt='logo' /></h1>
                <div className={styles.searchArea}>
                    <input ref={searchRef} className={styles.header} type="search" placeholder='Enter what you wanna watch' onKeyPress={onKeyPress}  />
                    <button className={styles.search} type='submit' onClick={onClick}>Search</button>
                </div>
            </div>
        </header>
    )
}

export default SearchHeader;