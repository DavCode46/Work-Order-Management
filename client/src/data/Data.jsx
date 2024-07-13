import {
    MdOutlineDashboardCustomize,
    MdOutlineEventNote,
    MdOutlineBuild,
    MdOutlineSpeed,
    MdOutlineWidgets,
    MdOutlineLocationOn,
    MdOutlineAssessment,
    MdOutlineMoreHoriz
  } from 'react-icons/md';

const MENU_DATA =
    [
        {
          key: 'dashboard',
          label: 'Dashboard',
          path: '/dashboard',
          icon: MdOutlineDashboardCustomize,
        },
        {
          key: 'planner',
          label: 'Planner',
          path: '/planner',
          icon: MdOutlineEventNote,
        },
        {
          key: 'maintenance',
          label: 'Maintenance',
          path: '/maintenance',
          icon: MdOutlineBuild,
        },
        {
          key: 'meters',
          label: 'Meters',
          path: '/meters',
          icon: MdOutlineSpeed,
        },
        {
          key: 'items',
          label: 'Items',
          path: '/items',
          icon: MdOutlineWidgets,
        },
        {
          key: 'locations',
          label: 'Locations',
          path: '/locations',
          icon: MdOutlineLocationOn,
        },
        {
          key: 'reports',
          label: 'Reports',
          path: '/reports',
          icon: MdOutlineAssessment,
        },
        {
          key: 'more',
          label: 'More',
          path: '/more',
          icon: MdOutlineMoreHoriz,
        },
      ];


export { MENU_DATA }
