import styled from "styled-components";
import locationIconSource from "../../assets/location.svg";
import urlIconSource from "../../assets/url.svg";
import twitterIconSource from "../../assets/twitter.svg";
import officeIconSource from "../../assets/office-building.svg";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";

function UserProfile() {
    return (
        <UserProfileMain>
            <UserHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </p>
            <UserStats />
            <ul>
                <li><img src={locationIconSource} alt=""></img>Waterloo, ON</li>
                <li><img src={urlIconSource} alt=""></img>website</li>
                <li><img src={twitterIconSource} alt=""></img>twitter</li>
                <li><img src={officeIconSource} alt=""></img>company</li>
            </ul>
        </UserProfileMain>
    );
}

export default UserProfile;

const UserProfileMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 15px;
    border-radius: 15px;
    padding: 30px 20px;
    background-color: #1E2A47;

    p {
        font-size: 13px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 13px;
    }

    li {
        display: flex;
        align-items: center;
        gap: 15px;

        img {
            width: 20px;
            height: 20px;
        }
    }

`;