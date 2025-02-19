const initState = {
    projects:[
        {id:'1', title:'help me find peach', content:'blah blah blah'},
        {id:'2', title:'collect all the stars', content:'blah blah blah'},
        {id:'3', title:'egg hunt with yoshi', content:'blah blah blah'},
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            break;
        case 'DELETE_POST':
            console.log('deleted post', action.id);
            return state;
        case 'DELETE_POST_ERROR':
            console.log('create project error', action.err);
            break;
        default:
            return state;
    }

};

export default projectReducer;
