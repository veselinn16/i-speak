import { getMessages } from '../staticData'; // generates amount passed of messages
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

export default (state = getMessages(10), action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const { message, userId} = action.payload; // get userId and message from dispatched action
            const allUserMsgs = state[userId]; // all messages of the user. STATE IS NOT THE OVERALL STATE, but only the messages key of it
            const number = +_.keys(allUserMsgs).pop() + 1; // returns an array of all the keys of the user's messages; .pop() gets the last item of the array (the highest number) and increments it by 1 - the number of the new message

            return {
                ...state, // the previous messages
                [userId]: { // grab the message via user's id
                    ...allUserMsgs, // the previous messages of the user
                    [number]: { // add new message object with previously computed number
                        number, 
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        default:
            return state;
    }
}