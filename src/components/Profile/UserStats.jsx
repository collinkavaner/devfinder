import styled from "styled-components";

function UserStats() {
    return (
        <UserStatsMain>
            <div className="stat">
                <h4>Repos</h4>
                <p>2</p>
            </div>
            <div className="stat">
                <h4>Followers</h4>
                <p>1</p>
            </div>
            <div className="stat">
                <h4>Following</h4>
                <p>2</p>
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

        h4 {
            font-size: 11px;
        }

        p {
            font-size: 16px;
            font-weight: bold;
        }
    }
`;