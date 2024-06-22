import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 1",
    "NOTATION": "Bb4+",
    "HighlightSquares": ["f8", "b4"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4p2n/4P3/2N2P2/PPPP2PP/R1BQKBNR b KQkq - 0 1",
    "NOTATION": "Qh4+",
    "HighlightSquares": ["d8", "h4"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
