import { NextResponse } from "next/server";

const data = [
  {
    "FEN": "r5k1/6pp/P7/6N1/8/r1N4P/6PK/6R1 w KQkq - 0 1",
    "NOTATION": "Nce4",
    "HighlightSquares": ["c3", "e4"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/P7/6N1/8/r1N4P/6PK/6R1 w KQkq - 0 1",
    "NOTATION": "Nge4",
    "HighlightSquares": ["g5", "e4"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/8/6N1/4N3/r6P/6PK/6R1 b KQkq - 0 1",
    "NOTATION": "R3a6",
    "HighlightSquares": ["a3", "a6"],
    "Ambiguity" : true
  },
  {
    "FEN": "r5k1/6pp/8/6N1/4N3/r6P/6PK/6R1 b KQkq - 0 1",
    "NOTATION": "R8a6",
    "HighlightSquares": ["a8", "a6"],
    "Ambiguity" : true
  },
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
  {
    "FEN": "rnbqkb1r/pppp1ppp/5n2/4p3/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 1",
    "NOTATION": "Bb4+",
    "HighlightSquares": ["f8", "b4"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4p2n/4P3/2N2P2/PPPP2PP/R1BQKBNR b KQkq - 0 1",
    "NOTATION": "Qh4+",
    "HighlightSquares": ["d8", "h4"]
  },
  {
    "FEN": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    "NOTATION": "e4",
    "HighlightSquares": ["e2", "e4"]
  },
  {
    "FEN": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
    "NOTATION": "e5",
    "HighlightSquares": ["e7", "e5"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4pn2/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "d3",
    "HighlightSquares": ["d2", "d3"]
  },
  {
    "FEN": "rnbqkb1r/pppp1ppp/8/4pn2/4P3/3P1N2/PPP2PPP/RNBQKB1R b KQkq - 0 1",
    "NOTATION": "d6",
    "HighlightSquares": ["d7", "d6"]
  },
  {
    "FEN": "rnb1k2r/ppppbpP1/8/4N2p/1P2P1n1/8/PP1P2PP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "gxh8=R+",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "r1bqk2r/pp1pppPp/n7/2p5/4P1n1/3P4/PPP3P1/RNBQKBNR w KQkq c6 0 1",
    "NOTATION": "gxh8=R#",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "rnb1k2r/ppppbpP1/8/4N2p/1P2P1n1/8/PP1P2PP/RNBQKB1R w KQkq - 0 1",
    "NOTATION": "gxh8=R+",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "r1bqk2r/pp1pppPp/n7/2p5/4P1n1/3P4/PPP3P1/RNBQKBNR w KQkq c6 0 1",
    "NOTATION": "gxh8=R#",
    "HighlightSquares": ["g7", "h8"]
  },
  {
    "FEN": "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
    "NOTATION": "O-O",
    "HighlightSquares": ["e1", "g1"]
  },
  {
    "FEN": "r3kbnr/ppp2ppp/2np1q2/4p3/2B1P1b1/3P1N1P/PPP2PP1/RNBQ1RK1 b KQkq - 0 1",
    "NOTATION": "O-O-O",
    "HighlightSquares": ["e8", "c8"]
  }
];

export async function GET(request) {
  return NextResponse.json({ data }, { status: 200 });
}
