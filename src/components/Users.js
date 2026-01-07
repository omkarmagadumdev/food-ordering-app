

const Users = ({ data }) => {


    const { name, email, login, location, bio, avatar_url } = data ||{}

    return (
        <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-lg grid gap-2 max-w-md">
            {avatar_url && (
                <img
                    className="w-28 h-28 rounded-full object-cover border-2 border-neutral-100"
                    src={avatar_url}
                    alt={`${login || name || "user"} avatar`}
                />
            )}
            <h2 className="text-xl font-bold">{name}</h2>
            {email && <h3 className="text-neutral-600">{email}</h3>}
            {login && <h3 className="text-neutral-600">{login}</h3>}
            {location && <h3 className="text-neutral-600">{location}</h3>}
            {bio && <p className="text-neutral-700">{bio}</p>}
        </div>
    );
};

export default Users;

