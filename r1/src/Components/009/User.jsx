function User({user}) {

    return (
        <div><span>{user.name}</span> <i>{user.company.name}</i></div>
    )
}

export default User;