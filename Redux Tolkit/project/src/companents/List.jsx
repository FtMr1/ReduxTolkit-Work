import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeCourse } from '../store/slice/courseSlice';

const List = () => {

  const dispatch = useDispatch();
  const {courses} = useSelector(({form , course:{data, searchTerm}}) => {

    const filterData = data.filter((course)=>course.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return {
          courses : filterData,
  }



        });

  const courseRender = courses.map((cours)=>{
    return(
    <div key={cours.id} className='panel'>
         <h1>{cours.name}</h1>
      <p>{cours.description}</p>
      <p>{cours.cost}</p>
      <button className='button is-danger' onClick={()=>dispatch(removeCourse(cours.id))}>
        Sil
        </button>
    </div>
     
    ) 
  })
  return (
      <div className='courseList'>
          {courseRender}
      </div>
    )
}

export default List