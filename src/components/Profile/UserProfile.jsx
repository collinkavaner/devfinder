import styled from "styled-components";
import { FaBuilding } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";

function UserProfile({ userData }) {

    return (
        <UserProfileMain>
            { !userData.message ? (
            <>
                <UserHeader userData={userData} />
                <p>
                    {userData.bio}
                </p>
                <UserStats userData={userData} />
                <ul>
                    <li className={userData.location === null && "not-available"}><FaMapMarkerAlt className="icon-size" />
                    {
                        userData.location === null ? "Not Available" : userData.location
                    }</li>
                    <li className={userData.blog === '' && "not-available"}><FaLink className="icon-size" />
                    {
                        userData.blog === '' ? "Not Available" : userData.blog
                    }</li>
                    <li className={userData.twitter_username === null && "not-available"}><FaTwitter className="icon-size" />
                    {
                        userData.twitter_username === null ? "Not Available" : userData.twitter_username
                    }</li>
                    <li className={userData.company === null && "not-available"}><FaBuilding className="icon-size" />
                    {
                        userData.company === null ? "Not Available" : userData.company
                    }</li>
                </ul>
            </>
            ) : (<p className="not-found">User {userData.message}</p>)}
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
    }

    .not-available {
        color: #8B949E;
        fill: #8B949E;
    }

    .not-found {
        color: #F74646;
        font-weight: bold;
    }

    .icon-size {
        width: 20px;
        height: 20px;
    }

`;