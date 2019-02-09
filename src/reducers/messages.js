import { getMessages } from '../staticData'; // generates amount passed of messages

export default (state = getMessages(10), action) => {
    return state;
}