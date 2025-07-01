import './send-button.css';

const SendButton = (props) => {
    return (
        <button className="send-button">
            {props.children} 
        </button>
    );
}

export default SendButton;