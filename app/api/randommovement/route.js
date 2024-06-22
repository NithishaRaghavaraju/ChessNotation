import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 1",
    "NOTATION": "Bc4",
    "HighlightSquares": ["f1", "c4"]
  },
  {
    "FEN": "rnbqkbnr/pppp1ppp/8/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR b KQkq - 0 1",
    "NOTATION": "Nf6",
    "HighlightSquares": ["g8", "f6"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 1",
    "NOTATION": "Qf3",
    "HighlightSquares": ["d1", "f3"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR b KQkq - 0 1",
    "NOTATION": "Rg8",
    "HighlightSquares": ["h8", "g8"]
  },
  {
    "FEN": "rnbqkbr1/pppp1ppp/5n2/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
    "NOTATION": "Kf1",
    "HighlightSquares": ["e1", "f1"]
  },
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
