import { Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import Products from './Products';
import { useState } from 'react';


const Container = styled.div`
 height:60px;

`;
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center
justify-content:space-between;`;


const Languages = styled.span`
font-size:14px;
cursor:pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;`;

const Input = styled.input`
border:none;`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;`;

const Center = styled.div`
flex:1;
text-align:center;`;
const Logo = styled.h1`
font-weight:bold;`

const Right= styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;
const MenuItem = styled.div`
font-sized:14px;
cursor:pointer;
margin-left:25px;`;

const Navbar = () => {
  const [count,setCount]=useState([]);
  window.addEventListener("storage",()=>{
   setCount( JSON.parse(localStorage.getItem("cart")));
   console.log(count.length);
  })

  return (
    <Container>
        <Wrapper>
            <Left><Languages>EN</Languages>
            <SearchContainer>
                <Input />
               <Search style={{color:"gray",fontSize:"16px"}}/>
            </SearchContainer>
            </Left>
            <Center >
              <Logo> Dukan.pk</Logo>
            </Center>
            <Right> 
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem >
              <Badge badgeContent={count.length} color="primary">
      <ShoppingCartOutlined
 color="action" />
    </Badge>
              </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
