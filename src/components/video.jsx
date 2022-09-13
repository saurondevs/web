
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

import splash from '../assets/sauron.gif'
import { Box, Image } from '@chakra-ui/react'

export const Video = () => (
  <Box position={'absolute'} zIndex={-1} height={'100vh'} width={'100vw'}>
    <Image src={splash} boxSize={'100%'} objectFit='cover'/>
  </Box>
)