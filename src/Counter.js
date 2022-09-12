import {useSelector,useDispatch} from 'react-redux'


export const Counter = () => {
    const {value} = useSelector(state => state.conter)
    // console.log()
    const dispatch = useDispatch()

    return(
        <div>
            <div className='m-4'>{value}</div>
            <button className='btn btn-success m-3'>increment</button>
        </div>
    )
}