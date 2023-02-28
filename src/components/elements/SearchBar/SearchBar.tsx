import { SearchBarStyle } from './searchBarStyle';
import  search from '../../../assets/search.svg';
import filter from '../../../assets/filter.svg';

const SearchBar = () =>  {

    return (
    <>
    <SearchBarStyle>   
        <div className='search-icon'>
            <img src={search} alt="Search icon" />
        </div>
        <input type="text" placeholder='Search' />
        <div className='filter-icon'>
            <img src={filter} alt="Filter icon" />
        </div>
    </SearchBarStyle>
    </>
    )
    
}
export default SearchBar

