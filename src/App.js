import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { data } from "./programs_data"
import { empty } from "./empty"
import Programs from './programs';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import Facets_container from './Facets_container';


function App() {

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(data.map(item => item[name]))]
    return values.map(value => ({ 'name': value, 'checked': false }))
  }

  // Initial state
  const [state, setState] = useState({
    all_programs: data,
    shown_programs: data,
    no_programs: empty,
    facets: {
      location: build_categorical_facet_values('location'),
      hours: build_categorical_facet_values('hours'),
      'Martial Art': build_categorical_facet_values('Martial Art')
    }
  })


  //Updates state.shown_programs whenever state.facets changes
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })

    // If there are no facets selected, don't show programs
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_programs: state.no_programs })
      return
    }

   

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all programs and all active facets
    // Keep only the programs that match the active facets
    const to_show = state.all_programs.map(program =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(program[name])).filter(Boolean).length == number_of_active_facets ? program : undefined
    ).filter(Boolean)
    

    setState({ ...state, shown_programs: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  // Function to pass down to the Facet_value component to modify the state in this component.
  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name == value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  return (
    <div>
   
      <Row>
       
        <Facets_container  facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        

      </Row>
      <Row>
        <Container className='d-flex flex-wrap cards-row'>
          {state.shown_programs.map(x => <Programs {...x} />)}
        </Container>
      </Row>
      
    </div>
  );
}

export default App;
