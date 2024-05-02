describe('Handle Tables',(()=>{
    beforeEach('Login',()=>{
cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");
cy.get('#input-username').type('demo');
cy.get('#input-password').type('demo');
cy.get('.btn').click();
cy.get('[data-bs-dismiss="modal"]').click();
cy.get('#menu-customer').click();
cy.get('#collapse-5 > :nth-child(1) > a').click();
    })

    it('Check Number Rows and Colums',()=>{
        cy.get("[class='table table-bordered table-hover']>tbody >tr").should('have.length','10');
        cy.get("[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');
    })

    it('Check cell data from specific row and Column', ()=>{
         cy.get('[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)').should('contain.text', 'gorankrezic90@gmail.com');
    })

    it('Read all the rows and colums data in the first page',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
          cy.wrap($row).within(()=>{
        cy.get("td").each(($col, index,$cols)=>{
        cy.log($col.text());
            })
          })  
        })
    })


it.only('Pagination',()=>{
    //find total number of pages
   /* let totalPages;
    cy.get(".col-sm-6.text-end").then((e)=>{
        let mytext=e.text();//Showing 1 to 10 of 19249 (1925 Pages)
        totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
        cy.log("Total number of pages in a table=====>"+totalPages);
    
    });
*/
let totalPages=5;
for (let p=1; p<=5;p++)
if(totalPages>1){
   cy.log("Active page is=="+p); 
   cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
   cy.wait(3000);
//xpath for the table

cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
.each( ($row, index, $rows)=>{
 cy.wrap($row).within( ()=> {

    cy.get('td:nth-child(3)').then((e)=>{
        cy.log(e.text());//Email
    })

 })   
})


}

})

}))                                                          