describe("Index Page Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080");
    });

    it("checks that the page title is shown", () => {
        cy.get("[data-test='title']").should("exist");
    });

    it("Checks that lat and lon values are shown", () => {
        cy.get("[data-test='lat-lon-values']").should("exist");
        cy.get("[data-test='lat-lon-values']").should("have.length", 14);
        cy.get("[data-test='lat-lon-values']").contains("51.5072");
    });

    
});

export {};