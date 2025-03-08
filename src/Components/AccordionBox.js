import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function AccordionBox(props) {
  return (
    <div>
         <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>{props.title}</Accordion.Header>
            <Accordion.Body>
                  {props.children}
            </Accordion.Body>
          </Accordion.Item>
    </div>
  )
}

export default AccordionBox