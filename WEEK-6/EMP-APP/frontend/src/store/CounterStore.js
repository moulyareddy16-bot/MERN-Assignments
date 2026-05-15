import {create} from 'zustand'

//create store
export const useCounterStore = create((set)=>({
    //state
    newCounter : 0,
    newCounter1 : 100,
    //add user state(name,age email)
    user: {name: "moulya",age:19,email:"moulya@mail.com"},

    //function to change email
    changeEmail : ()=>set((state)=>({user:{...state.user,email:"moulyareddy@mail.com"}})),
    //function to chnage name and age
    changeNameAndAge : ()=>set((state)=>({user:{...state.user,name:"moulya reddy",age:20}})),

    //functions to modify state counters
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-1})),
    reset1:()=>set({newCounter1:0}),

    //function to change newCounter to 500
    changeNewCounter:()=>set({newCounter:500}),
    
    //function to decremenrt newCounter1 by 20
    decrementNewCounter1By20 : ()=>set(state=>({newCounter1:state.newCounter1 - 20}))
})) 