const initState = {
    projects: [
    {id: '1', title: 'help me find lovee', content: 'blahahahah'},
    {id: '2', title: 'help me find lovee', content: 'blahahahah'},
    {id: '3', title: 'help me find lovee', content: 'blahahahah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        case 'DELETE_PROJECT':
            console.log('delete project');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', 'state: ', state, 'action: ', action.project);
            return state;
        default:
            return state
    }
    
}

export default projectReducer