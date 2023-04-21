import React from 'react';
import { stats } from '../utils/constants';
import styles from '../styles';

const Stats = () => (
  <div className={`${styles.paddings} mt-11`}>
    <div className="grid gap-11 sm:gap-40 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h2 className="text-xl font-bold text-gradient leading-tight">
            {stat.value}
          </h2>
          <p className="font-semibold text-base uppercase">{stat.title}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Stats;
