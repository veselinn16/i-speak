import { generateUser } from '../staticData'; // returns a user object

export default function user(state = generateUser(), action) {
    return state;
}