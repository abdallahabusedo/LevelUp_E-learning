import { userData } from "../../services/Authentication";
import UserProfile from "./../../components/profile/UserProfile";
const Profile = () => {
  console.log(userData);
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
