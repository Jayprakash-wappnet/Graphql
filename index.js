const { ApolloServer, gql } = require("apollo-server");



const products = [
    {
      id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
      name: "Steel Pot",
      description: "Silver steel pot that is perfect for cooking",
      quantity: 230,
      price: 42.44,
      image: "img-1",
      onSale: false,
    },
    {
      id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
      name: "Salad Bowl",
      description: "Round wooden bowl perfect for tossing and making salads",
      quantity: 33,
      price: 53.5,
      image: "img-2",
      onSale: false,
    },
    {
      id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
      name: "Spoon",
      description: "Small and delicate spoon",
      quantity: 4266,
      price: 1.33,
      image: "img-3",
      onSale: true,
    },
    {
      id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
      name: "Shovel",
      description: "Grey rounded shovel for digging",
      quantity: 753,
      price: 332,
      image: "img-4",
      onSale: false,
    }
]

const typeDefs = gql`
  # this is schema part
  type Query {
    Name: String!                                    #type of Name is string , "!" shows this field is Not null
    Enrollment_no: Int                               #type of Employee_ID is int
    CGPA: Float                                      #type of CGPA is float
    Is_belonging_from_Ahemdabad: Boolean             #type of this field is boolean

    #  below  field accept String in Array formate ,"!" is in the square bracket show
    #  that array not accept null value and otside "!" shows array is not null 

    Subject_of_7th_sem: [String!]!

    Products: [Product!]!                            #object-type data give as dataType
    }

  # Object types
  type Product{
    name: String!,
    description: String!,
    quantity: Int!,
    price: Float!,
    image: String,
    onSale: Boolean!
  }
`;

// this is Resolver part
const resolvers = {
  Query: {
    Name: () => {
      return "Jayprakash";
    },
    Enrollment_no: () => {
      return 103;
    },
    CGPA: () => {
      return 7.5;
    },
    Is_belonging_from_Ahemdabad: () => {
      return true; 
    },
    Subject_of_7th_sem: () => {
      return ["Compiler design", "Machine Learning", "Digital forensic","Big Data Analytics"];
    },
    Products: () => {
        return products;
    }

  },
};

//ApolloServer is give as Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
