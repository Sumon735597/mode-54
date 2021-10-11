import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializefirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializefirebase;





/* {step for authentication}
-------------------------------------------
-----------------------------------
Initial SetUp
1.Firebase : create project
2.create web app
3.get configuartion
4.initialize firebase
5.Enable auth method

setp 2: setup component
1.Create login Component
2.Create Register Component
3.Create Route for login and Register


step 3:set auth sysytem

1.set up sign in method
2.setup sign out method
3.user state
4.special observe
5.return  necessary mehods and states from useFirebase

setp4.create auth context hook(useAuth)
1.create a auth contex
2.create contex provider
3.set context provider context value
3.use auth provider
4.create useAuth hook
---------------------------
<step-5> create private route
1.create private Route
2.set private route
</step-5>
















*/