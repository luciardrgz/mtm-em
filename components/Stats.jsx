import React from 'react';
import { stats } from '../utils/constants';
import styles from '../styles';

const Stats = () => (
  <div className={`${styles.paddings}`}>
    <div className="grid md:grid-cols-3 gap-5 md:gap-11">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h2 className="text-lg md:text-xl font-bold text-gradient">
            {stat.value}
          </h2>
          <p className="font-semibold text-md md:text-base uppercase leading-tight">{stat.title}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Stats;
