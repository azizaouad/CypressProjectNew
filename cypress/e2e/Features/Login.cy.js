///<reference types="cypress"/> 

import { AppConfig } from "../../../Config";
import LoiginPage from "../../PagesObjectModel/LoginPage";
let LP ;
beforeEach(()=>{
    LP = new LoiginPage();
    LP.launchBrowser()

})


describe("loginFeature",()=>{
    it ("UI",()=>{
        LP.UIAssertionOfLoginPage();
    })
    it("User login with valid credentials",()=>{
        LP.EnterEmailAndPassword(AppConfig.emailPhotographe,AppConfig.mdp);
        LP.LoginWithValidCredentials();
    })
    const credentials = [
        ["azizaouadi12@gmail.com", "Admin1234!"],
        ["kkkkkk@gmail.com", "Admin123!"],
        ["looooooool@gmail.com", "Admin123456789!"],
        [" "," "],
        ["aziz@gmail.com"," "],
        [" ","Admin123!"],
      ];
    
      credentials.forEach(([email, password]) => {
        it("should login with invalid credentials", () => {
          LP.EnterEmailAndPassword(email, password);
          LP.FailToLogin();
        });
      });
})