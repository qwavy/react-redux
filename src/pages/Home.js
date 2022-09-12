import {useSelector,useDispatch} from 'react-redux'
import {increment,addBy} from '../features/counterSlice'
function Home(){
    const {value} = useSelector(state => state.counter)
    const dispatch = useDispatch()
    // console.log(initialState)
    return(
        <div>
            {/* <h1>Home</h1> */}
            <div className='m-4'>{value}</div>
            <button onClick={() => dispatch(increment())} className='btn btn-success m-3'>increment</button>
            <button onClick={() => dispatch(addBy(10))} className='btn btn-success m-3'>increment</button>
            <input type='number' className='form-control' placeholder='number'/>
            <button className='btn btn-info mt-3'>
                df
            </button>

        </div>
    )
}
export default Home