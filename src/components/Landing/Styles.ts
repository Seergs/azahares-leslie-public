import styled, { css } from "styled-components";
import {  Variants } from "framer-motion";

export const StyledLanding = styled.section`
  ${(props) => css`
    display: flex;
    height: 100vh;
    width: 100vw;
    main {
      padding: 2em 3em 2em 4em;
      width: 65%;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 3rem;
        max-width: 500px;
        line-height: 72px;
        color: ${props.theme.secondaryColor};
      }

      p {
        margin-top: 0.8em;
        font-size: 1.3rem;
        color: ${props.theme.secondaryColor};
      }

      .primary {
        width: fit-content;
        display: flex;
        align-items: center;
        margin-top: 4em;
        border-bottom: 5px solid ${props.theme.primaryColor};
        color: ${props.theme.secondaryColor};
        font-weight: bold;

        svg {
          color: ${props.theme.primaryColor};
          margin-left: 8px;
          transition: transform 0.1s linear;
        }

        &:hover {
          border-bottom: none;
          svg {
            transform: translateX(3px) scale(1.1);
          }
        }
      }

      .container {
        margin-top: 5em;
        height: 500px;
      }
    }

    img {
      margin-left: auto;
      justify-self: flex-end;
      max-height: 100vh;
      max-width: 900px;
      width: auto;
      height: auto;
      transition: filter 0.5s, transform 0.1s;
    }

    @media screen and (max-width: 1340px) {
      position: relative;

      main {
        position: absolute;
        width: 100vw;
        z-index: 1;
      }
    }

    @media screen and (max-width: 1284px) {
      img {
        transform: translateY(calc(50px + 2em));
      }
    }

    @media screen and (max-width: 1100px) {
      img {
        filter: opacity(0.3);
      }
      main {
        h1 {
          line-height: 56px;
          margin-bottom: 2em;
        }
        h1,
        p {
          color: ${props.theme.colors.teals.teal900};
        }
        .primary {
          justify-content: center;
          border: none;
          background-color: ${props.theme.colors.teals.teal700};
          height: 48px;
          width: 200px;
          color: ${props.theme.colors.teals.teal100};

          &:hover {
            background-color: ${props.theme.colors.teals.teal600};
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      main {
        padding: 1em;
      }
    }

    @media screen and (max-width: 700px) {
      main {
        h1 {
          font-size: 2rem;
        }
        .primary {
          margin: 4em auto 0 auto;
        }
      }
    }
  `}
`;

export const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

export const titleVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const paragraphVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1,
    },
  },
};
