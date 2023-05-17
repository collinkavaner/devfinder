import styled from "styled-components";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";
import UserLinks from "./UserLinks";

function UserProfile({ userData, theme }) {

    return (
        <UserProfileMain>
            { !userData.message ? (
            <>
                <img className="user-image" src={userData.avatar_url} alt={userData.name} />
                <div className="main-content">
                    <UserHeader userData={userData} theme={theme} />
                    { userData.bio === null ? (
                        <p className="not-available">This profile has no bio.</p>
                    ) : <p>{userData.bio}</p> }
                    <UserStats userData={userData} theme={theme} />
                    <UserLinks userData={userData} theme={theme} />
                </div>
            </>
            ) : (<p className="not-found">User {userData.message}</p>)}
        </UserProfileMain>
    );
}

export default UserProfile;

const UserProfileMain = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 15px;
    border-radius: 15px;
    padding: 30px 20px;
    background-color: ${({ theme }) => theme.bgSecondary};
    box-shadow: ${({ theme }) => theme.dropShadow};
    transition: background 0.2s ease-in, box-shadow 0.2s ease-in;

    .main-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .user-image {
        display: none;
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .not-found {
        color: #F74646;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        padding: 40px;
        margin-top: 25px;

        .main-content {
            gap: 30px;
        }
    }

    @media (min-width: 1024px) {
        padding: 48px;

        .user-image {
            display: block;
        }
    }

`;