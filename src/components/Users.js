
const Users = ({ data }) => {


    const { name, email, login, location, bio, avatar_url } = data ||{}

    return (
        <div className="userscard">
            {avatar_url && (
                <img
                    className="user-avatar"
                    src={avatar_url}
                    alt={`${login || name || "user"} avatar`}
                />
            )}
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h3>{login}</h3>
            <h3>{location}</h3>
            <p>{bio}</p>
        </div>
    );
};

export default Users;

