import styled from "styled-components";

const Cancel = () => {
  return (
     <Container>
      <h2>Checkout Cancelled</h2>
      <p>Your order was cancelled.</p>
      <p>This might be due to a payment failure or something else.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@onlineshop.com</strong>
      </p>
    </Container>
  );
};

export default Cancel;
const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: red;
  }
`;
