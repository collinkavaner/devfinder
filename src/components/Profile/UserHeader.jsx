import styled from "styled-components";

function UserHeader({ userData }) {
    return (
        <UserHeaderMain>
            <img src={userData.avatar_url} alt={userData.name} />
            <div>
                <div className="name-date">
                    <h1>{userData.name}</h1>
                    <p className="desktop-join-date">Joined {new Date(userData.created_at).toLocaleDateString("en-US", { dateStyle: "medium" })}</p>
                </div>
                <h3>
                <a className="username" href={userData.html_url} target="_blank">{userData.login}</a>
                </h3>
                <p className="join-date">Joined {new Date(userData.created_at).toLocaleDateString("en-US", { dateStyle: "medium" })}</p>
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
        gap: 2px;

        h1 {
            font-weight: bold;
        }

        .name-date {
            min-width: 100%;
        }
        .desktop-join-date {
            display: none;
        }

        .join-date {
            display: block;
        }

        .username {
            font-size: 13px;
            color: #0079FF;
            text-decoration: none;
        }
    }

    @media (min-width: 768px) {
        gap: 30px;

        img {
            width: 120px;
            height: 120px;
        }

        div {
            gap: 5px;

            .username {
                font-size: 16px;
            }
        }
    }

    @media (min-width: 1024px) {
        img {
            display: none;
        }

        div {
            .name-date {
                min-width: 500px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }

            .desktop-join-date {
                display: block;
            }

            .join-date {
                display: none;
            }
        }
    }
`;