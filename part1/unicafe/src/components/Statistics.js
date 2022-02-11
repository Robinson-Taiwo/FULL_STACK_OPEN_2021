import React from 'react';
import StatisticLine from './StatisticLine';
import Button from './Button';

const Statistics = (props) => {


    
  return <div>
<h1>statistics</h1>
<StatisticLine name={'good'} value={props.good} />
<StatisticLine name={'neutral'} value={props.neutral} />
<StatisticLine name={'bad'} value={props.bad} />
<StatisticLine name={'all'} value={props.all} />
<StatisticLine name={'average'} value={props.average} />
<StatisticLine name={'positive'} value={props.positive} />


  </div>;
};

export default Statistics;
