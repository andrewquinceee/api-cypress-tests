describe("API: пользователи", () => {
  beforeEach(function () {
    cy.fixture("users").as("users");
  });

  it("создаёт пользователя", function () {
    cy.createUser(this.users.newUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(this.users.newUser);
      expect(response.body.id).to.be.a("number");

      cy.getUser(response.body.id).its("body").should("include", this.users.newUser);
      cy.deleteUser(response.body.id);
    });
  });

  it("изменяет пользователя", function () {
    cy.createUser(this.users.newUser).then(({ body }) => {
      cy.updateUser(body.id, this.users.updatedUser).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include(this.users.updatedUser);
      });

      cy.getUser(body.id).its("body").should("include", this.users.updatedUser);
      cy.deleteUser(body.id);
    });
  });

  it("удаляет пользователя", function () {
    cy.createUser(this.users.newUser).then(({ body }) => {
      cy.deleteUser(body.id).its("status").should("eq", 200);
      cy.getUser(body.id).its("status").should("eq", 400);
    });
  });
});
