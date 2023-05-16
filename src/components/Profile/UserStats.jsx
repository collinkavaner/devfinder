import styled from "styled-components";

function UserStats({ userData }) {
    return (
        <UserStatsMain>
            <div className="stat">
                <h4>Repos</h4>
                <h2>{userData.public_repos}</h2>
            </div>
            <div className="stat">
                <h4>Followers</h4>
                <h2>{userData.followers}</h2>
            </div>
            <div className="stat">
                <h4>Following</h4>
                <h2>{userData.following}</h2>
            </div>
        </UserStatsMain>
    );
}

export default UserStats;

const UserStatsMain = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #141D2F;

    .stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        h2 {
            font-weight: 900;
        }
    }

    @media (min-width: 768px) {
        justify-content: space-between;
        padding-right: 100px;
        padding-left: 45px;

        .stat {
            align-items: flex-start;
        }

    }
`;