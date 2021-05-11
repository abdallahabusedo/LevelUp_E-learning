import UserProfile from "./../../components/profile/UserProfile";
import { database, auth } from "./../../services/firebase";

const Profile = () => {
 

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
