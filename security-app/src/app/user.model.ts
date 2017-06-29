/**
 * Created by gadyezra on 6/29/17.
 */
export class User {
  _id: String;
  user_name: String;
  password: String;
  email: String;
  first_name: String;
  last_name: String;
  settings = {
    login_alerts: Boolean,
    recognized_devices: [String],
    phone_to_aproove_password_change: String
  };

  constructor() {
  }
}

