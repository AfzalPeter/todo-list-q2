// import ChakraWrapper from "components/chakraWrapper";
import 'styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <head />
      {/* <body> <ChakraWrapper> {children} </ChakraWrapper> </body> */}
      <body> {children} </body>
    </html>
  )
}
