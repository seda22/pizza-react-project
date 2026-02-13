describe("Pizza Sipariş SPA", () => {

 beforeEach(() => {
  cy.visit("http://localhost:5173")
  cy.contains("ACIKTIM").click()
})

  it("isim inputuna yazı yazılır", () => {
    cy.get('input[name="name"], input[name="isim"]')
      .type("Seda")
      .should("have.value", "Seda")
  })

  it("birden fazla malzeme seçilir", () => {
    cy.get('input[type="checkbox"]').eq(0).check()
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="checkbox"]').eq(2).check()
    cy.get('input[type="checkbox"]').eq(3).check()

    cy.get('input[type="checkbox"]:checked')
      .should("have.length.at.least", 4)
  })

  it("geçerli form gönderilir", () => {

  // isim
  cy.get('input[name="name"], input[name="isim"]').type("Seda QA")

  // BOYUT S M L
  cy.contains("Boyut Seç").parent().contains("M").click()


  // HAMUR select (varsa)
  cy.get("select").select("Orta")

  // MALZEME seçimleri
  cy.contains("Sucuk").click()
  cy.contains("Sosis").click()
  cy.contains("Biber").click()
  cy.contains("Soğan").click()

  // SUBMIT
  cy.contains("SİPARİŞ VER").click()

  // success sayfası kontrol
  cy.contains("ALINDI").should("exist")



})


})
