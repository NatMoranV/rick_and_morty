import styled from "styled-components";


export const Grid = styled.section`
padding: 2em;
display: grid;
gap: 5em;
grid-auto-rows: auto;
grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
`