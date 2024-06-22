import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 1",
    "NOTATION": "Qh4#",
    "HighlightSquares": ["d8", "h4"]
  },
  {
    "FEN": "rnbqkbnr/ppppp2p/8/5pp1/4P3/3P4/PPP2PPP/RNBQKBNR w KQkq g6 0 1",
    "NOTATION": "Qh5#",
    "HighlightSquares": ["d1", "h5"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
