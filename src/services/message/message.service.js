import {randomTime} from "../../utils/rand";

let id = 0;
export class MessageService {


    getId() {
        return ++id;
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
        const timeout = randomTime(1000, 3000);
        return new Promise(res => setTimeout(() => res(id), timeout));
    }

}
