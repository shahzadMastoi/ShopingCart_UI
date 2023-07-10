import {categories} from '../Data';
import styled from 'styled-components'
import CatagoryItem from './CatagoryItem';

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;`;
const Catgories = () => {
  return <Container>
      {categories.map(item =>(
        
        <CatagoryItem item={item}/>
      ))}
    </Container>;
};

export default Catgories;
