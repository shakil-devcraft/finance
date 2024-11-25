// // import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';

// import Container from '../shares/Container/Container';

// export default function AccordionExpandDefault() {
//   return (
//     <section>
//         <Container>
//             <div className='py-10 md:py-16 lg:py-20'>
//             <Accordion defaultExpanded>
//                 <AccordionSummary
//                 expandIcon={<AddIcon />}
//                 aria-controls="panel1-content"
//                 id="panel1-header"
//                 >
//                 <Typography>Expanded by default</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                 <Typography>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                     malesuada lacus ex, sit amet blandit leo lobortis eget.
//                 </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             <Accordion>
//                 <AccordionSummary
//                 expandIcon={<AddIcon />}
//                 aria-controls="panel2-content"
//                 id="panel2-header"
//                 >
//                 <Typography>Header</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                 <Typography>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//                     malesuada lacus ex, sit amet blandit leo lobortis eget.
//                 </Typography>
//                 </AccordionDetails>
//             </Accordion>
//             </div>
//         </Container>
//     </section>
//   );
// }




import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Container from '../shares/Container/Container';

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <Container>
        <div className="py-10 md:py-16 lg:py-20">
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleExpand('panel1')}
            sx={{
              backgroundColor: 'transparent', // Custom background color
              borderTop: '1px solid white', // Top border
              borderBottom: '1px solid white', // Bottom border
              boxShadow: 'none', // Removes the default shadow
              borderRadius: 'none'
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ 
                borderRadius: 'none'
               }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Expanded by default</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleExpand('panel2')}
            sx={{
              backgroundColor: '#f9f9f9',
              borderTop: '5px solid white',
              borderBottom: '5px solid white',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>Header</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
