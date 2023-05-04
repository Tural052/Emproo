import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import {  useParams } from "react-router-dom";
import PageHelper from "./PageHelper";
const Overview = ({ selectUser, selectGroup }) => {
    const { id } = useParams();

    let selectLesson =
        selectGroup && selectGroup.fenler.find((item) => item.id.toString() === id);

    const renderedDetalsStudenst = selectGroup && selectGroup.users.map((item) => {
        return (
            <li>
                {item.name}
                {item.surname}
            </li>
        )
    })
    return (
        <div>
            <PageHelper selectGroup={selectGroup} selectUser={selectUser} />
            <Grid
                templateColumns="repeat(4,1fr)"
                templateRows="repeat(7,1fr)"
                gap={4}
            >
                <GridItem colSpan={1} rowSpan={5} bg="papayawhip">
                    1
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={2} rowSpan={6} bg="papayawhip">
                    <p>Müəllim</p>
                    {
                        selectLesson && selectLesson.teacher
                    }
                    <p>Tələbələr</p>
                    {

                        renderedDetalsStudenst
                    }
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={1} rowSpan={1} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg="papayawhip">
                    2
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} bg="papayawhip">
                    2
                </GridItem>
            </Grid>
        </div>
    );
};

export default Overview;
