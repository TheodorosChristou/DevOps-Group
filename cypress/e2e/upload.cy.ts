describe("Upload Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/upload");
    });

    it("checks the form is shown", () => {

        cy.get("[data-test='upload-form']").should("exist");
    });

    it("prevents a in-valid from from being submitted", () => {

        cy.getByData("lat-error").should("be.empty");
        cy.getByData("lon-error").should("be.empty");
        cy.getByData("city-error").should("be.empty");
        cy.getByData("desc-error").should("be.empty");


        cy.getByData("submit-button").click();
        cy.getByData("lat-error").should("not.be.empty");
        cy.getByData("lon-error").should("not.be.empty");
        cy.getByData("city-error").should("not.be.empty");
        cy.getByData("desc-error").should("not.be.empty");

      });

      it("removes errors when correct values are entered and creates new location", () => {
        cy.getByData("submit-button").click();
        cy.getByData("lat-input").type("0.3");
        cy.getByData("lat-error").should("be.empty");

        
        cy.getByData("lon-input").type("2.5");
        cy.getByData("lon-error").should("be.empty");

        cy.getByData("city-input").type("test");
        cy.getByData("city-error").should("be.empty");

        cy.getByData("desc-input").type("test");
        cy.getByData("desc-error").should("be.empty");

        cy.getByData("submit-button").click();

      });

    
});

export {};