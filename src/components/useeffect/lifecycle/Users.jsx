import { useState, useEffect } from "react";

function Users() {
    const [user, setUser] = useState([])

    useEffect(() => { getUser() },[])
    const getUser = async () => {
        var res = await fetch("https://jsonplaceholder.typicode.com/users");
        var data = await res.json();
        setUser(data);
    }
    return (
        <div>
            <h2>Users Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolor cupiditate natus, nihil maxime aliquam ipsam praesentium eius mollitia nobis quidem deserunt debitis dolorem eum nesciunt consectetur totam libero. Modi commodi doloribus tenetur ratione expedita delectus optio magnam in sequi odio asperiores ea quos harum suscipit, at quod quia sapiente corporis nobis nisi natus. Quod, quaerat deleniti vel eum aspernatur sapiente. Excepturi illum provident quaerat unde dolores dicta dolorem sequi, earum adipisci voluptatum. Illum debitis reprehenderit voluptatum esse ipsa? Aliquid animi possimus, qui nemo veniam quidem numquam repudiandae dolorem rem rerum adipisci voluptatem assumenda fuga aperiam, quaerat laudantium sequi repellendus!</p>
            <button onClick={getUser}>Get Users</button>
            {
                user.length > 0 ? <ol>
                    {user.map((ele) => {
                        return <li>{ele.name}</li>
                    })}
                </ol> : <h2>No Users Found</h2>
            }
        </div>
    );
}

export default Users