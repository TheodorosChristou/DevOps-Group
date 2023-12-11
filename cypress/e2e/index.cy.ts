describe("Index Page Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080");
    });

    it("checks that the page title is shown", () => {
        cy.get("[data-test='title']").should("exist");
    });

    it("Checks that lat, lon, city, description, edit button and delete button values are shown", () => {
        cy.get("[data-test='lat-values']").should("exist");
        cy.get("[data-test='lon-values']").should("exist");
        cy.get("[data-test='city-values']").should("exist");
        cy.get("[data-test='desc-values']").should("exist");
        cy.get("[data-test='delete-button']").should("exist");
        cy.get("[data-test='edit-button']").should("exist");
    });

    it("checks the cookie popup", () => {
        cy.get('.my-10').should("exist");
        cy.get('.my-10 > .flex > :nth-child(2)').click();
        cy.get('.my-10').should("not.be.visible");
    });

    it("checks the update page", () => {
        /** goes to the update page for first item in list */
        cy.get(':nth-child(3) > .w-full > tbody > .flex-col > [data-test="edit-button"] > .bg-sky-400').should("exist");
        cy.get(':nth-child(3) > .w-full > tbody > .flex-col > [data-test="edit-button"] > .bg-sky-400').click();


    /** gets rid of the cookie popup */
        cy.get('.my-10').should("exist");
        cy.get('.my-10 > .flex > :nth-child(2)').click();
        cy.get('.my-10').should("not.be.visible");

        /** tests for the update form */
        
        cy.get("[data-test='image-upload']").should("exist");
        cy.get("[data-test='lat-input']").should("exist");
        cy.get("[data-test='lon-input']").should("exist");
        cy.get("[data-test='city-input']").should("exist");
        cy.get("[data-test='desc-input']").should("exist");
        cy.get("[data-test='submit-button']").should("exist");
    });
    
});

export {};