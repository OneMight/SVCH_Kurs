import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', async(_,{rejectWithValue,dispatch}) =>{
        try{
            const response = await axios.get(`http://localhost:5000/api/user`)
            dispatch(setCurrentUser(response.data))
            console.error(response.data)
            return response.data;
            }
        catch(error){
            console.error("Fetch users error:", error);
            return rejectWithValue(error.message)
        }
    }
)
export const registration = createAsyncThunk(
    'users/registration', async({email,login,password},{rejectWithValue,dispatch})=>{
        try{
            const response = await axios.post('http://localhost:5000/api/user/registration',
                {
                    email:email,
                    login:login,
                    password:password
                });
             
             localStorage.setItem('currentUser',JSON.stringify(response.data));
            return response.data
        }
        catch (error) {
            console.log(error)
            return rejectWithValue(error.message); // Возвращаем сообщение об ошибке
        }
    }
)
export const logout = createAsyncThunk(
    'users/logout', async(_,{rejectWithValue}) =>{
        try{
            const refreshToken = localStorage.getItem('token')
            const response = await axios.post('http://localhost:5000/api/user/logout',{refreshToken},{ withCredentials: true })
            localStorage.removeItem('token')
            localStorage.removeItem('currentUser')
      
        }catch (error) {
            console.log(error)
            return rejectWithValue(error.response?.data?.message); // Возвращаем сообщение об ошибке
        }
    }
)


const usersSlicer = createSlice({
    name:'users',
    initialState:{
        users:[],
        currentUsers:null,
        status: null,
        error: null
    },
    reducers:{
        setCurrentUser(state, action){
            state.currentUsers = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(registration.pending, (state) =>{
             state.status = 'loading';
             state.error = null
         })
         .addCase(registration.fulfilled, (state, action) =>{
             state.status = 'resolved';
             state.currentUsers = action.payload;
         })
         .addCase(registration.rejected, (state, action) =>{
             state.status ='rejected';
             state.error = action.error.message;
         })
         .addCase(logout.fulfilled, (state, action) =>{
            state.status = 'resolved';
            state.currentUsers = null;
        })

     }
})
export const {setCurrentUser} = usersSlicer.actions
export default usersSlicer.reducer;