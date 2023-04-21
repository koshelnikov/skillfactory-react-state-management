import {randomTime} from "../../utils/rand";

let id = 0;
export class MessageService {

    getId() {
        return ++id;
    }

    resetId() {
        id = 0;
    }

    getMessage() {
        const timeout = randomTime(1000, 5000);
        return new Promise(res => setTimeout(() => {
            const id = this.getId();
            res({
               id,
               message: `Message ${id}`
           })
       }, timeout));
    }

    markAsRead(id) {
        const timeout = randomTime(300, 1500);
        return new Promise(res => setTimeout(() => res(id), timeout));
    }

}
