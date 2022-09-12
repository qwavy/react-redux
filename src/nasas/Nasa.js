const Nasa = () => {
    let rovers = [
        {
            name: 'curiosity',
            cameras: ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam']
        },
        {
            name: 'oppotrunity',
            cameras: ['fhaz', 'rhaz','navcam', 'pancam', 'minites']
        },
        {
            name: 'spirit',
            cameras: ['fhaz', 'rhaz','navcam', 'pancam', 'minites']
        },
    ]
    let firstSelect = document.querySelector('.firstSelect')
    const selects = () => {
        // for(let i = 0)
        // for(let item of rovers){
        //     firstSelect.append(`<option value='${item.name}'>${item.name.toUpperCase()}</option>`)
        // }
    }
    selects()
    const onShow = () => {

    }
    return(
        <div>
            <select className='firstSelect'>
                <option value={rovers[0]}></option>
            </select>
            <select></select>
            <input type='number'/>
            <button onClick={onShow}>show</button>
        </div>
    )
}
export default Nasa