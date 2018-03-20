describe("FAQ", function() {
  it("Affiche les resultats", function() {
    cy.visit("/");
    cy.get(".bloc--results-title").should("contain", "Toutes les questions : 55 résultats");
    cy.get(".bloc--resultats > div").should("have.length", 55);
  });
  it("Filtre les resultats par mot-clé", function() {
    cy.visit("/");
    cy.get("input").type("boulang");
    cy.get(".bloc--results-title").should("contain", 'recherche de "boulang" : 8 résultats');
    cy.get(".bloc--resultats > div").should("have.length", 8);
  });
  it("Filtre les resultats par branche", function() {
    cy.visit("/");
    cy
      .get(".bloc--branches")
      .find("div")
      .contains("Bâtiment")
      .click();

    cy.get(".bloc--results-title").should("contain", "BÂTIMENT : 6 résultats");
    cy.get(".bloc--resultats > div").should("have.length", 6);
  });
  it("Filtre les resultats par thème", function() {
    cy.visit("/");
    cy
      .get(".bloc--themes")
      .find("div")
      .contains("Durée du travail")
      .click();
    cy.get(".bloc--results-title").should("contain", "DURÉE DU TRAVAIL : 11 résultats");
    cy.get(".bloc--resultats > div").should("have.length", 11);
  });
});
