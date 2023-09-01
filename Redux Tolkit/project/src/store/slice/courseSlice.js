import  {createSlice , nanoid}  from '@reduxjs/toolkit'


const courseSlice = createSlice({

    name:'form',
    initialState:{
        searchTerm:'',
        data:[],
      
    },
    reducers:{
            addCourse(state,action){
                state.data.push({
                    name:action.payload.name,
                    description:action.payload.description,
                    cost:action.payload.cost,
                    id:nanoid(),
                })
            },
            removeCourse(state,action){
                const update = state.data.filter((course)=>{
                    return course.id !==action.payload
                })
                state.data = update;
            },
            changeSearch(state,action){
                state.searchTerm = action.payload
            }
    }


})
export const {addCourse , removeCourse , changeSearch}= courseSlice.actions;
export const courseReducer = courseSlice.reducer;