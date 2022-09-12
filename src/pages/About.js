import {useSelector} from 'react-redux'
import AddPost from './AddPost'

function About(){
    const value = useSelector(state => state.posts)
    console.log(value)
    return(

        <div>
            <AddPost/>
            <h1>About</h1>
            {value.map((item) => <article key={item.id}><h1>{item.title}</h1><p>{item.content}</p></article>)}
        </div>
    )
}
export default About