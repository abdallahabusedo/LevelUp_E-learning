import firebase from "../services/firebase";

const db = firebase.ref("/users");
var user = firebase.auth().currentUser;
class TutorialDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.push(tutorial);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}
export default new TutorialDataService();
export default user;