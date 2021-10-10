//Test script for Freehand Draw element
describe('0255_Freehand_Draw_Element_DI', () => {

    //Add the Freehand Draw element
    it('0255.1_To_Add_Freehand_Draw_Element' , () => {
      cy.get("#js-manage-elements-btn").should('be.visible').click()

      cy.get('body').then((body) => {
    
          if (body.find('#manage-elements-Freehand-draw[class="added"]').length == 0)
          {
            cy.get('#manage-elements-Freehand-draw').should('be.visible').click()
          }
    
      })
    
      cy.get(".blue.hint.cols-full").should('be.visible').click()

    })

    //Verify that Freehand_Draw element is loaded successfully
    it('0255.2_To_Validate_Freehand_Draw_Section_isAvailable' , () => {
      cy.get('[data-element-type-name="Freehand draw"] > header > h3').scrollIntoView().should('be.visible')
      cy.get('[data-element-type-name="Freehand draw"] > header > h3').should('be.visible').should('contain', 'Freehand draw')
    })

      //Add and verify the Freehand_Draw details and values
    it('0255.3_To_Add_And_Verify_Freehand_Draw_Image_1' , () => {
      cy.get('#show-add-template-popup').should('be.visible').click()

      //Add details
      cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
        cy.get('[data-element-type-name="Freehand draw"] > div > div > div > table > tbody > tr > td > div > div > ul').contains(investigation.Freehand_Draw_Category_1).click()

        //Click the button to close the popup, post the selections made on the popup window
        cy.get('[data-element-type-name="Freehand draw"] > div > div > div > div + div').should('be.visible').click()
      })
    })

      //Add and verify the Freehand_Draw details and values
      it('0255.4_Verify_Category_Image_1' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          if (investigation.Freehand_Draw_Category_1 == "Blepharospasm")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/10')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Conjunctiva")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/11')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Examination anterior segment")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/12')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Examination fundus")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/13')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Eye movements")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/14')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Head and neck")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/15')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Lids")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/16')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Macula")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/17')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Oncology anterior segment")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/18')
          }
          else if (investigation.Freehand_Draw_Category_1 == "Oncology fundus")
          {
            cy.get('#js-img-preview-0').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/19')
          }
        })
      })
  
      //Add and verify the Freehand_Draw details and values
      it('0255.5_Verify_Category_Text_Image_1' , () => {

        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            cy.get('#annote-template-view-0 > div > table > tbody > tr > td').should('be.visible').should('contain',investigation.Freehand_Draw_Category_1)
        })
      })

      //Add and verify the Freehand_Draw details and values
      it('0255.6_Add_Comments_Image_1' , () => {
        cy.get('#annote-template-view-0 > div > table > tbody > tr + tr > td + td > button').eq(0).scrollIntoView().should('be.visible')
        cy.get('#annote-template-view-0 > div > table > tbody > tr + tr > td + td > button').eq(0).should('be.visible').click()
        
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            cy.get('#comments-field-0').should('be.visible').clear().type(investigation.Freehand_Draw_Comments_1)
        })
      })

      //Add and verify the Freehand_Draw details and values
      it('0255.7_Verify_Annotate_Image_1' , () => {
        cy.get('#annote-template-view-0 > div > table > tbody > tr + tr + tr > td + td').scrollIntoView().should('be.visible')
        cy.get('#annote-template-view-0 > div > table > tbody > tr + tr + tr > td + td').should('be.visible').click()
        
      })

      it('0255.8_Save_Annotation_Button_Image_1' , () => {
        cy.get('#annotate-wrapper-0 > div > table > tbody > tr + tr + tr > td + td > button').eq(0).scrollIntoView().should('be.visible')
        cy.get('#annotate-wrapper-0 > div > table > tbody > tr + tr + tr > td + td > button').eq(0).should('be.visible')
        
      })

      it('0255.9_Clear_Cancel_Annotations_Button_Image_1' , () => {
        cy.get('#annotate-wrapper-0 > div > table > tbody > tr + tr + tr > td + td > button').eq(1).scrollIntoView().should('be.visible')
        cy.get('#annotate-wrapper-0 > div > table > tbody > tr + tr + tr > td + td > button').eq(1).should('be.visible').click()
        
      })
  
      //Add and verify the Freehand_Draw details and values
      it('0255.10_To_Add_And_Verify_Freehand_Draw_Image_2' , () => {
        cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
          if (investigation.Freehand_Draw_Category_2 != "")
          {
            cy.get('#show-add-template-popup').should('be.visible').click()
  
            //Add details
            cy.get('[data-element-type-name="Freehand draw"] > div > div > div > table > tbody > tr > td > div > div > ul').contains(investigation.Freehand_Draw_Category_2).click()
      
            //Click the button to close the popup, post the selections made on the popup window
            cy.get('[data-element-type-name="Freehand draw"] > div  + div > div + div + div > div > div + div').should('be.visible').click()
          }
        })
      })

      //Add and verify the Freehand_Draw details and values
        it('0255.11_Verify_Category_Image_2' , () => {
          cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if (investigation.Freehand_Draw_Category_2 == "Blepharospasm")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/10')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Conjunctiva")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/11')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Examination anterior segment")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/12')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Examination fundus")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/13')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Eye movements")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/14')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Head and neck")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/15')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Lids")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/16')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Macula")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/17')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Oncology anterior segment")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/18')
            }
            else if (investigation.Freehand_Draw_Category_2 == "Oncology fundus")
            {
              cy.get('#js-img-preview-1').should('be.visible').invoke('attr','src').should('eq','/ProtectedFile/Download/19')
            }
          })
        })
    
        //Add and verify the Freehand_Draw details and values
        it('0255.12_Verify_Category_Text_Image_2' , () => {
          cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if (investigation.Freehand_Draw_Category_2 != "")
            {
              cy.get('#annote-template-view-1 > div > table > tbody > tr > td').should('be.visible').should('contain',investigation.Freehand_Draw_Category_2)
            }
          })
        })
  
        //Add and verify the Freehand_Draw details and values
        it('0255.13_Add_Comments_Image_2' , () => {
          cy.fixture("AddExaminationEvents_Investigation.json").then((investigation) => {
            if (investigation.Freehand_Draw_Category_2 != "")
            {
              cy.get('#annote-template-view-1 > div > table > tbody > tr + tr > td + td > button').eq(0).should('be.visible').click()
          
              cy.get('#comments-field-1').should('be.visible').clear().type(investigation.Freehand_Draw_Comments_2)
            }
          })
        })
  })
