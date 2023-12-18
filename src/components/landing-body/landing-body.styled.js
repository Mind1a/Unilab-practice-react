import { styled } from "styled-components";

export const StyledLandingBody = styled.main`
  width: min(100%, 1600px);
  margin: 0 auto;
  padding: 0 2rem;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

    .image_container {
      display: flex;
      align-items:center;
      justify-content: end;

      img {
        width: 70%;
      }
      
      a {
        color: var(--clr-white);
        line-height: 30px;
        font-size: var(--fs-h4);
        text-align: center;
        font-weight: 800;
        min-width: 180px;
        min-height: 180px;
        max-width: 100px;
        background-color: var(--clr-primary);
        display: flex;
        border-radius: 50%;
        padding: 3.75rem 2.5rem;
        transform: translate(50%,100%);

        &:hover{
          transform: translate(50%,100%) scale(1.2);
        }
        
        &:focus-visible {
          outline: 2px solid var(--clr-primary);
          outline-offset: 2px;
        }
      }
    }
`;