import React from 'react';
import './MonthlyChart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
  { name: "January", Total: 200 },
  { name: "February", Total: 1200 },
  { name: "March", Total: 600 },
  { name: "April", Total: 1300 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "July", Total: 1100 },
  { name: "August", Total: 2000 },
];


const MonthlyChart = ({aspect, title}) => {
  return (
    <div className='Chart-container'>

 <div className="top">
 <h1 className='title'>{title}</h1>
        <MoreVertIcon className='icon' />
      </div>

<ResponsiveContainer width="100%" aspect={aspect}>
<AreaChart width={630} height={200} data={data} 
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    
  </defs>
  <XAxis dataKey="name" stroke='grey' style={{ fontSize: "14px", margin: "15px"  }} />
  <YAxis unit={" $ "} style={{ fontSize: "14px", color: "gray"}} />
  <CartesianGrid strokeDasharray="3 3" className='grid' />
  <Tooltip />
  <Area type="monotone"  dataKey="Total"  unit={" $"} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  
</AreaChart>
      </ResponsiveContainer>



    </div>
  )
}

export default MonthlyChart