import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
-----------------------
Step-1:Initial setup
1.firebase:create project
2.create web app
3.get configuration
4.initialize firebase
5.Enable auth method

-------------------------------
step-2:setup component
1.Create Login Component
2.create register component
3.create Route for Login and Register


--------------------------------
step:3 set auth system
1.set up sign in method
2.setup sign out method
3.user state
4.special observer
5.export return necessary methods and states from useFirebase
----------------------------------

step:4:create auth context hook(useAuth)
1.create a auth context
2.create context provider
3.set context Provider context value
4.use Auth Provider
5.create useAuth Hook
------------------------
step:5:create private route
1.create private Route
2.set Private route

--------------------------
step:6 (optional) Redirect after login
1.after login redirect user to their desired destination
*/