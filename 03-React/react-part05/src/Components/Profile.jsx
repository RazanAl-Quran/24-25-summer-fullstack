import { useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();

  return <h2>👤 Profile Page for <strong>{username}</strong></h2>;
}

export default Profile;
