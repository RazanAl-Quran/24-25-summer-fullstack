const Greetings = (props) => {
    return (
        <div>
            <h1>hello {props.username} from Greetings</h1>
            <h1>your breed is {props.breed}</h1>
        </div>
    );
}

export default Greetings;
