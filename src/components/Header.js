import React from "react";
import { HiHome } from "react-icons/hi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <>
      <TopBox>
        <Link to='/'>
          <HiHome />
        </Link>
        <div>모두의 투두리스트</div>
      </TopBox>
    </>
  );
}

export default Header;
