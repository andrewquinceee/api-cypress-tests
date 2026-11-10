const USERS = "/users";

Cypress.Commands.add("createUser", (user) => {
  return cy.request("POST", USERS, user);
});

Cypress.Commands.add("getUser", (id) => {
  return cy.request({ url: `${USERS}/${id}`, failOnStatusCode: false });
});

Cypress.Commands.add("updateUser", (id, user) => {
  return cy.request({
    method: "PUT",
    url: `${USERS}/${id}`,
    qs: { firstName: user.firstName, surName: user.surName },
  });
});

Cypress.Commands.add("deleteUser", (id) => {
  return cy.request({
    method: "DELETE",
    url: `${USERS}/${id}`,
    failOnStatusCode: false,
  });
});
