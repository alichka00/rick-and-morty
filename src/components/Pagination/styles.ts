import styled from 'styled-components'

export const Pagination = styled.div`
  margin: 45px 0;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
  }

  a {
    cursor: pointer;

    display: inline-block;

    width: 40px;
    height: 40px;
    margin: 0 3px;

    line-height: 37px;
    color: #76b644;
    text-align: center;

    border: 1px solid #9dd1c5;
    border-radius: 10px;

    transition: 0.5s;

    :hover {
      color: green;
      background: #9dd1c5;
    }
  }

  .active {
    a {
      color: green;
      background-color: #9dd1c5;
    }
  }
`
