import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from './searchInput.module.css';

const SearchInput = ({onInputChange, ...rest}) => {
    return (
        <div className={styles.wrapper}>
        <SearchRounded color="inherit"/>
        <input className={styles.input} onChange={onInputChange} {...rest} />
        </div>
    )
}

export default SearchInput;