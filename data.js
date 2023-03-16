// below array-object contain details of particular product
const products = [
    {
      id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
      name: "Steel Pot",
      description: "Silver steel pot that is perfect for cooking",
      quantity: 230,
      price: 42.44,
      image: "img-1",
      onSale: false,
      categoryId:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70"

    },
    {
      id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
      name: "Salad Bowl",
      description: "Round wooden bowl perfect for tossing and making salads",
      quantity: 33,
      price: 53.5,
      image: "img-2",
      onSale: false,
      categoryId:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70"

    },
    {
      id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
      name: "Spoon",
      description: "Small and delicate spoon",
      quantity: 4266,
      price: 1.33,
      image: "img-3",
      onSale: true,
      categoryId:"c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
    },
    {
      id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
      name: "Shovel",
      description: "Grey rounded shovel for digging",
      quantity: 753,
      price: 332,
      image: "img-4",
      onSale: false,
      categoryId: "34115aac-0ff5-4859-8f43-10e8db23602b",

    },
    {
      id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
      name: "Soccer Ball",
      description: "Round ball",
      quantity: 734,
      price: 93.44,
      image: "img-9",
      onSale: false,
      categoryId: "d914aec0-25b2-4103-9ed8-225d39018d1d",

    }
]


// below array-object contain details for category
const categories = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    name: "Kitchen",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    name: "Garden",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    name: "Sports",
  },
];

module.exports = {

    products,
    categories
}