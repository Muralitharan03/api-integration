import styled from "styled-components";

const ApiIntegrationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  padding: 1rem 1.5rem;
  h3 {
    text-align: center;
  }
`;

const PostIntegrationWrapper = styled.div`
  width: 90%;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  button {
    margin: 0.75rem 0;
    padding: 0.5rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
    color: #6c757d;
    &:focus-visible {
      outline: none;
    }
  }
  textarea {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
    color: #6c757d;
    &:focus-visible {
      outline: none;
    }
  }
  button {
    margin: 0.5rem auto;
    width: 30%;
    cursor: pointer;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
  }
  label {
    display: flex;
    font-weight: bold;
    margin: 1rem 0 0;
  }
  p {
    color: #dc3545;
    margin: 0.25rem 0 0.5rem;
  }
  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`;
const GetIntegrationWrapper = styled.div`
  width: 90%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export { ApiIntegrationWrapper, PostIntegrationWrapper, GetIntegrationWrapper };
