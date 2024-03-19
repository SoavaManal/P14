describe("Test for Home page", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/");
  });

  it("to be redirected to the employee page", () => {
    cy.contains("View Current Employees").click();
    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/employee-list");
  });

  it("not be saved if the form is not completed", () => {
    cy.contains("Save").click();
    // assertion that the modal is open
    cy.contains("Employee Created!").should("not.exist");
  });

  it("to be add the employee from employee list", () => {
    // fill in the form
    cy.get("#first-name").type("manal");
    cy.get("#last-name").type("soava");
    cy.get("#date-of-birth").click();
    cy.get("#date-of-birth").type("31/07/1991");
    cy.get(".react-datepicker__day--031").click();
    cy.get("#start-date").click();
    cy.get("#start-date").type("21/11/20");
    cy.get(".react-datepicker__day--021").click();
    cy.get("#street").type("street");
    cy.get("#city").type("city");
    cy.get("#state").select("AK");
    cy.get("#zip-code").type("75002");
    cy.get("#department").select("Marketing");

    // send the form
    cy.contains("Save").click();

    // go to the employee-list page and check if the employee is added to the list
    cy.get("._dZ5ig").click();
    cy.contains("View Current Employees").click();
    cy.contains("manal").should("exist");
    cy.contains("soava").should("exist");
  });
});
