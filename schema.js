const { gql } = require("apollo-server");

exports.typeDefs = gql`
  # this is schema part
  type Query {
    Name: String!                                    #type of Name is string , "!" shows this field is Not null
    Enrollment_no: Int                               #type of Employee_ID is int
    CGPA: Float                                      #type of CGPA is float
    Is_belonging_from_Ahemdabad: Boolean             #type of this field is boolean

    #  below  field accept String in Array formate ,"!" is in the square bracket show
    #  that array not accept null value and otside "!" shows array is not null 

    Subject_of_7th_sem: [String!]!

    Products: [Product!]!                #object-type data give as dataType
    product(id: ID!): Product 
    categories: [Category!]!
    category(id: ID!): Category                          
    }

  # Object types
  type Product{
    id: ID!
    name: String!,
    description: String!,
    quantity: Int!, 
    price: Float!,
    image: String,
    onSale: Boolean!,
    category: Category
  }
   
   type Category{
    id: ID!,
    name: String!,
    products: [Product!]! 
   }
`;