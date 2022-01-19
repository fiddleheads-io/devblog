import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e6ed;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  margin-bottom: 10px;
  padding:70px 100px;

  @media only screen and (max-width: 970px) {
    border-left: none;
    border-right: none;
    padding: 150px 15px;
  }
`;

export default Card;