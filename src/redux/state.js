let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 20},
            {id: 3, message: 'Dislike post', dislikesCount: '5 dislikes'}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Shity'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Evgen'},
            {id: 3, name: 'Shura'},
            {id: 4, name: 'Vika '}
        ]
    }
}
export default state;