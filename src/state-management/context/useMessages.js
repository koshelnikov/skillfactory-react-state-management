import {useContext} from "react";
import {MessagesContext} from "./provider";


export const useMessages = () => {
    return useContext(MessagesContext);
}
