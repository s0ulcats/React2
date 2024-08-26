const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const AVA_IMG = "https://i.pinimg.com/236x/66/09/da/6609da9ce2f30496520a6ad6d4cadba4.jpg"

let initialState = {
    messagesData: [
        { id: 1, message: 's0ulcat', img: "https://i.pinimg.com/474x/02/ec/46/02ec46578d999af49f1eb898a078eced.jpg" },
        { id: 2, message: 'Lorem ipsum', img: "https://i.pinimg.com/474x/02/ec/46/02ec46578d999af49f1eb898a078eced.jpg" },
        { id: 3, message: 'asdfasdfgs', img: "https://i.pinimg.com/474x/02/ec/46/02ec46578d999af49f1eb898a078eced.jpg" },
        { id: 4, message: 'etc', img: "https://i.pinimg.com/236x/fe/be/01/febe01fff0175a10c8ada6207afa9554.jpg" },
        { id: 5, message: 'cc', img: "https://i.pinimg.com/236x/0f/3d/12/0f3d123e5066627d4f039e5d113720ba.jpg" },
    ],
    dialogsData: [
        { id: 1, name: 's0ulcat', img: "https://i.pinimg.com/236x/98/91/4c/98914cfe54f88269ff64e44812836600.jpg" },
        { id: 2, name: 'maga', img: "https://i.pinimg.com/474x/02/ec/46/02ec46578d999af49f1eb898a078eced.jpg" },
        { id: 3, name: 'biden', img: "https://i.pinimg.com/236x/66/09/da/6609da9ce2f30496520a6ad6d4cadba4.jpg" },
        { id: 4, name: 'maslina', img: "https://i.pinimg.com/236x/fe/be/01/febe01fff0175a10c8ada6207afa9554.jpg" },
        { id: 5, name: 'dfdf', img: "https://i.pinimg.com/236x/0f/3d/12/0f3d123e5066627d4f039e5d113720ba.jpg" }
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
                img: AVA_IMG
            };
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default messagesReducer;
