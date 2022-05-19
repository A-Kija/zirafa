function User2({user}) {

    return (
        <div><span>{user.firstName}</span><img src={user.image.slice(0, user.image.indexOf('?'))}></img></div>
    )
}

export default User2;