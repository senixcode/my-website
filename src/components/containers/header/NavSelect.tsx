import Link from "next/link"
import { FC } from "react"
import { Container } from "../../../../styles/system/Container"
import { Hide } from "../../../../styles/system/Hide"
import { Nav } from "../../../../styles/system/Nav"
import { css } from "styled-components"
import Head from "next/head"
import { SEO_SEPARATOR } from "../../../globalVariables"
import { INavbar } from "../../../hook/useMultiLanguage"
import { NextRouter } from "next/router"
export const NavSelect: FC<{
  router: NextRouter
  navbar: INavbar
}> = ({ router, navbar }) => {
  const title = router.route === "/" ? navbar.aboutMe : navbar.projects

  return (
    <>
      {title && (
        <Head>
          <title>{`${title} ${SEO_SEPARATOR} Senixcode`} </title>
        </Head>
      )}
      <Hide maxMd="none">
        <Container gridTemplateColumnsMd={"1fr 1fr"} styles={gridColumnGap}>
          <Link href="/aboutme">
            <Nav selected={router.route === "/"}>{navbar.aboutMe}</Nav>
          </Link>

          <Link href="/projects">
            <Nav selected={router.route === "/projects"}>{navbar.projects}</Nav>
          </Link>
        </Container>
      </Hide>

      <Hide minMd="none">
        <Nav>{title}</Nav>
      </Hide>
    </>
  )
}

const gridColumnGap = css`
  grid-column-gap: 3em;
`
