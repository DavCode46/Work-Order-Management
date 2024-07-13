import Container from '@components/UI/Container/Container'
import { Link } from 'react-router-dom'

import './dashboard.css'
const Dashboard = () => {

  const sections = [
    {
      title: 'Active Work Requests',
      items: [
        { title: 'My WRs', content: '0', link: 'Revision pending 0' },
        { title: 'Approval Pending', content: '0', link: 'High Priority 0' }
      ]
    },
    {
      title: 'In Progress Work Orders',
      items: [
        { title: 'In Progress WO', content: '0', link: 'Supervised By Me 0' },
        { title: 'WO in review', content: '0', link: 'Review On Me 0' },
        { title: 'My WRs', content: '0', link: 'WO Overdue 0' }
      ]
    },
    {
      title: 'Pending Work Orders',
      items: [
        { title: 'Unssigned WO', content: '0', link: 'Supervised By Me 0' },
        { title: 'Open WO', content: '0', link: 'Supervised By Me 0' },
        { title: 'Open Preventive WO', content: '0', link: 'Supervised By Me 0' },
        { title: 'WO Start Date Due', content: '0', link: 'Starting today 0' }
      ]
    },
    {
      title: 'Work Orders',
      items: []
    },
    {
      title: 'Work Requests',
      items: []
    },
    {
      title: 'Purchases',
      items: []
    },
    {
      title: 'Mentions',
      items: []
    },
    {
      title: 'Work Order Insights',
      items: [
        { title: 'Unplanned Work Orders %', content: '100.00%', link: 'Vs Last Month 100.00%' },
        { title: 'Mean Time to Start', content: '1m', link: 'Vs Last Month 1m' },
        { title: 'Mean Time to respond', content: '--', link: 'Vs Last Month --' }
      ]
    },
    {
      title: 'Maintenance Cost',
      items: ['Gráfico']
    }
  ];

  return (
    <div className="dashboard">
      <h1>My Dashboard</h1>
      <div className='dashboard__bento'>
        {sections.map((section, index) => (
          <Container key={index} title={section.title}>
            {section.items.map((item, idx) => (
              <Container key={idx}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <Link>{item.link}</Link>
              </Container>
            ))}
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Dashboard