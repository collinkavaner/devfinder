import styled from "styled-components"
import { FaBuilding } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function UserLinks({ userData }) {
    return (
        <UserLinksMain>
            <article>
                <div className={userData.location === null ? "not-available" : ""}><FaMapMarkerAlt className="icon-size" />
                <p>{
                    userData.location === null ? "Not Available" : userData.location
                }</p></div>
                <div className={userData.blog === '' ? "not-available" : ""}><FaLink className="icon-size" />
                <p>{
                    userData.blog === '' ? "Not Available" : userData.blog
                }</p></div>
                <div className={userData.twitter_username === null ? "not-available" : ""}><FaTwitter className="icon-size" />
                <p>{
                    userData.twitter_username === null ? "Not Available" : userData.twitter_username
                }</p></div>
                <div className={userData.company === null ? "not-available" : ""}><FaBuilding className="icon-size" />
                <p>{
                    userData.company === null ? "Not Available" : userData.company
                }</p></div>
            </article>
        </UserLinksMain>
    )
}

export default UserLinks

const UserLinksMain = styled.div`

    article {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0;
        margin: 0;

        div {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }

    .icon-size {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 768px) {
        article {
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 10px;

            div {
                min-width: 40%;
            }
        }
    }

`;