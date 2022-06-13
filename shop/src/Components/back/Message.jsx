import { useContext } from "react"
import BackContext from "../../Contexts/BackContext"

function Message() {

    const {message} = useContext(BackContext);

    if (!message.show) {
        return null;
    }

    return (
        <div className="message-bin">
            <div className={'alert alert-' + message.type} role="alert">
                {message.text}
            </div>
        </div>
    )
}

export default Message;