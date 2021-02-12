import { FC } from "react";
import styled from "styled-components";
import { LogoXs, NavbarIcon } from "../../image";
type  Props = {
  title:string;
  changeShowNavxs: ()=> void;
}
export const Header: FC<Props> = ({ title, changeShowNavxs }) => (
  <Navbar>
    <Center>
      <LogoXs />
    </Center>
    <Center>
      <h2>{title}</h2>
    </Center>
    <Center>
      <NavbarIcon onClick={() => changeShowNavxs()}/>
    </Center>
  </Navbar>
);

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6fr 1fr;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
`;
