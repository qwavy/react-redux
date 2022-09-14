import { useState } from 'react'

const Nasa = () => {
    let rovers = [
        {
            name: 'curiosity',
            cameras: ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam']
        },
        {
            name: 'opportunity',
            cameras: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
        },
        {
            name: 'spirit',
            cameras: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
        },
    ]
    const [src, setSrc] = useState('')
    const [cameras, setCameras] = useState(rovers[0].cameras)

    const onShow = () => {
        const firstSelect = document.querySelector('.firstSelect')

        const secSelect = document.querySelector('.secSelect')
        const input_val = document.querySelector('input').value

        const key = 'wEI4nOiVivQHOjbmhcCypzM90CSG8S3HpHIb0wGK'
        console.log(secSelect.value)
        console.log(firstSelect.value)

        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${firstSelect.value}/photos?sol=${input_val}&camera=${secSelect.value}&api_key=${key}`)
            .then((response) => response.json())
            .then((data) => setSrc(data.photos[0].img_src))
            // .then((data) => console.log(data))
            .catch(error => {
                throw (error)
            })
    }
    const onEdit = () => {
        const firstSelect = document.querySelector('.firstSelect')

        if (firstSelect.value == 'curiosity') {
            setCameras(rovers[0].cameras)
        } else if (firstSelect.value = 'opportunity') {
            setCameras(rovers[1].cameras)

        } else if(firstSelect.value = 'spirit'){
            setCameras(rovers[2].cameras)
        }else{
            console.log('s')
        }
    }
    return (
        <div>
            <select className='firstSelect' onChange={onEdit}>
                {/* <option value={rovers[0].name}></option> */}
                {rovers.map((item) => <option>{item.name}</option>)}
            </select>
            <select className='secSelect' >
                {/* {rovers.map((item) => <div>{rovers.map((item) => <div>{rovers.map}</div>)}</div>)} */}
                {/* {rovers.map((item) => <option>{item.cameras}</option>)} */}
                {cameras.map(camera => (
                    <option>{camera}</option>
                ))}
            </select>
            <input type='number' />
            <button onClick={onShow}>show</button>
            <div>

                <img src={src} style={{ width: 200 }} />
            </div>
        </div>
    )
}
export default Nasa