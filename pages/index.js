import { useQuery } from "react-query"
import sample from "lodash/sample"
import { NFTE } from "@nfte/react"
import Box from "@components/Box"
import Footer from "@components/Footer"

import mediaQuery from "@utils/mediaQuery"

export default function Home() {
  const { data } = useQuery(["mediaQuery"], () => mediaQuery())

  const noBidsMedia = data?.medias?.filter((d) => d.currentBids.length === 0)

  const singleNoBidsMedia = sample(noBidsMedia)

  return (
    <Box
      as="main"
      css={{
        maxWidth: 1280,
        mx: "auto",
        py: "@3",
        px: "@3",
        bp0: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" },
      }}
    >
      <Box
        css={{
          border: "1px solid @text",
          px: "@2",
          py: "@2",
          bp0: {
            px: "@5",
            py: "@5",
          },
        }}
      >
        <Box
          as="img"
          src="/zorb.jpg"
          css={{
            maxWidth: 80,
            mb: "@5",
          }}
        />
        <Box
          css={{
            display: "flex",
            mb: "@5",
          }}
        >
          <Box
            as="h1"
            css={{
              fontSize: "@4",
              fontFamily: "@body",
              fontWeight: 600,
              m: 0,
            }}
          >
            No bids media
          </Box>
        </Box>

        <Box as="p" css={{ m: 0, mb: "@2" }}>
          Picks a random piece of cryptomedia minted by Zora that currently has
          0 bids. NFT embed is powered by{" "}
          <Box as="a" href="https://nfte.app" css={{ color: "currentcolor" }}>
            nfte.app
          </Box>
          .
        </Box>

        <Box as="p" css={{ m: 0, mb: "@2" }}>
          Support an emerging creator by placing a bid on an undiscovered gem.
        </Box>

        <Box as="p" css={{ m: 0 }}>
          More information about Zora and its protocol can be found by reading
          the{" "}
          <Box
            as="a"
            href="https://zora.engineering/whitepaper"
            target="_blank"
            css={{ color: "currentcolor" }}
          >
            Whitepaper
          </Box>
        </Box>
      </Box>

      <Box
        css={{
          px: "@2",
          py: "@2",
          borderLeft: "1px solid @text",
          borderTop: "none",
          borderRight: "1px solid @text",
          borderBottom: "1px solid @text",
          bp0: {
            px: "@5",
            py: "@5",
            borderLeft: "none",
            borderTop: "1px solid @text",
            borderRight: "1px solid @text",
            borderBottom: "1px solid @text",
          },
        }}
      >
        {data ? (
          <NFTE
            contract="0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7"
            tokenId={singleNoBidsMedia?.id}
            style={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}
          />
        ) : (
          <Box css={{ textAlign: "center" }}>Picking random cryptomedia...</Box>
        )}
      </Box>

      <Footer />
    </Box>
  )
}
