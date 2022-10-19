import { Accordion, AccordionDetails, AccordionSummary, Grid, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getCoursesByIdAction } from '../redux/actions/CourseActions';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// List, ListItem, ListItemText, Rating,
function CourseDetail  (){
    const [expanded, setExpanded] = useState('panel0');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const { courses } = useSelector((state) => state.courses)
    const dispatch = useDispatch()
    const {id} = useParams()

    useState(() => {
        dispatch(getCoursesByIdAction(id))
    }, [])

    console.log(courses)
    return (
        <>
            <Grid container margin="auto" width="70%" spacing={4}>
                <Grid item lg={8}>
                      <h1>{courses.name}</h1>
                      <img width="100%" src={courses.photoUrl} alt="" />
                      <p>{courses.description}</p>
                      {/* {Accordion start} */}
                      <div>
                    {
                          courses.courseContents &&
                          courses.courseContents.map((c, index) => (
                              <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                      <Typography>{c.contentName}</Typography>
                                   <ArrowDropDownIcon/>
                                  </AccordionSummary>
                                  {
                                      c.contentLessons &&
                                      c.contentLessons.map((cl, index) => (
                                          <AccordionDetails key={index}>
                                              <Typography display="flex" alignItems="center">
                                               <PlayCircleIcon/>  {cl.lessonName}
                                              </Typography>
                                          </AccordionDetails>
                                      ))
                                  }

                              </Accordion>
                          ))
                    }
                        
                      </div>



                      {/* {Accordion end} */}

                </Grid>
                <Grid item lg={4}>
                    <div className='course_feature'>
                         <h4>Course Feature</h4>
                          <ul>
                            <li>Raiting:{courses.rating}
                            <br />
                            <Rating name="read-only" value={courses.raiting} readOnly /></li>
                            <hr />
                            <li>Duration:{courses.duraction}</li>
                            <hr />
                            <li>Price:{courses.price}</li>
                           
                          </ul>
                    
                    </div>
                </Grid>
            </Grid>
        </>
    )
}






export default CourseDetail




