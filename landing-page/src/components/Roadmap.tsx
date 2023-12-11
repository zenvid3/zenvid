//@ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'

export default function Roadmap() {
  return (
    <div>
    <div className='flex flex-col gap-3 items-center justify-center my-5'>
    <h1 className='text-blue-600 font-semibold text-2xl'>ROADMAP</h1>
    <h2 className='text-3xl  text-white'>What is ahead of us?</h2>
    <p className='text-white text-xl text-center'>Please be aware that the roadmap is high-level concept,<br /> and not a guarantee. Roadmap will change over time</p>
    </div>
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2563eb', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 Q4 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Ideation, Market Research, </h3>
    <h4 className="vertical-timeline-element-subtitle">and the Grand Debut of Our MVP</h4>
    <p>
     focus shifts to a dual mission—immersing ourselves in comprehensive market research and gearing up for the  launching an  MVP
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work text-white"
    date="2024 -Q1"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
  >
    <div className='text-black'>
    <h3 className="vertical-timeline-element-title">Working on testers bug reports / and requests</h3>
    <h4 className="vertical-timeline-element-subtitle">Introducing offchain points (gamification)</h4>
    <p>
      
Enhancing the platform based on valuable feedback and requests gathered during the MVP testing period and 
Introducing off-chain points (gamification) to reward various user activities is in the Platform, promising an engaging and rewarding experience for our community
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work text-white"
    date="2024 - Q2"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
     <div className='text-black'>
    <h3 className="vertical-timeline-element-title">Android and</h3>
    <h4 className="vertical-timeline-element-subtitle">IOS  app</h4>
    <p>
    Crafting a native application to streamline content uploads for creators and seamless access for fans, regardless of location
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work text-white"
    date="2024 - Q3"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
  >
    <div className='text-black'>
    <h3 className="vertical-timeline-element-title">Yotube Sync</h3>
    <p>
     
Introducing the YouTube sync feature: effortlessly link your YouTube channel to sync content directly to Paxfy.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education text-white"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  
  >
    <div>
    <h3 className="vertical-timeline-element-title">parternership program</h3>
    <p>
    Creation and management of bounties encompassing a variety of interest areas to get new users involved with the project.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   
  />
</VerticalTimeline>
    </div>
  )
}
