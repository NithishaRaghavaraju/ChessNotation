import { Inter ,Inknut_Antiqua,Baskervville} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const inknut_antiqua = Inknut_Antiqua({ subsets: ["latin"], 

  weight:["300","400","500","600","700"],
  display: 'swap',
  variable:"--inknut_antiqua-font"
});
export const inter= Inter({ subsets: ["latin"], 
  display: 'swap',
  weight:["300","400","500","600","700"],
  variable:"--inter-font"
});

export const baskervville = Baskervville({
  subsets: ["latin"], 
  display: 'swap',
  weight:["400"],
  variable:"--baskervville-font"
})



export const metadata = {
  title: {
    default : "Chess Notation",
    template: "%s - Chess Notation"
  },
  description: "Learn Chess Notation with cool interesting games",
  verification: {
    google: 'i2gZnTm2Wp8yVfnsFB1AQNb_sDIvBG4Ld8RfwnaJhdI',
    
  }


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inknut_antiqua.variable} ${inter.variable} ${baskervville.variable}`}>
      <Navbar/>
      {children}
      
      </body>
      
    </html>
  );
}
