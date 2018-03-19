import styled from 'styled-components';

const AlertStyles = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  color: #721c24; 
  border-radius: 4px;
  border-color: #f5e79e;
  background-color: #f8d7da;
  border-color: #f5c6cb; 

  &.info {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }  

  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
`;

export default AlertStyles;
