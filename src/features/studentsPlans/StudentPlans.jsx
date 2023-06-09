import React from 'react'
import Navigation from '../helper/navigation/Navigation'
import { Grid, Segment } from 'semantic-ui-react'
import { routing } from '../../globalRouting'
import { useNavigate } from 'react-router-dom'
const StudentPlans = ({ selectUser }) => {
  let navigation = useNavigate()
  let fenler = selectUser !== undefined && (selectUser.fenler? selectUser.fenler : selectUser.qrups)
  console.log(fenler)
  // console.log(selectUser)
  let renderde = fenler && fenler.map((item) => {
    return (
      <Segment key={item.id} onClick={() => {
        item.name?
        routing.to(navigation, `/fenler/${item.id}/overview`, item.id):
        routing.to(navigation, `/qrups/${item.fennAdi}/overview`, item.id)
      }}>{item.name?item.name : item.fennAdi}</Segment>
    )
  })
  return (
    <div>
      <Navigation selectUser={selectUser} />
      <Grid columns={2} >
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
          <Segment>4</Segment>
          <Segment>5</Segment>
        </Grid.Column>
        <Grid.Column>
          {renderde}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default StudentPlans