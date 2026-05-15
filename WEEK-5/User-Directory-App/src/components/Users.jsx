function Users(props){
    let {user} = props;
    return(
        <div className="text-center p-5 shadow-2xl rounded-2xl shadow-gray-700 ring-2 ring-blue-950 bg-gray-100 ">
            <h2 className="text-3xl text-blue-800">{user.name}</h2>
            <p className="font-bold mt-5">{user.email}</p>
            <img className="block mx-auto rounded-4xl mt-5 ring-2 ring-blue-950" src={user.image} alt="" />
        </div>
    )
}
export default Users;