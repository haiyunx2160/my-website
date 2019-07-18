
export const createPost = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;

        console.log(profile);

        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            createdAt: new Date()
        }).then(
            (response) => {
                dispatch({type: 'CREATE_POST', post});
                console.log(response)
            }).catch(
            (err) => {
                dispatch({type: 'CREATE_POST_ERROR', err})
            })
    }
};

export const deletePost = (id) =>{
    return (dispatch, getState, {getFirestore})=>{
        const firestore = getFirestore();
        console.log(firestore)
        firestore.collection('posts').doc(id).delete()
            .then(
                (response)=>{
                    console.log(response);
                    dispatch({type: 'DELETE_POST'})
                }
            ).catch((err)=>{
            dispatch({type: 'DELETE_POST_ERROR'}, err)
        })
    }
};
