let initialState={
    count:0,
    id:"",
    password:""
}


function reducer(state=initialState, action){   //reducer가 dispatch에서 던져준 action을 자동으로 탁 받아올수있다. 
    console.log("액션은 뭘까?",action);


    // 행동지침을 if문으로 사용할수도있고 swich로도 사용할 수 있다
    // if(action.type==="INCREMENT"){
    //     //return {...state, count : state.count + 1}; //reducer는 store를 바꿀때 state를 retune 하는 방식으로 바꾼다  ""...state"의 의미는 기존 state는 유지한채라는 의미
    //     return {...state, count : state.count + action.payload.num};
    // } 
    // return {...state}; //if(action.type==="INCREMENT")에 해당이 안되더라도 기존 state를 전달해야하기 때문에 


    // 행동지침을 if문으로 사용할수도있고 swich로도 사용할 수 있다
    switch (action.type) {
        case "INCREMENT" :
            return {...state, count : state.count + action.payload.num};    

        case "DECREMENT" :
            return {...state, count : state.count - action.payload.num};             

        case "LOGIN" :
            return {...state, 
                id:action.payload.id,
                password:action.payload.password 
            };   

        default:
            return {...state};

    }
}

export default reducer;