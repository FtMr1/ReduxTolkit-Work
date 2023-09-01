import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { changeCost, changeDescription, changeName } from '../store/slice/formSlice';
import { addCourse } from '../store/slice/courseSlice';
const Forms = () => {
  const dispatch = useDispatch();

  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  console.log(name, description, cost);
    
    const handleSubmit =  (event)=>{
        event.preventDefault();
        dispatch(addCourse({name , description, cost}))
    }
      console.log(name , description , cost)
  return (
    <div className='form panel'> 
            <h4 className='subtitle is-3'>Kitap Ekle</h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                        <div className='field'>
                            <label className='label' >Ad</label>
                            <input  className='input is-expanded' onChange={(event)=>{dispatch(changeName(event.target.value))}} value={name}/>
                        </div>
                        <div className='field'>
                            <label className='label' >Açıklama</label>
                            <textarea  className='input is-expanded' onChange={(event)=>{dispatch(changeDescription(event.target.value))}} value={description}/>
                        </div>
                        <div className='field'>
                            <label className='label'  >Fiyat</label>
                            <input type='number' className='input is-expanded' onChange={(event)=>{dispatch(changeCost(parseInt(event.target.value)))}}  value={cost}/>
                        </div>
                        
                </div>
                <div className='field'>
                                <button className='button is-primary'>Kaydet</button>
                        </div>
            </form>
    </div>
  )
}

export default Forms