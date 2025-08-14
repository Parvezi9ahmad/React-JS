import Name from "./Name";
import Details from "./Details";
import City from "./City";
function ReduxHome() {
    return (
        <div>
            <div className='subAppContainer'>
                <Name />
                <City />
            </div><hr />
            <Details />

        </div>
    );
}

export default ReduxHome