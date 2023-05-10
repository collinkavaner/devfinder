import styled from "styled-components";

function UserHeader() {
    return (
        <UserHeaderMain>
            <img src="https://avatars.githubusercontent.com/u/55768790?v=4" alt="" />
            <div>
                <h3>Collin Kavaner</h3>
                <h4 className="username">@collinkavaner</h4>
                <h4>Joined 2019</h4>
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
        }
    }
`;