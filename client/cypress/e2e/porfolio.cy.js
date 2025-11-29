describe("Portfolio Website E2E Test", () => {
  // Runs before every test
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Loads the Home Page", () => {
    cy.contains("JD").should("exist");      // your logo/brand
  });

  it("Navigates to Contact Page", () => {
    cy.contains("Contact").click();         // Click Contact in nav
    cy.url().should("include", "/contact");

    // Contact heading
    cy.contains("GET IN TOUCH").should("exist");
  });

  it("Fills the Contact Form", () => {
    cy.visit("http://localhost:5173/contact");

    cy.get("#name").type("Test User");
    cy.get("#email").type("test@example.com");
    cy.get("#phone").type("1234567890");
    cy.get("#message").type("This is a Cypress test message.");

    cy.contains("Send").should("exist");
  });

  it("Navigates to Education Page", () => {
    cy.contains("Education").click();
    cy.url().should("include", "/education");

    cy.contains("My Education").should("exist");
  });

  it("Visits Signup Page", () => {
    cy.contains("Sign Up").click();
    cy.url().should("include", "/signup");

    cy.contains("Sign Up").should("exist");
  });
});


