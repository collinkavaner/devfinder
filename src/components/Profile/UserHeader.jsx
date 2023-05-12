import styled from "styled-components";

function UserHeader({ userData }) {
    return (
        <UserHeaderMain>
            <img src={userData.avatar_url} alt={userData.name} />
            <div>
                <h3>{userData.name}</h3>
                <h4 className="username">
                <a className="username" href={userData.html_url} target="_blank">{userData.login}</a></h4>
                <h4>Joined {new Date(userData.created_at).getFullYear()}</h4>
            </div>
        </UserHeaderMain>
    );
}

export default UserHeader;

const UserHeaderMain = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        h3 {
            font-weight: bold;
        }

        .username {
            color: #0079FF;
            text-decoration: none;
        }
    }
`;