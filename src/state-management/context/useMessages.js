import {useContext} from "react";
import {MessagesContext} from "./context";


export const useMessages = () => {
    return useContext(MessagesContext);
}
