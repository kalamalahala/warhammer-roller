import ForceSelect from "./components/ForceSelect.tsx";
import Nav from "./components/Nav";
import { Col, Row } from "solid-bootstrap";

function App() {
    return (
        <>
            <Nav />
            <Row class="mt-3 p-0 justify-content-center">
                <Col class="col-5">
                    <h3>Player One</h3>
                    <ForceSelect />
                </Col>
                <Col class="col-5">
                    <h3>Player Two</h3>
                    <ForceSelect />
                </Col>

            </Row>
        </>
    );
}

export default App;
