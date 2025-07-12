// src/pages/Program/CreateProgram.styled.ts
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Pretendard', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const AddressSection = styled.div`
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background-color: #7D11FF;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SelectedAddress = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const DetailInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const SubmitSection = styled.div`
  text-align: center;
`;

export const FinalAddress = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1rem;
`;

export const PreviewTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
