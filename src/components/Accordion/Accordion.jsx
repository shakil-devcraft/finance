// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import Container from '../shares/Container/Container';

export default function AccordionExpandDefault() {
  return (
    <section>
        <Container>
            <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography>Expanded by default</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography>Header</Typography>
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
