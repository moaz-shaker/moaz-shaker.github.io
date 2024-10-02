import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 0rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
  .MobileCard {
    display: none;
  }
  
  @media only screen and (max-width: 768px) {
    .MobileCard {
      display: block;
    }
  }
  .BigCard {
    padding-top: 3rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
    margin-bottom: 1rem;
}
`
;
