import React from 'react';
import { stats } from '../utils/constants';

const Stats = () => (
  <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-9">
    <div className="grid gap-11 sm:gap-40 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h6 className="text-xl font-bold text-gradient leading-tight">
            {stat.value}
          </h6>
          <p className="font-semibold text-base uppercase">{stat.title}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Stats;
