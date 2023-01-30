import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Mainscreen from "../../components/Util/Mainscreen";
import notes from "../../data/dummyNotes";

const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            console.log(`Deleted note with id : ${id}`);
        }
    };

    return (
        <Mainscreen title={"Welcome Back Harsh Vaghani"}>
            <NavLink to={"/createnote"}>
                <Button
                    size="lg"
                    style={{
                        marginLeft: 10,
                        marginBottom: 6,
                    }}
                >
                    Create New Note
                </Button>
            </NavLink>

            {notes.map((note) => {
                return (
                    <Accordion key={note._id}>
                        <Card
                            style={{
                                margin: 10,
                            }}
                        >
                            <Card.Header style={{ display: "flex" }}>
                                <span
                                    style={{
                                        color: "black",
                                        textDecoration: "none",
                                        flex: 1,
                                        cursor: "pointer",
                                        alignSelf: "center",
                                        fontSize: 18,
                                    }}
                                >
                                    <Accordion.Toggle
                                        as={Card.Text}
                                        variant={"link"}
                                        eventKey={note._id}
                                    >
                                        {note.title}
                                    </Accordion.Toggle>
                                </span>
                                <div>
                                    <Button
                                        variant="primary"
                                        as={Link}
                                        to={`/note/${note._id}`}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="mx-2"
                                        onClick={() => {
                                            deleteHandler(note._id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>

                            <Accordion.Collapse eventKey={note._id}>
                                <Card.Body>
                                    <h4>
                                        <Badge variant={"success"}>
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>{note.content}</p>
                                        <footer className="blockquote-footer">
                                            <cite title="Source Title">
                                                {`Created on ${Date.now()}`}
                                            </cite>
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                );
            })}
        </Mainscreen>
    );
};

export default MyNotes;
