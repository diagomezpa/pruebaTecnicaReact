import React from 'react';
import {CardsRecentInvoices} from './seccion/CardsRecentInvoices';
import {CardContactUs } from './seccion/CardContactUs';
import {CardRecommendProject} from './seccion/CardRecommendProject';


export const SeccionTwo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>
            <CardsRecentInvoices></CardsRecentInvoices>
            <CardContactUs></CardContactUs>
          </div>
          <CardRecommendProject></CardRecommendProject>
        </section>
  )
}
