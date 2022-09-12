import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
function Quota() {
    // const [quotaArr, setquotaArr] = useState('')
    const { quota } = useSelector(state => state.quota)
    console.log(quota)
    useEffect(() => {
        // setquotaArr(quota.map(quota => {
        //     // <img key={quota.mane.common} src={quota.flags.png}></img>
        //     <p></p>
        // }))
    }, [])

    return(
        // {quotaArr}
        <p></p>
    )

}
export default Quota