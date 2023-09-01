import React from 'react'
import { changeSearch } from '../store/slice/courseSlice'
import { useSelector , useDispatch} from 'react-redux'





const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{
    return state.course.searchTerm
  })
  return (
    <div className='listHeader'>
      <h3 className='title is-3'>Kitaplarım</h3>
      <div className='search field is-horizontal'>
        <label className='label'>Ara</label>
        <input className='input' value={searchTerm} onChange={(event)=>{dispatch(changeSearch(event.target.value))}}/>
      </div>
    </div>
  )
}

export default Search