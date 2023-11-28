import { AppConfig } from "../../Config";

class LoiginPage {
      launchBrowser() {
        if ("stage"===AppConfig.ENV){
            cy.visit(AppConfig.URLStaging);
        }else{
            if ( "recette"===AppConfig.ENV){
                cy.visit(AppConfig.URLRecette)

        }else {
            cy.visit(AppConfig.URLRecette);
        }
            
        }

        
      }

      UIAssertionOfLoginPage(){

        // email assertion 
        const email = cy.get("input").first();
        email.should("be.visible");
        email.should("be.empty");
        email.should("be.enabled");
        email.should("have.css","background-color","rgb(255, 255, 255)");
        email.should('have.attr', 'type', 'text');

        // password assertion 
        const password = cy.get("input").last();
        password.should("be.visible");
        password.should("be.empty");
        password.should("be.enabled");
        password.should("have.css","background-color","rgb(255, 255, 255)");
        password.should('have.attr', 'type', 'password');

        // login button assertion 
        const loginButton = cy.get("button");
        loginButton.should("be.visible");
        loginButton.should("be.enabled");
        loginButton.should("have.css","background-color","rgb(22, 119, 255)");
        loginButton.should('have.attr',"type",'submit');
        loginButton.should('contain','Sign');

      }
      EnterEmailAndPassword(email,password){
        cy.get("input").first().type(email);;
        cy.get("input").last().type(password);;
        cy.get("button").click();

      }
      LoginWithValidCredentials() {

        cy.get("#user-dropdown").should("be.visible");
        cy.url().should("not.contain","/login");
        cy.get(".logoWrap").should("be.visible");
        
      }

      FailToLogin(){
        cy.url().should("include","/login");
        cy.get(".login-page__formContainer-logo").should("be.visible");
        this.UIAssertionOfLoginPage();
    }
    
    // cette fonction pour vérifier un texte si elle existant ou pas 
      CheckText(resultText) {
        cy.contains(resultText).should("be.visible");
      }
    
    // cette fonction taper un texte dans la zone de recherche et cliquer sur rechercher 
      search(keyword) {
        cy.get("#edit-searchmeta").type(keyword);
        cy.get("#edit-submit-actualites").click();
      }
    }
    
    // on doit bien sur exporter cette page pour qu'on puisse les utliser dans le test 
    export default LoiginPage;