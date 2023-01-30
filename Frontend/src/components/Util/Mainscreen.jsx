import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import "./Mainscreen.css";
const Mainscreen = ({ title, children }) => {
    return (
        <div className="mainbackground">
            <Container>
                <Row>
                    <div className="page">
                        {title && (
                            <Fragment>
                                <h1 className={"heading"}>{title}</h1>
                                <hr />
                            </Fragment>
                        )}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Mainscreen;
