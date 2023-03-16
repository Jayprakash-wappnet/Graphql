const { products , categories } = require("../data")

exports.Query = {
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
    },
    product: (parent,args,context) => {
     const productId = args.id;
     const product = products.find(product => product.id === productId)
     if(!product) return null;
     return product
     
    },
    categories: (parent, args, context) => categories,
    category: (parent,args,context) => {
      const { id }  = args;
      return categories.find((category) => category.id === id) 
    }

  }
