let xAxixData = [
  { name: "Jan", sale: 112_000 },
  { name: "Feb", sale: 99_000 },
  { name: "Mar", sale: 12_090 },
  { name: "Apr", sale: 99_000 },
  { name: "May", sale: 54_000 },
  { name: "Jun", sale: 85_000 },
  { name: "Jul", sale: 34_000 },
  { name: "Agu", sale: 18_598 },
  { name: "Sep", sale: 0 },
  { name: "Oct", sale: 73_078 },
  { name: "Nuv", sale: 12_900 },
  { name: "Des", sale: 97_000 },
];
const newMembers = [
  {
    id:1 ,
    username : 'Hesam Kamali' ,
    title : 'web Developer',
    img: "image/Avatar.png"
  },
  {
    id:2 ,
    username : 'mohammad ali' ,
    title : 'Weblog',
    img: "image/Avatar.png"
  },
  {
    id:3 ,
    username : 'Babak' ,
    title : 'Seo Eng',
    img: "image/Avatar.png"
  },
  {
    id:4 ,
    username : 'Hoseein' ,
    title : 'Hacker',
    img: "image/Avatar.png"
  },
]


const transActions = [
  {
    id:1 ,
    customer : "Hesam Kamali" ,
    date : '28 jun 2023' ,
    amount : 213.000 , 
    status: 'Approved' ,
    img : '/image/Avatar.png'
  },
  {
    id:1 ,
    customer : "Hoseein Karimi" ,
    date : '5 Jan 2024' ,
    amount : 555.080 , 
    status: 'Approved' ,
    img : '/image/Avatar.png'
  },
  {
    id:1 ,
    customer : "Reza Davari" ,
    date : '29 jul 2024' ,
    amount : 113.900, 
    status: 'Pending' ,
    img : '/image/Avatar.png'
  },
  {
    id:4,
    customer : "Ali Mohammadi" ,
    date : '25 Mar 2024' ,
    amount : 888.000 , 
    status: 'Declined' ,
    img : '/image/Avatar.png'
  },
]
let userRows = [
  {
    id: 1 , 
    userName : "Hesam Kamali" ,
    avatar: '/image/Avatar.png',
    status: 'active' ,
    transaction:'$129.000'
  },
  {
    id: 2 , 
    userName : "Ali Davari" ,
    avatar: '/image/Avatar.png',
    status: 'non-active' ,
    transaction:'$56.000'
  },
  {
    id: 3 , 
    userName : "Hassan Momeni" ,
    avatar: '/image/Avatar.png',
    status: 'active' ,
    transaction:'$110.234'
  },
  {
    id: 4, 
    userName : "Mohsen refie" ,
    avatar: '/image/Avatar.png',
    status: 'active' ,
    transaction:'$439.000'
  },
  {
    id: 5, 
    userName : "Mohammad Kiani" ,
    avatar: '/image/Avatar.png',
    status: 'non-active' ,
    transaction:'$546.050'
  },
]
let products = [
  {
      id: 1,
      title: 'Asus',
      avatar: 'image/asus.jpeg',
      price: 890
  },
  {
      id: 2,
      title: 'Acer',
      avatar: 'image/acer.jpg',
      price: 890
  },
  {
      id: 3,
      title: 'HP',
      avatar: 'image/hp.jpg',
      price: 890
  },
  {
      id: 4,
      title: 'Dell',
      avatar: 'image/dell.jpg',
      price: 890
  },
]

export { xAxixData  , newMembers ,transActions ,userRows ,products};
