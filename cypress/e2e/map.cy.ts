describe("Map Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/map");
    });

    it("checks the map is shown", () => {

        cy.get(".leaflet-container").should("exist");
    });

    
});

export {};