import React from 'react'
import Card from 'react-bootstrap/Card';
import './LandingPage.css'
export default function LandingPage() {

    function getCard(userId) {
        return (
            <Card border="secondary" style={{ width: '19rem', height:'14rem'}}>
                <div className='cardContainer'>
                <Card.Body>
                    <Card.Title style={{marginBottom:'0px'}}>NameHere</Card.Title>
                    <div className='designationOfTheUser'>
                        designation here
                    </div>
                    <Card.Text className="text-muted cardTextStyle">
                        QUICK LINKS
                    </Card.Text>
                    <Card.Text className="text-muted cardTextStyle">
                        My open issues
                    </Card.Text>
                    <Card.Text className="text-muted cardTextStyle">
                        Done issues
                        <span style={{marginLeft:'50%'}}>
                        {getRectangularChip(0)}
                        </span>
                    </Card.Text>
                    <hr style={{height:'1px', color:'lightgray'}}/>
                    <Card.Text className="text-muted cardTextStyle">
                        1 board
                    </Card.Text>
                </Card.Body>
                </div>
            </Card>
        );
    }

    function getAssignedchip(value) {
        return (
            <div className='circularChip'>
                {value}
            </div>
        )
    }

    function getRectangularChip(value){
        return(
            <div className='rectangularChip'>
                <span>
                {value}
                </span>
            </div>
        )
    }
    return (
        <div className='LandingPage'>
            <div className='LandingMainHeading'>
                <h3>Your Work</h3>
            </div>
            <div className='RecentProjectSection'>
                <div className='LandingSubHeading'>
                    <span className='recentProjectHeading'>Recent Projects</span>
                    <span className='viewProjects'>View all projects</span>
                </div>
                {/* user Cards run a loop */}
                <div className='RecentProjectsCards'> 
                    {getCard(0)}
                </div>
            </div>
            <div className='LandingAssignedProject'>
                <div className='AssignedProjectsHeading'>
                    <h6>Assigned to me {getAssignedchip(0)}</h6>
                </div>
                <hr style={{
                    height:'8px', color:'gray'
                }}/>
            </div>
        </div>
    )
}
