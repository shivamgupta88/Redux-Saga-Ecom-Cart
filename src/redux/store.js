import { createStore} from 'redux'

const dummyReduceer = () => {
    return 100 ; 
}
const store = createStore(dummyReduceer)  ; 


export default  store ; 

