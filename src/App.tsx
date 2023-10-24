import readXML from "./readxml";
import ForceSelect from "./components/forceSelect";
import Nav from "./components/Nav";
import { Col, Row } from "solid-bootstrap";

function App() {
    return (
        <>
            <Nav />
            <Row class="mt-3 p-0">
                <Col class="col-3">
                    <ForceSelect />
                </Col>
            </Row>
        </>
    );
}

export default App;
