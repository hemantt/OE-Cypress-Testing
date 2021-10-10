describe('0110_Contacts_Element_DI', () => {
  //To add contacts element 
  it('0110.1_Select_Contacts_Element' , () => {
    cy.get("#js-manage-elements-btn").should('be.visible').click()

    cy.get('body').then((body) => {

      if (body.find('#manage-elements-Contacts[class="added"]').length == 0)
      {
        cy.get('#manage-elements-Contacts').should('be.visible').click()
      }

    })

    cy.get(".blue.hint.cols-full").should('be.visible').click()

  })

  //Verify that contacts section is loaded successfully
  it('0110.2_To_Check_Contacts_Section_IsAvailable' ,() => {
    cy.get('[data-element-type-name="Contacts"] > header > h3').scrollIntoView().should('be.visible')
    cy.get('[data-element-type-name="Contacts"] > header > h3').should('be.visible').should('contain', 'Contacts')
  
    })
//Verify the Labels
it('0110.3_To_Check_Contacts_Headers_Are_Loaded_Successfully' , () => {
  cy.get('[data-element-type-name="Contacts"] > div + div > div > h1').eq(0).should('be.visible').should('contain' , 'PAS Contacts')
  cy.get('[data-element-type-name="Contacts"] > div + div > div > h1').eq(1).should('be.visible').should('contain' , 'Patient Contacts')
  //To Verify the already added contact element - commenting on purpose
  /*cy.get('[data-element-type-name="Contacts"] > div + div > div > div > table > tbody > tr > td').eq(0).should('be.visible').should('contain' , 'General Practitioner')
  cy.get('[data-element-type-name="Contacts"] > div + div > div > div > table > tbody > tr > td + td').eq(0).should('be.visible').should('contain' , 'Dr A Who')
  cy.get('[data-element-type-name="Contacts"] > div + div > div > div > table > tbody > tr > td + td + td + td').eq(0).should('be.visible').should('contain' ,'01234567890') */

   
  cy.get('body').then(($body) => {

      const cnt = $body.find('#OEModule_OphCiExamination_models_Element_OphCiExamination_Contacts_entry_table').find('i').length
      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        $body.find('#OEModule_OphCiExamination_models_Element_OphCiExamination_Contacts_entry_table').find('i').eq(i).click()
      }
  })    

})
  
// To add contacts through click button
it('0110.4_To_Add_Contacts' , () => {
    cy.get('[data-element-type-name="Contacts"] > div + div > div + div > div > button').should('be.visible').click()
  cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
    cy.get('[data-element-type-name="Contacts"] > div + div > div + div > div > div > div + div + table > tbody > tr > td > div  > div > ul').eq(0).should('be.visible').contains(addexaminationevents.Contacts_Type_Add).click()

    // Case when contact available contact is chosen from the list
if(addexaminationevents.Contact_Type_Search_Add_Contact== "Miss Jing Straw (Consultant Ophthalmologist)")
{
    cy.get('[data-element-type-name="Contacts"] > div + div > div + div > div > div > div + div + table > tbody > tr > td > div  > div > ul').eq(1).should('be.visible').contains(addexaminationevents.Contact_Type_Search_Add_Contact).click() 
   //Click the button to close the popup, post the selections made on the popup window
   cy.get('[data-element-type-name="Contacts"]  > div + div > div + div > div  > div > div  + div').should('be.visible').click()
}
if(addexaminationevents.Contact_Type_Search_Add_Contact == "Add a new contact:")
{
    cy.get('[data-element-type-name="Contacts"] > div + div > div + div > div > div > div + div + table > tbody > tr > td > div  > div > ul').eq(1).scrollIntoView().should('be.visible').contains(addexaminationevents.Contact_Type_Search_Add_Contact).click()
    //Click the button to close the popup, post the selections made on the popup window
     cy.get('[data-element-type-name="Contacts"]  > div + div > div + div > div  > div > div  + div').should('be.visible').click()
    // Enter details in the Add a new contacts window
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(0).should('be.visible').clear().type(addexaminationevents. Contact_First_Name).click()
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(1).should('be.visible').clear().type(addexaminationevents.  Contact_Last_Name)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(2).should('be.visible').clear().type(addexaminationevents.  Contact_Email)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(3).should('be.visible').clear().type(addexaminationevents. Contact_Phone_Number)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(4).should('be.visible').clear().type(addexaminationevents. Contact_Mobile_Number)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(5).should('be.visible').clear().type(addexaminationevents. Contact_Address_Line_One)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(6).should('be.visible').clear().type(addexaminationevents. Contact_Address_Line_Two)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(7).should('be.visible').clear().type(addexaminationevents. Contact_City)
    cy.get('#country_id').should('be.visible').select(addexaminationevents. Contact_Country)
    cy.get('#js-add-new-contact-form > div + table > tbody > tr  > td + td').eq(9).should('be.visible').clear().type(addexaminationevents. Contact_Postcode)
    cy.get('#contact_label_id').should('be.visible').select(addexaminationevents. Contacts_Contacts_Type)
    
    //To click on submit button
    cy.get('#js-add-new-contact-form > table > tbody > tr + tr + tr + tr + tr + tr + tr + tr + tr + tr + tr + tr > td > input').should('be.visible').click()

}
 })
 })

it('0110.5_To_Add_Contacts_Comments' , () => {
   cy.get('[data-element-type-name="Contacts"] > div + div > div  > div > table > tbody > tr > td > span + button').should('be.visible').click()
  cy.fixture("AddExaminationEvents_History.json").then((addexaminationevents) => {
   cy.get('[data-element-type-name="Contacts"] > div + div > div  > div > table > tbody > tr > td > span > textarea').should('be.visible').clear().type(addexaminationevents.Contacts_Comments)    
 })
 })




}) 













    
