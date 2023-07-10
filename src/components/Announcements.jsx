import styled from "styled-components"

const Container = styled.div`

height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weght:500;`;
const Announcements = () => {
  return (
    <Container>
      Supper Deal! Free shipping over order 50$
    </Container>
  )
}

export default Announcements
