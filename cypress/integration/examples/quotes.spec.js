describe('Sign Up Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })


const username = () => cy.get('input[name="username"]')
const email = () => cy.get('input[name="primaryemail"]')
const password = () => cy.get('input[name="password"]')
const phone = () => cy.get('input[name="phone"]')
const submitButton = () => cy.get('#submitButton')

    it('sanity checks', () => {
        expect(2*2).to.equal(4)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })


    it('the elements are on the page', () => {
        username().should('exist')
        email().should('exist')
        password().should('exist')
        phone().should('exist')
    })

    describe('filling out and submitting', () => {
        it('submit button is disabled', () => {
            submitButton().should('be.disabled')
        })
        it('can type in the input fields', () => {
            username()
                .should('have.value', '')
                .type('Sterling')
                .should('have.value', 'Sterling')
            email()
                .should('have.value', '')
                .type('sterl@me.com')
                .should('have.value', 'sterl@me.com')   
            password()
                .should('have.value', '')
                .type('abc123')
                .should('have.value', 'abc123')      
            phone()
                .should('have.value', '')
                .type('(123) 555-1234')
                .should('have.value', '(123) 555-1234')      
        })
        it('the submit button only enables if all of the fields are filled correctly', () => {
            submitButton().should('be.disabled')
            username()
                .type('Sterling')
            email()
                .type('sterl@me.com')   
            password()
                .type('abc123') 
            submitButton().should('be.disabled')     
            phone()
                .type('(123) 555-1234')   
            submitButton().should('not.be.disabled')
        })
        it('submitting resets the inputs', () => {
            username()
                .type('Sterling')
            phone()
                .type('(123) 555-1234')   
            email()
                .type('sterl@memail.com') 
            password()
                .type('abc123')   
            submitButton().click()
            username()
                .should('have.value', '')
            phone()
                .should('have.value', '')
            email()
                .should('have.value', '')
            password()
                .should('have.value', '')     
        })
    })
})