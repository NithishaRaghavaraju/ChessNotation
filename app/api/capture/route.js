import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r1bq1rk1/pppp1ppp/2n2n2/1B2p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 w KQkq - 0 1",
    "NOTATION": "Bxc6",
    "HighlightSquares": ["b5", "c6"]
  },
  {
    "FEN": "r1bqk2r/ppp2ppp/2p2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQ1RK1 w KQkq - 0 1",
    "NOTATION": "Nxe5",
    "HighlightSquares": ["f3", "e5"]
  },
  {
    "FEN": "r1b2rk1/ppp2ppp/2p2q2/8/4n3/2PN1Q2/PPP2PPP/R1B2RK1 w KQkq - 0 1",
    "NOTATION": "Qxe4",
    "HighlightSquares": ["f3", "e4"]
  },
  {
    "FEN": "8/6p1/8/3P4/3k4/7P/1K6/8 b KQkq - 0 1",
    "NOTATION": "Kxd5",
    "HighlightSquares": ["d4", "d5"]
  },
  {
    "FEN": "r1bqk2r/pppp1ppp/2B2n2/4p3/1b2P3/2N2N2/PPPP1PPP/R1BQK2R b KQkq - 0 1",
    "NOTATION": "dxc6",
    "HighlightSquares": ["d7", "c6"]
  },
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
