import { useState } from "react";
import { InputGroup, Input, Row, Col, Container } from "reactstrap";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <div className='search'>
        <InputGroup>
          <InputGroup type='append'> Search </InputGroup>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
    </Container>
  );
}
