const initialState=[
    {
        id:0,
        name:"Aakash Upadhyay",
        email:"aakashupadhyay49@gmail.com",
        number:123456789

    },
    {
        id:1,
        name:"Aashu Upadhyay",
        email:"ashuupadhyay49@gmail.com",
        number:345656789
    }
]

const contactReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state,action.payload]
            return state
        case "UPDATE_CONTACT":
            const updateState=state.map((contact)=>contact.id===action.payload.id?action.payload:contact)
            state=updateState
            return state
        case "DELETE_CONTACT":
            const filterContacts=state.filter(contact=>contact.id!==action.payload&&contact)
            state=filterContacts
            return state
        default:
            return state
    }
}


export default contactReducer