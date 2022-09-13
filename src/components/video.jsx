
// export const Video = () => (
//     <div style={{position:'fixed', zIndex:'-1'}}>
//       <video loop autoPlay >
//         <source
//           src="./.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//     </div>
// )

// import splash from '../assets/sauron.gif'
import { Box, Image } from '@chakra-ui/react'

const url = 'https://sauronbucket.s3.us-east-1.amazonaws.com/sauron.gif?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaDGV1LWNlbnRyYWwtMSJIMEYCIQDfKzVcbWpEdD%2FbbMYt9c3w0HZYFNcMrd3hacj6MyzLiAIhAL42uDIiCdTDMe44wgfhrQl57pyJEtDRPq1diktzxz7iKu0CCK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODExMzM2NzU2NzMzIgwNw58YC%2BSlm1AEAfUqwQK65IJkKPohvVX8AAjtOWozukeb3yE0vU%2BiVBXFQqVKoTjPgGh7nWu99QZeEcOsnhTly9S2EyaswrmoouhmxKPMNvzzfWaWfhKPtu8HC4ZmUfdf3%2BiZT7pDLXf9JAiUaBo2txuxDPlXKYymeEiawMitrmcpNUHkZCxyHUp0BJ5pFkV58Ml3ujwWdv3HNwnZuBNmt4g2c9ZIB1wdfGQG5AByQeJMklkdEXgLQl7A3y9B%2Fov7CnFrZV4vB%2F%2FlkjLZJbbsG4Y68gBLsk7Vir8dV7q27xrDyk9Qy9mg1b8xJhuQ6ZdZlDDj1BF9Z3R9anDWOmX9Qyttjv0F7llmfbCD0zeR2bhNpS8m93tz5K3O%2Bo2MlnMUy4WUbyPDqtGZQTdqQaIt2OHCLdoyWgZVpQLLSNNV0e8fN3mSoLaZLcV6qFHevGkwpd%2BDmQY6sgLoYJRZAzn39Nne1vjRRS99GaOjcVLUJbENbLQtQSq0lalrrJEeIS3MyBbccpqMFriqo8C%2BUXg%2Bzt6ah6TEeb5mN6ZCTu8LWObRtRqxkwk3hp0NmF2h0pgLanCDDBMGn4x92TXGBrBAXH8E1MjSD2%2B%2B0VWKAWKdwj1vUsjRzzrrir5VyIJjOJ7jXyXV%2BCUtgAShJy9Ax0n5IGQgAs2MiVWYj35fuXwb412gow0tmRCFiLs2HFCWW0rTGChBnTYit%2B9L5cK80wlljECRp6HqyXoubn9mI%2BW%2B7IxnLrYuClVVPBEermigV7qifQvbLPBDWCSNBwASlGFk8PqsCaI3qSU6I1WVmwNfHWDgZ7QJL2nsSnWijB0sp%2Fgohz4tdXtkAet4udsnK%2BKnxY17YT6qfclOxJA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220913T214852Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3ZZ3QNX6XWVYXZ3R%2F20220913%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aac563fed0fbdb128c237669b9c4389512ae547c45e1f4ddb5fdb877d91c1418'

export const Video = () => {
  console.log(url)
  return(
  <Box position={'absolute'} zIndex={-1} height={'100vh'} width={'100vw'}>
    <Image src={url} boxSize={'100%'} objectFit='cover'/>
  </Box>
)}
