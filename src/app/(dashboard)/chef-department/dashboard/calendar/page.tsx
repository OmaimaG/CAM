import React from 'react';
import { DashboardHeader } from '@/components/header';
import { DashboardShell } from '@/components/shell';
import  Calendarcom  from '../../../rssi/_components/Calendarcom'
//import Calendarcom from '../../_components/Calendarcom.'; // Assurez-vous que le chemin d'accès est correct
// Importez les styles CSS du calendrier si nécessaire
import 'react-big-calendar/lib/css/react-big-calendar.css';


export default function Calendar() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Calendar" />
      <section>
      <Calendarcom />
      </section>
    </DashboardShell>
  );
}
