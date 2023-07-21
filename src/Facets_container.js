import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Facet from './Facet';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';



function Facets_container({ facets, updateCategory, clearAllFacetValues}) {
    //Loop through all the facets and create a Facet component
    return (
        <Container className='facets-row'>
            <Row>
            {Object.entries(facets).map(([name, values]) =>
                <Col className={name} >
                    <Facet  name={name} values={values} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
                </Col>)}
            </Row>
        </Container>
    );
}

export default Facets_container;