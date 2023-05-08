import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PageHelper from "../main/PageHelper";
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

    const renderedDetalsLessons = selectGroup && selectGroup.fenler.map((item) => {
        return (
            <GridItem border={'1px solid red'} colSpan={1} rowSpan={1} >
                <p style={{ padding: "15px" }}>{item.name}</p>
            </GridItem>
        )
    })
    return (
        <div className='overiew'>
            <PageHelper selectGroup={selectGroup} selectUser={selectUser} />
            <Grid
                templateColumns="repeat(4,1fr)"
                templateRows="repeat(7,1fr)"
                gap={4}
                marginTop={"20px"}
            >
                <GridItem colSpan={1} rowSpan={5}
                    border={"1px solid black"}
                    borderRadius={"5px"}
                    padding={"10px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    İmtahana qədər qiymət
                </GridItem>
                <GridItem colSpan={1} rowSpan={5} >
                    <Grid templateColumns="repeat(q,1fr)"
                        templateRows="repeat(5,1fr)"
                        gap={4}>
                        {renderedDetalsLessons}
                    </Grid>
                </GridItem>
                {/* <GridItem */}
                <GridItem
                    colSpan={2} rowSpan={6}
                    border={"1px solid black"}
                    borderRadius={"5px"}
                    padding={"10px"}
                >
                    <p>Müəllim</p>
                    {
                        selectLesson && selectLesson.teacher
                    }
                    <p>Tələbələr</p>
                    {

                        <ul>
                            {renderedDetalsStudenst}
                        </ul>
                    }
                </GridItem>
                <GridItem colSpan={1} rowSpan={2} border={"1px"}>1</GridItem>
                <GridItem colSpan={1} rowSpan={2} border={"1px"}>2</GridItem>
            </Grid>
        </div>
    );
};

export default Overview;
