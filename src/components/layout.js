import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          alieundimz
        </h3>
      </Link>
      
      <Link
        to={`/blog/`}
        css={css`
          float: right;
        `}
      >
        Blog
      </Link>
      <Link
        to={`/about/`}
        css={css`
          padding-right: 20px;
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}