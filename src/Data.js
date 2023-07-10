export const sliderItems = [
 {id:1,
img:"https://i.ibb.co/gDpDWvY/1.png",
tittle:"SUMER SALE",
desc:"DONT COMPROISE ON STYLE! FLATE 30% OFF ON NEW ARRIVAL",
bg:"f5fafd"},
{id:2,
    img:"https://i.ibb.co/GnYHZJq/5.png",
    tittle:"WINTERSALE",
    desc:"DONT COMPROISE ON STYLE! FLATE 30% OFF ON NEW ARRIVAL",
    bg:"fcf1ed"},
    {id:3,
        img:"https://i.ibb.co/3SKxb53/4.png",
        tittle:"SUMER SALE",
        desc:"DONT COMPROISE ON STYLE! FLATE 30% OFF ON NEW ARRIVAL",
        bg:"fbf0f4"}
];
export const categories = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "SHIRT STYLE!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "LOUNGEWEAR LOVE",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "LIGHT JACKETS",
    },
  ];
  export const popularProducts = [
    {
      id:1,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      catagory:"shirt",
      price:"500",
    },
    {
      id:2,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      catagory:"cap",
      price:"300",
    },
    {
      id:3,
      img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      catagory:"shirt",
      price:"600",
    },
    {
      id:4,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      catagory:"jacket",
      price:"500",
    },
    {
      id:5,
      img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
      catagory:"bag",
      price:"1000",
    },
    {
      id:6,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      catagory:"cap",
      price:"900",
    },
    {
      id:7,
      img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      catagory:"shirt",
      price:"500",
    },
    {
      id:8,
      img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      catagory:"jacket",
      price:"500",
    },
  ];
  popularProducts.forEach((item)=>{
    item["quantity"]=0;
  })