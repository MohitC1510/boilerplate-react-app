import {createStore} from 'redux';

const incrementCount = ({incrementBy=1}={}) => ({
    type: 'INCREMENT',
    incrementBy
})


const store=createStore((state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
         default:
             return state
        }
});
console.log(store.getState());
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:6}));
store.dispatch(incrementCount());


console.log(store.getState());