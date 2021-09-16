//Test suite for Add Examination Event
describe('018_Visual_Function__Pupils_DI', () => {
    
    
  //Pupils under Visual Function.
  it('18.01_Visual_Function__Pupils', () => {

    //To get the Medication_History element
    cy.get("#js-manage-elements-btn").should('be.visible').click()
    //CLick on Pupils
    cy.get("#manage-elements-Pupils").should('be.visible').click()
    //CLick on "Select elements to add or remove from examination - Close when done"
    cy.get(".blue.hint.cols-full").should('be.visible').click()
    
  })
  
  it('18.02__To_Validate_Visual_Acuity_Section_is_Available', () => {
    //To_Validate_Pupils_Section_is_Available.
    cy.get("[data-element-type-name='Pupils'] > header > h3").scrollIntoView().should('be.visible')
    cy.get("[data-element-type-name='Pupils'] > header > h3").should('be.visible').should('contain',"Pupils")
    
    })
       
  //to delete existing items
  it('18.03_to delete existing items', () => {

    cy.get('body').then(($body) => {
      const cnt = $body.find('#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_has_abnormality + td + td > i').length

      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_has_abnormality + td + td > i").should('be.visible').click()
        cy.wait(1000)

      }
    })

    cy.get('body').then(($body) => {
      const cnt = $body.find('#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_has_abnormality + td + td > i').length

      var i;
      for(i = 0; i <= cnt-1; i++)
      {
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_has_abnormality + td + td > i").should('be.visible').click()
        cy.wait(1000)

      }
    })




  }) 
 
  //For Right Side section
  it('18.03_Click on Add button from Right Side section', () => {
    //Click on Add button.
    cy.get("#add-abnormality-btn-right").should('be.visible').click()
    
  })

  it('18.04_Click on Element from Right side List', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Click on an Element from Right side list.
      cy.get("#pupillary_abnormalities_list_right").should('be.visible').contains(visualfunctions.pupils_list_items_R).click()
      
      })
    })

  it('18.05_Click on Click to add button', () => {
    //Click on Click to add button.
    cy.get("#history-abnormality-popup-right > div > div + div").should('be.visible').contains('Click to add').click()
                
    })

  it('18.06_Add Comments for Right eye', () => {
    cy.fixture("visualfunctions.json").then((visualfunctions) => {
      //Add Comments for Right eye  
      cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_comments_button").should('be.visible').click()
      
      cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_3_comments").should('be.visible').clear().type(visualfunctions.pupils_comments_R)
      
      })
    })
    
  it('18.07_Click on radio button RAPD at Right side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_0_has_abnormality").should('be.visible').contains(visualfunctions.RAPD_R).click()
        
        })
      })
      
  it('18.08_Click on radio button Poor Dilator at Right side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_1_has_abnormality").should('be.visible').contains(visualfunctions.Poor_Dilator_R).click()
        
        })
       })
       
    
  it('18.09_Click on radio button PEARL at Right side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_right_2_has_abnormality").should('be.visible').contains(visualfunctions.PEARL_R).click()
        
        })
     })


    //For Left Side section
    //-----------------------
  it('18.10_Click on Add button at left side', () => {
      //Click on Add button at left side.
      cy.get("#add-abnormality-btn-left").should('be.visible').click()
      
      })
  
  it('18.11_Click on Element from List at left side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
      //Click on an Element from list at left side.
      cy.get("[data-id='pupillary_abnormalities_list_left']").should('be.visible').contains(visualfunctions.pupils_list_items_L).click()
      
      })
    })
  
  it('18.12_Click on "Click to add" button at left side', () => {
      //Click on Click to add button.
      cy.get("#history-abnormality-popup-left > div > div + div").should('be.visible').contains('Click to add').click()
                 
      })
  
  it('18.13_Add Comments for left eye at left side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {
        //Verify Verify text  
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_comments_button").should('be.visible').click()
        
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_3_comments").should('be.visible').clear().type(visualfunctions.pupils_comments_L)
        
        })
      })
    
  it('18.14_Click on radio button RAPD at left side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_0_has_abnormality").should('be.visible').contains(visualfunctions.RAPD_L).click()
        
        })
      })
      
  it('18.15_Click on radio button Poor Dilator at left side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_1_has_abnormality").should('be.visible').contains(visualfunctions.Poor_Dilator_L).click()
        
        })
       })
       
    
  it('18.16_Click on radio button PEARL at left side', () => {
      cy.fixture("visualfunctions.json").then((visualfunctions) => {  
        //Click on an Element from list at left side.
        cy.get("#OEModule_OphCiExamination_models_PupillaryAbnormalities_entries_left_2_has_abnormality").should('be.visible').contains(visualfunctions.PEARL_L).click()
        
        })
     })
      
    })


