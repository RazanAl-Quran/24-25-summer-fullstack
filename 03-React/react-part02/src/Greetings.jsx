const Greetings = (props) => {
    return (
        <div>
            <h1>hello {props.username} from Greetings</h1>
            <h1>your breed is {props.breed}</h1>
        </div>
    );
}

export default Greetings;

// const Greetings = ({username,breed}) => {
//     return (
//         <div>
//             <h1>hello {username} from Greetings</h1>
//             <h1>your breed is {breed}</h1>
//         </div>
//     );
// }

// export default Greetings;

