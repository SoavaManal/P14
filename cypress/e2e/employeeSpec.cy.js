describe("Test for Employee pages", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/employee-list");
  });
  it("to search in the table", () => {
    cy.get("#searchInput").type("sales");

    cy.get('[headers="department"]').each(($element) => {
      expect($element.text()).to.equal("Sales");
    });
  });
  it("to display a fixed number on the table row", () => {
    cy.get("#entries").select("6");
    cy.get("tbody tr").should("have.length.at.most", 6);
  });
});

// $0.validity Entrer => attribut caché
