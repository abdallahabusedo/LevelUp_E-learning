import UserProfile from "../../components/UserProfile";
import {userData} from '../../services/Authentication';

const Profile = () => {
  console.log(userData);
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <UserProfile />
      </div>
    </div>
  );
}

export default Profile;
